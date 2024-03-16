import { notFound } from "next/navigation";

import Navigater from "@/components/ui/navigater";
import { MDXContent } from "@/components/common/mdx-content";
import { getFormatDate } from "@/lib/utils";
import { blogs } from "#site/content";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = blogs.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return blogs.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Navigater Href="/blog" />
      {post.published ? (
        <div className="h-auto bg-white">
          <div className="w-full flex justify-center bg-gradient-to-b from-zinc-900 to bg-black">
            <div className="py-12 mt-20">
              <div className="px-4 mb-5 flex flex-col ">
                <time className="mb-6 text-lg  text-zinc-300">
                  {getFormatDate(post.date)}
                </time>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-300">
                  {post.description}
                </p>
              </div>
              <div className="">
                <article className="px-4 py-12 mx-auto prose prose-zinc prose-invert prose-quoteless">
                  <MDXContent code={post.body} />
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
