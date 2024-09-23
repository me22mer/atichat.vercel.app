import type { Metadata } from "next";
import { getPosts } from "@/lib/mdx";
import { sortPosts } from "@/lib/sortposts";
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
import { Link } from "next-view-transitions";
import { CalendarIcon, ArrowRightIcon, ClockIcon } from "lucide-react";
import AnimatedSection from "@/ui/animated-section";
import Image from "next/image";
import { getFormatDate } from "@/lib/useformatdate";

export const metadata: Metadata = {
  title: "Projects | My Portfolio",
  description: "Explore my personal projects and initiatives.",
};

function isProjectPublished(publishedAt: string | number): boolean {
  const publishDate = new Date(publishedAt);
  const currentDate = new Date();
  return publishDate <= currentDate;
}

function isProjectComingSoon(publishedAt: string | number): boolean {
  const publishDate = new Date(publishedAt);
  const currentDate = new Date();
  const threeDaysFromNow = new Date(
    currentDate.getTime() + 3 * 24 * 60 * 60 * 1000
  );
  return publishDate > currentDate && publishDate <= threeDaysFromNow;
}

function ProjectCard({ post, slug }: { post: ProjectMeta; slug: string }) {
  const { title, description, publishedAt, tags, thumbnail, status } = post;

  const isPublished = isProjectPublished(publishedAt);
  const isComingSoon = isProjectComingSoon(publishedAt);
  const formattedDate = getFormatDate(publishedAt);

  if (!isPublished && !isComingSoon) {
    return null;
  }

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
      className={`overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-800 border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full relative ${
        isComingSoon ? "opacity-75" : ""
      }`}>
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={thumbnail || "/placeholder.svg?height=192&width=384"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-300 hover:scale-105 ${
            isComingSoon ? "filter blur-lg" : ""
          }`}
        />
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex justify-between">
          {title}
          {status && !isComingSoon && (
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
        {!isComingSoon && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags &&
              tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300">
                  {tag}
                </Badge>
              ))}
          </div>
        )}
        <div className="flex items-center text-sm text-zinc-500">
          {isComingSoon ? (
            <>
              <ClockIcon className="mr-2 h-4 w-4" />
              <span>Publishing on {formattedDate}</span>
            </>
          ) : (
            <>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time>{formattedDate}</time>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="w-full justify-center text-blue-400 hover:text-blue-300 hover:bg-zinc-900"
          disabled={isComingSoon}>
          <Link href={`/${slug}`} passHref>
            {isComingSoon ? "Coming Soon" : "View Project"}
            {!isComingSoon && <ArrowRightIcon className="ml-2 h-4 w-4" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function ProjectsPage() {
  const posts = await getPosts<ProjectMeta>("projects");
  const sortedPosts = sortPosts(posts);

  const visiblePosts = sortedPosts.filter(
    (post) =>
      isProjectPublished(post.frontmatter.publishedAt) ||
      isProjectComingSoon(post.frontmatter.publishedAt)
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
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
