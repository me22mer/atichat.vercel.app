import type { Metadata } from "next";
import { getPosts } from "@/lib/mdx";
import { ProjectMeta } from "type";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import Link from "next/link";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";
import AnimatedSection from "@/ui/animated-section";
import Image from "next/image";
import { getFormatDate, isPublished, sortPosts } from "@/lib/post-utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my personal projects and initiatives.",
};

export const revalidate = 60;

function ProjectCard({ post, slug }: { post: ProjectMeta; slug: string }) {
  const { title, description, publishedAt, thumbnail, status } = post;

  const formattedDate = getFormatDate(publishedAt);

  const getStatusVariant = (status) => {
    const statusMap = {
      "In Progress": "in-progress",
      Complete: "complete",
      "On Hold": "on-hold",
      Planned: "planned",
    };
    return statusMap[status];
  };

  return (
    <Card
      className={`overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-800 border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full relative`}>
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={thumbnail || "/placeholder.svg?height=192&width=384"}
          alt={title}
          fill
          className={`transition-transform duration-300 hover:scale-105 object-cover`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex justify-between">
          {title}
          {status && (
            <Badge
              variant="status"
              status={getStatusVariant(status)}
              className="z-10 w-max px-2 py-1 text-xs font-semibold rounded-sm">
              {status}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
        <div className="flex items-center text-sm text-zinc-500">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <time>{formattedDate}</time>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="w-full justify-center text-blue-400 hover:text-blue-300 hover:bg-zinc-900">
          <Link href={`${slug}`}>
            <p>View Project</p>
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function ProjectsPage() {
  const posts = await getPosts<ProjectMeta>("projects");
  const sortedPosts = sortPosts(posts);

  const visiblePosts = sortedPosts.filter((post) =>
    isPublished(post.frontmatter.publishedAt)
  );

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <AnimatedSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Explore my personal projects and initiatives. Each project
              represents a unique challenge and learning experience in my
              journey as a developer.
            </p>
          </header>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <ProjectCard post={post.frontmatter} slug={post.slug} />
            </AnimatedSection>
          ))}
        </div>
        {visiblePosts.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">
                No projects available
              </h2>
              <p className="text-zinc-400">Check back soon for updates!</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
