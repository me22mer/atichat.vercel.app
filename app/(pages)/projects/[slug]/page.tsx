import Link from "next/link";
import { notFound } from "next/navigation";

import Navigater from "@/ui/navigater";

import { getFormatDate } from "@/lib/useformatdate";
import { getPostBySlug, getPosts } from "@/lib/mdx";

import { ProjectMeta } from "type";

export async function generateStaticParams() {
  const posts = await getPosts<ProjectMeta>("projects");

  if (!posts) return notFound();

  return posts.map((post) => ({
    postId: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getPosts<ProjectMeta>("projects")).find(
    (post) => post.slug
  );

  if (!post) {
    return notFound();
  }

  return {
    title: params.slug,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug<ProjectMeta>(`projects/${params.slug}`);

  const { frontmatter, content } = post;

  if (!frontmatter.published || !post) {
    return notFound();
  }

  return (
    <div>
      <Navigater pageHeading="PROJECT" />
      <div className="h-auto max-w-full  bg-zinc-950">
        <div className="w-full h-full pt-40 pb-20  ">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="px-4 md:px-6 flex flex-col ">
              <time className="mb-6 text-lg  text-zinc-300">
                {getFormatDate(frontmatter.publishedAt)}
              </time>
              <h1 className="text-2xl md:text-6xl font-bold tracking-tight text-white font-display">
                {frontmatter.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                {frontmatter.description}
              </p>
            </div>
            <div className="mt-8 font-semibold space-x-7 text-zinc-300">
              {frontmatter.repository && (
                <Link
                  href={frontmatter.repository}
                  target="_blank"
                  className="after:content-['_↗']">
                  Github
                </Link>
              )}
              {frontmatter.url && (
                <Link
                  href={frontmatter.url}
                  target="_blank"
                  className="after:content-['_↗']">
                  Website
                </Link>
              )}
            </div>
          </div>
        </div>
        <hr className=" border-zinc-800" />
        <div className="w-full my-20 flex justify-center px-4 ">
          <article className="max-w-full md:max-w-[620px] prose prose-zinc prose-invert prose-quoteless prose-pre:bg-zinc-800/70 prose-img:rounded-lg ">
            {content}
          </article>
        </div>
      </div>
    </div>
  );
}
