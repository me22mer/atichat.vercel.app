import { notFound } from "next/navigation";

import { getFormatDate } from "@/lib/utils";
import { getBlogBySlug, getBlogs } from "@/lib/posts";

import Navigater from "@/components/ui/navigater";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getBlogs();

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
  const post = (await getBlogs()).find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.slug,
  };
}
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);

  const { frontmatter, content } = post;

  if (!frontmatter.published || !post) {
    return notFound();
  }

  return (
    <div>
      <Navigater />
      <div className="h-auto">
        <div className="w-full">
          <div className="py-12 flex flex-col justify-center bg-gradient-to-b from-zinc-800/60 to bg-black">
            <div className="px-4 mt-14 mb-10 flex flex-col items-center">
              {frontmatter.coverImage ? (
                <Image
                  src={frontmatter.coverImage}
                  width={920}
                  height={460}
                  className="mb-8 w-[920px] h-max-content md:h-[460px] rounded-xl object-contain md:object-cover shadow-lg shadow-black/50"
                  alt=""
                  priority
                  sizes="(max-width: 1024px) 100vw"
                  placeholder="blur"
                  blurDataURL="/images/blog/blur.jpg"
                />
              ) : null}
              <div className="w-full md:max-w-[672px] flex flex-col">
                <div className="mb-3">
                  <h1 className=" font-bold text-5xl tracking-tight text-zinc-100 sm:text-7xl">
                    {frontmatter.title}
                  </h1>
                </div>
                <time className="mb-3 text-[1.1rem] font-medium text-zinc-300/80">
                  {getFormatDate(frontmatter.publishedAt)}
                </time>
              </div>
            </div>
            <div className="mb-20 w-full flex justify-center px-4">
              <article className="max-w-full md:max-w-[672px] mx-auto prose prose-zinc prose-invert prose-quoteless prose-pre:bg-zinc-800/70 prose-img:rounded-lg">
                {content}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
