import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { BlogMeta } from "type";
import { Badge } from "@/ui/badge";
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/ui/animated-section";
import { getFormatDate } from "@/lib/post-utils";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await getPosts<BlogMeta>("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<BlogMeta>("blog", params.slug);
  if (!post) return notFound();
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<BlogMeta>("blog", params.slug);

  if (!post || !post.frontmatter.published) return notFound();

  const { frontmatter, content } = post;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center text-zinc-400 hover:text-zinc-200 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </AnimatedSection>

        <article className="my-24">
          <header className="mb-12">
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {frontmatter.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 text-zinc-400 mb-6">
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  <time>{getFormatDate(frontmatter.publishedAt)}</time>
                </div>
                {frontmatter.readingTime && (
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>{frontmatter.readingTime} min read</span>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {frontmatter.tags && (
              <AnimatedSection delay={0.3}>
                <div className="flex items-center flex-wrap gap-2 mb-8">
                  <TagIcon className="w-5 h-5 mr-2 text-zinc-400" />
                  {frontmatter.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {frontmatter.coverImage && (
              <AnimatedSection delay={0.4}>
                <div className="mb-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={frontmatter.coverImage}
                    fill
                    alt={frontmatter.title}
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedSection>
            )}
          </header>

          <AnimatedSection delay={0.5}>
            <div className="prose prose-lg prose-invert prose-zinc max-w-none">
              {content}
            </div>
          </AnimatedSection>
        </article>
      </main>
    </div>
  );
}
