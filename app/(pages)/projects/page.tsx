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
import { Link } from "next-view-transitions";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";
import AnimatedSection from "@/ui/animated-section";

export const metadata: Metadata = {
  title: "Projects",
  description: "This is a project of my own initiative and practice.",
};

function ProjectCard({ post, slug }: { post: ProjectMeta; slug: string }) {
  const { title, description, publishedAt, published, tags } = post;
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!published) {
    return null;
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
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
        <div className="flex items-center text-sm text-zinc-500">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <time>{formattedDate}</time>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/${slug}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
          View Project
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default async function ProjectsPage() {
  const posts = await getPosts<ProjectMeta>("projects");
  const sortedPosts = sortPosts(posts);

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <AnimatedSection>
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-zinc-400">
              Explore my personal projects and initiatives.
            </p>
          </header>
        </AnimatedSection>
        <div className="grid gap-8 ">
          {sortedPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.2}>
              <ProjectCard post={post.frontmatter} slug={post.slug} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
