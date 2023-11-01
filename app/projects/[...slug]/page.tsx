import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostBySlug from "lib/getPostBySlug";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostBySlug();
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const posts = getPostContent(slug);

  return (
    <div>
      <nav className="w-full fixed backdrop-blur duration-200 bg-zinc-900/0">
        <div className="py-6 px-10">
          <Link href="/projects">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#fff"
                className="invert-[.45]"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
      <div className="w-full">
        <div className="py-24 sm:py-32 flex justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <div className=" px-6 flex flex-col text-center">
            <p className="mb-6 text-lg  text-zinc-300">{posts.data.date}</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {posts.data.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {posts.data.subtitle}
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <div className="p-6 ">
            <article className="prose prose-zinc">
              <Markdown>{posts.content}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
