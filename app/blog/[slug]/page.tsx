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
    <>
      <Navigater Href="/blog" />
      {published ? (
        <div className="h-auto bg-white">
          <div className="w-full flex justify-center bg-gradient-to-b from-zinc-900 to bg-black">
            <div className="py-12 mt-20 ">
              <div className="px-4 mx-auto mb-5 flex flex-col ">
              <time className="mb-2 text-sm  text-zinc-300">
                  {getFormatDate(date)}
                </time>
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                  {title}
                </h1>
                <p className="mb-3 text-xl leading-8 text-zinc-300">
                  {description}
                </p>
                
              </div>
              <div className="">
                <article className="px-4 mx-auto prose prose-zinc prose-invert prose-quoteless">
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
    </>
  );
}
