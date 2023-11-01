import getPostBySlug from "lib/getPostBySlug";
import Link from "next/link";
import { Header } from "@/components/header";
export default function ProjectsPage() {
  const posts = getPostBySlug();

  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <div className="m-6 w-[710px] divide-y divide-zinc-600">
          <div className="mb-6  divide-y divide-zinc-700">
            <div className="mb-16">
              <h2 className="mb-2 text-3xl font-bold">Projects</h2>
              <p>I&apos;ve done some projects on my own time.</p>
            </div>
            <div className="">
              <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
                {posts.map((post) => (
                  <li
                    key={post.slug}
                    {...post}
                    className="max-md:w-full w-[345px] p-6 border border-zinc-600 rounded-xl"
                  >
                    <Link href={`/projects/${post.slug}`}>
                      <article className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
                        <p className="text-xs ">{post.date}</p>
                        <h1 className="text-2xl text-zinc-50 font-bold mt-2">
                          {post.title}
                        </h1>
                        <p className="text-sm  mt-3">{post.subtitle}</p>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
