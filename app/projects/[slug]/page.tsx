import getFormattedDate from "@/lib/getFomattedDate";
import { getSortedPosts, getPost } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getSortedPosts();
  const { slug } = params;

  const post = posts.find((post) => post.id === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { title, date, subtitle, contentHtml } = await getPost(slug);

  const pubDate = getFormattedDate(date);

  return (
    <div>
      <nav className="w-[710px] fixed backdrop-blur duration-200 bg-zinc-900/0">
        <div className="py-6 px-10">
          <Link href="/projects">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="invert-[.45]"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
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
            <p className="mb-6 text-lg  text-zinc-300">{pubDate}</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{subtitle}</p>
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <div className="p-6 ">
            <article className="prose prose-zinc">
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
