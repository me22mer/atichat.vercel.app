import { notFound } from "next/navigation";

import { getFormatDate } from "@/lib/utils";
import { getBlogPost, getBlogMeta } from "@/lib/posts";
import "highlight.js/styles/github-dark.css";

import Navigater from "@/components/ui/navigater";

export async function generateStaticParams() {
  const posts = await getBlogMeta();

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
  const post = await getBlogPost(params.slug);

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
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <div>
      <Navigater />
      {meta.published ? (
        <div className="h-auto bg-white">
          <div className="w-full ">
            <div className="py-12 flex flex-col justify-center bg-gradient-to-b from-zinc-900/50 to bg-black">
              <div className="px-4 mt-20 mb-10 flex justify-center">
                <div className="w-[618px] flex flex-col">
                  <time className="mb-2 text-sm  text-zinc-300">
                    {getFormatDate(meta.date)}
                  </time>
                  <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                    {meta.title}
                  </h1>
                  <p className="mb-6 text-xl leading-8 text-zinc-300">
                    {meta.description}
                  </p>
                  <hr className=" border-zinc-600" />
                </div>
              </div>

              <div className="w-full">
                <article className="px-4 mx-auto prose prose-zinc prose-invert prose-quoteless prose-pre:bg-zinc-800/70 prose-img:rounded-lg">
                  <section dangerouslySetInnerHTML={{ __html: content }} />
                </article>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-zinc-900 to bg-black">
          <div className="px-4 mb-10 flex flex-col ">
            <h1 className="text-4xl font-bold text-white sm:text-6xl ">
              Soon&trade;
            </h1>
            <p className="mt-6 text-lg text-center leading-8 text-zinc-300"></p>
          </div>
        </div>
      )}
    </div>
  );
}
