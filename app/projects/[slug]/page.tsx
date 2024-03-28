import Link from "next/link";
import { notFound } from "next/navigation";

import Navigater from "@/components/ui/navigater";
import { getFormatDate } from "@/lib/utils";
import { getProjectMeta, getProjectPost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getProjectMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getProjectPost(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.meta.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getProjectPost(params.slug);

  const { meta, content } = post;
  
  if (!meta.published || !post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigater />
      <div className="w-full bg-black">
        <div className="py-24 sm:py-26 flex flex-col justify-center items-center text-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <div className=" px-6 flex flex-col ">
            <time className="mb-6 text-lg  text-zinc-300">
              {getFormatDate(meta.date)}
            </time>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {meta.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {meta.description}
            </p>
          </div>
          <div className="mt-8 font-semibold space-x-7">
            {meta.repository && (
              <Link
                href={meta.repository}
                target="_blank"
                className="after:content-['_↗']"
              >
                Github
              </Link>
            )}
            {meta.url && (
              <Link
                href={meta.url}
                target="_blank"
                className="after:content-['_↗']"
              >
                Website
              </Link>
            )}
          </div>
        </div>
        <div className="bg-white">
          <div className="">
            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
              <section dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
