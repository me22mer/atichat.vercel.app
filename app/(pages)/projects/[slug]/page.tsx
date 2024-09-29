import { notFound } from "next/navigation";
import { Calendar, Github, Globe, ArrowUpRight } from "lucide-react";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { ProjectMeta } from "type";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import Navigation from "@/ui/navigater";
import AnimatedSection from "@/ui/animated-section";
import ScrollUpButton from "@/ui/scrollup-button";
import { getFormatDate } from "@/lib/post-utils";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts<ProjectMeta>("projects");
  if (!posts) return notFound();
  return posts.map((post) => ({ postId: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getPosts<ProjectMeta>("projects")).find((post) => post.slug);
  if (!post) return notFound();

  return {
    title: post.frontmatter.title,
  };
}

function isProjectPublished(publishedAt: string | number): boolean {
  const publishDate = new Date(publishedAt);
  const currentDate = new Date();
  return publishDate <= currentDate;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<ProjectMeta>(`projects/${params.slug}`);

  if (!post) return notFound();

  const { frontmatter, content } = post;
  const isPublished = isProjectPublished(frontmatter.publishedAt);

  if (!isPublished) return notFound()
    
  return (
    <div className="min-h-screen bg-zinc-100">
      <Navigation />

      <header className="bg-zinc-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection delay={0}>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="mr-2 h-5 w-5" />
                <time className="text-zinc-300">
                  {getFormatDate(frontmatter.publishedAt)}
                </time>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {frontmatter.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-xl text-zinc-300 mb-8">
                {frontmatter.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {frontmatter.tags &&
                  frontmatter.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-200">
                      {tag}
                    </Badge>
                  ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex justify-center space-x-4">
                {frontmatter.repository && (
                  <Button asChild variant="outline">
                    <a
                      href={frontmatter.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {frontmatter.url && (
                  <Button asChild variant="outline">
                    <a
                      href={frontmatter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </header>

      <AnimatedSection delay={1.0}>
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto prose prose-zinc prose-lg prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600">
            {content}
          </article>
        </main>
      </AnimatedSection>

      <ScrollUpButton />
    </div>
  );
}
