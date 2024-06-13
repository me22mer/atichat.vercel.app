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

  posts.sort((a, b) => {
    if (
      new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)
    ) {
      return 1;
    }
    return -1;
  });

  return (
    <div className="relative bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black">
      <Header /> {/* Header section */}
      <div className="flex justify-center">
        <div className="mx-4 mb-6 w-[672px] pt-20 md:mx-6">
          <div className="flex flex-col gap-6">
            <div className="mb-10 md:pr-20">
              <div className="text-2xl font-extrabold leading-10 text-white md:text-[1.9rem] md:leading-[3rem]">
                <h1 className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-tight text-transparent">
                  I&apos;m Atichat, a front-end developer dedicated to crafting{" "}
                  <FlipWords words={words} /> websites using React.{" "}
                </h1>
              </div>
            </div>{" "}
            {/* Introduction section */}
            <div className="my-10">
              <div className="prose prose-invert prose-li:marker:text-white">
                <div>
                  <h1 className="text-2xl font-bold underline decoration-zinc-700 decoration-4">
                    About Me
                  </h1>
                  <p className="leading-loose">
                    I&apos;m a 21-year-old student at Sripatum University in
                    Thailand, where I&apos;m studying Information and
                    Communication Technology. Currently, I&apos;m diving into
                    TypeScript, <NextjsIcon />, <ReactIcon /> and{" "}
                    <TailwindcssIcon />. Despite my preference for front-end web
                    development, I&apos;m always keen on tackling new
                    challenges.
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
                </div>{" "}
                {/* About Me section */}
                <div className="group relative my-2 inline-flex h-max w-max rounded-md">
                  <div className="transitiona-all absolute -inset-px h-full w-full animate-gradient rounded-md bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] bg-300% opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link
                    href="/resume"
                    className="relative inline-flex rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-2.5 text-sm text-zinc-300 no-underline duration-300 hover:text-zinc-100"
                  >
                    Explore my profile
                  </Link>
                </div>{" "}
                {/* Link to Resume section */}
                <div className="my-16">
                  <h4 className="underline decoration-zinc-700 decoration-4">
                    Latest Article
                  </h4>
                  {posts.map((post, idx) => (
                    <ul key={idx}>
                      {post.frontmatter.published ? (
                        <li key={post.slug}>
                          <Link href={`/${post.slug}`} className="no-underline">
                            <p className="space-x-3">
                              <span>
                                {getFormatDate(post.frontmatter.publishedAt)}
                              </span>{" "}
                              <span>{post.frontmatter.title}</span>{" "}
                            </p>
                          </Link>
                        </li>
                      ) : null}
                    </ul>
                  ))}
                </div>{" "}
                {/* Latest Article section */}
                <h4 className="underline decoration-zinc-700 decoration-4">
                  Connect
                </h4>
                <div className="inline-flex flex-col space-y-1.5 text-sm">
                  <a
                    href="https://github.com/me22-a"
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
                    @me22
                  </a>
                  <a
                    href="https://web.facebook.com/atichat.thongnak.1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded px-3 py-2 no-underline duration-200 hover:bg-zinc-800"
                  >
                    {" "}
                    <svg
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`mr-3.5 fill-white transition-colors duration-500`}
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                    @Atichat Thongnak
                  </a>
                  <a
                    href="https://twitter.com/me22_real"
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
                    @me22_real
                  </a>
                </div>{" "}
                {/* Social Media Links section */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer section */}
    </div>
  );
}
