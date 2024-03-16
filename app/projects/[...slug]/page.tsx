import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "#site/content";

import Navigater from "@/components/ui/navigater";
import { MDXContent } from "@/components/common/mdx-content";
import { getFormatDate } from "@/lib/utils";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = projects.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return projects.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigater Href="/projects" />
      <div className="w-full bg-black">
        <div className="py-24 sm:py-26 flex flex-col justify-center items-center text-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <div className=" px-6 flex flex-col ">
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
          <div className="mt-8 font-semibold space-x-7">
            {post.repository && (
              <Link
                href={post.repository}
                target="_blank"
                className="after:content-['_↗']"
              >
                Github
              </Link>
            )}
            {post.url && (
              <Link
                href={post.url}
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
              <MDXContent code={post.body} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
