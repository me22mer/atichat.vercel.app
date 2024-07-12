import { Link } from "next-view-transitions";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import NextjsIcon from "@/icons/Nextjs-Icon";
import ReactIcon from "@/icons/React-Icon";
import TailwindcssIcon from "@/icons/Tailwindcss-Icon";

import { getPosts } from "@/lib/mdx";
import { getFormatDate } from "@/utils/useformatdate";

import { BlogMeta } from "type";
import { FlipWords } from "@/ui/flip-words";

export default async function Home() {
  const posts = await getPosts<BlogMeta>("blog");

  const words = ["amazing", "beautiful", "fantastic"];

  return (
    <div className="relative bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black">
      <Header />
      <div className="flex justify-center">
        <div className="mx-4 mb-6 w-[672px] pt-20 md:mx-6">
          <div className="flex flex-col gap-6">
            <div className="mb-10  sm:pr-10 md:pr-20">
              <div className="text-2xl font-extrabold leading-10 text-white md:text-[1.9rem] md:leading-[3rem]">
                <h1 className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-tight text-transparent">
                  Hi I&apos;m Atichat, a front-end developer dedicated to
                  crafting <FlipWords words={words} /> websites using React.{" "}
                </h1>
              </div>
            </div>
            <div className="my-10">
              <div>
                <h1 className="mb-5 text-2xl font-bold underline decoration-zinc-700 decoration-4">
                  About Me
                </h1>
                <p className="leading-loose">
                  I&apos;m a 21-year-old student at Sripatum University in
                  Thailand, where I&apos;m studying Information and
                  Communication Technology. Currently, I&apos;m diving into
                  TypeScript, <NextjsIcon />, <ReactIcon /> and{" "}
                  <TailwindcssIcon />. Despite my preference for front-end web
                  development, I&apos;m always keen on tackling new challenges.
                </p>

                <p className="leading-loose">
                  I like the pixel art aesthetic and would like to make video
                  games. In addition, I like to watch anime, play video games,
                  and am a{" "}
                  <a
                    href="https://www.rockstargames.com/"
                    target="_blank"
                    className="no-underline"
                  >
                    RockstarGames
                  </a>{" "}
                  fan.
                </p>
              </div>
              <div className="my-5 inline-flex h-max w-max gap-3 rounded-md">
                <Link
                  href="/resume"
                  className="rounded-md bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-800 border border-zinc-700 px-2.5 py-2.5 text-sm text-zinc-50 no-underline shadow-lg transform transition-transform duration-300 hover:scale-105 "
                >
                  Explore my profile
                </Link>
                <Link
                  href="/projects"
                  className="rounded-md bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-800 border border-zinc-700 px-2.5 py-2.5 text-sm text-zinc-50 no-underline shadow-lg transform transition-transform duration-300 hover:scale-105 "
                >
                  My projects
                </Link>
              </div>
              <div className="my-16 w-full">
                <h4 className="mb-4 underline font-bold decoration-zinc-700 decoration-4">
                  Latest Article
                </h4>
                {posts.map((post, idx) => (
                  <div key={idx} className="w-full">
                    {post.frontmatter.published ? (
                      <Link
                        key={post.slug}
                        href={`/${post.slug}`}
                        className=" no-underline hover:underline"
                      >
                        <p className="px-4 py-2.5 mt-0 mb-2.5 rounded-lg bg-gradient-to-br from-zinc-950 to-zinc-800 flex justify-between text-sm hover:to-zinc-800 hover:from-zinc-800 ">
                          <span>{post.frontmatter.title}</span>
                          <span>
                            {getFormatDate(post.frontmatter.publishedAt)}
                          </span>
                        </p>
                      </Link>
                    ) : null}
                  </div>
                ))}
              </div>
              {/* Latest Article section */}
              <h4 className="mb-5 underline font-bold decoration-zinc-700 decoration-4">
                Connect
              </h4>
              <div className="inline-flex flex-col space-y-1.5 text-sm">
                <a
                  href="https://github.com/me22mer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded px-3 py-2 no-underline duration-200 hover:bg-zinc-800"
                >
                  {" "}
                  <svg
                    width={24}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mr-3.5 fill-white transition-colors duration-500`}
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  @me22mer
                </a>
                <a
                  href="https://x.com/0o_asa_o0"
                  target="_blank"
                  aria-label="X"
                  className="flex items-center rounded px-3 py-2 no-underline duration-200 hover:bg-zinc-800"
                >
                  <svg
                    width={24}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mr-3.5 fill-white transition-colors duration-500`}
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  @Asa
                </a>
              </div>{" "}
              {/* Social Media Links section */}
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer section */}
    </div>
  );
}
