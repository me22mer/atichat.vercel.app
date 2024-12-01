import { notFound } from "next/navigation";
import { Calendar, Github, Globe, ArrowUpRight, Tag } from 'lucide-react';
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { ProjectMeta } from "type";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import Navigation from "@/ui/navigater";
import AnimatedSection from "@/ui/animated-section";
import ScrollUpButton from "@/ui/scrollup-button";
import { getFormatDate } from "@/lib/post-utils";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts<ProjectMeta>("projects");
  if (!posts) return notFound();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<ProjectMeta>(`projects/${params.slug}`);
  if (!post) return notFound();

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [{ url: post.frontmatter.thumbnail }],
    },
  };
}

function isProjectPublished(publishedAt: string | number): boolean {
  return new Date(publishedAt) <= new Date();
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<ProjectMeta>(`projects/${params.slug}`);

  if (!post) return notFound();

  const { frontmatter, content } = post;
  const isPublished = isProjectPublished(frontmatter.publishedAt);

  if (!isPublished) return notFound();
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-950 text-zinc-100">
      <Navigation />

      <header className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-2xl shadow-zinc-900">
                <Image
                  src={frontmatter.thumbnail || ""}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {frontmatter.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl text-zinc-300 mb-6">
                {frontmatter.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center text-zinc-400">
                  <Calendar className="mr-2 h-5 w-5" />
                  <time>{getFormatDate(frontmatter.publishedAt)}</time>
                </div>
                <div className="flex items-center text-zinc-400">
                  <Tag className="mr-2 h-5 w-5" />
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags &&
                      frontmatter.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-wrap gap-4">
                {frontmatter.repository && (
                  <Button asChild variant="outline">
                    <a
                      href={frontmatter.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {frontmatter.url && (
                  <Button asChild variant="default">
                    <a
                      href={frontmatter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <AnimatedSection delay={1.0}>
          <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300">
            {content}
          </article>
        </AnimatedSection>
      </main>

      <ScrollUpButton />
    </div>
  );
}

