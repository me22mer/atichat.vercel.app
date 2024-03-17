import { notFound } from "next/navigation";

import { getFormatDate } from "@/lib/utils";
import { getBlogPost, getSortedPosts } from "@/lib/posts";

import Navigater from "@/components/ui/navigater";

export async function generateStaticParams() {
  const { blogPosts } = await getSortedPosts();

  const blogSlugs = blogPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return [...blogSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { blogPosts } = await getSortedPosts();
  const { slug } = params;

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { title, date, description, published, contentHtml } =
    await getBlogPost(slug);

  return (
    <div>
      <Navigater Href="/blog" />
      {published ? (
        <div className="h-auto bg-white">
          <div className="w-full ">
            <div className="py-12 flex flex-col justify-center bg-gradient-to-b from-zinc-900/50 to bg-black">
              <div className="px-4 mt-20 mb-10 flex justify-center">
                <div className="w-[618px] flex flex-col">
                  <time className="mb-2 text-sm  text-zinc-300">
                    {getFormatDate(date)}
                  </time>
                  <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                    {title}
                  </h1>
                  <p className="mb-6 text-xl leading-8 text-zinc-300">
                    {description}
                  </p>
                  <hr className=" border-zinc-600" />
                </div>
              </div>

              <div className="w-full">
                <article className="px-4 mx-auto prose prose-zinc prose-invert prose-quoteless prose-pre:bg-zinc-800/70 prose-img:rounded-lg">
                  <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
