import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { getFormatDate } from "@/lib/useformatdate";
import { BlogMeta } from "type";
import { Card, CardContent } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { CalendarIcon, ClockIcon, TagIcon } from "lucide-react";
import Navigation from "@/ui/navigater";
import AnimatedSection from "@/ui/animated-section";

export async function generateStaticParams() {
  const posts = await getPosts<BlogMeta>("blog");
  if (!posts) return notFound();
  return posts.map((post) => ({ postId: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getPosts<BlogMeta>("blog")).find((post) => post.slug);
  if (!post) return notFound();
  return { title: params.slug };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<BlogMeta>(`blog/${params.slug}`);

  if (!post || !post.frontmatter.published) return notFound();

  const { frontmatter, content } = post;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100">
      <Navigation />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <article>
          <header className="mb-16">
            {/* Title with delay 0 */}
            <AnimatedSection delay={0}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                  {frontmatter.title}
                </h1>
              </div>
            </AnimatedSection>

            {/* Date and readingTime with delay 0.2 */}
            <AnimatedSection delay={0.2}>
              <div className="flex items-center space-x-4 text-zinc-400">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time>{getFormatDate(frontmatter.publishedAt)}</time>
                </div>
                {frontmatter.readingTime && (
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{frontmatter.readingTime} min read</span>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Cover Image with delay 0.4 */}
            {frontmatter.coverImage && (
              <AnimatedSection delay={0.4}>
                <div className="mb-8 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
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

            {/* Tags with delay 0.6 */}
            {frontmatter.tags && (
              <AnimatedSection delay={0.6}>
                <div className="flex items-center flex-wrap gap-2">
                  <TagIcon className="w-4 h-4 mr-2 text-zinc-400" />
                  {frontmatter.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </header>

          {/* Content with delay 0.8 */}
          <AnimatedSection delay={0.8}>
            <Card className="bg-zinc-800/50 border-zinc-700 backdrop-blur-sm">
              <CardContent className="p-6 md:p-10">
                <div className="prose prose-invert prose-zinc max-w-none">
                  {content}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </article>
      </main>
    </div>
  );
}
