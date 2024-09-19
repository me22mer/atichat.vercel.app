import GitHubIcon from "@/icons/Github-Icon";
import NextjsIcon from "@/icons/Nextjs-Icon";
import ReactIcon from "@/icons/React-Icon";
import TailwindcssIcon from "@/icons/Tailwindcss-Icon";
import TwitterIcon from "@/icons/Twitter-Icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Who am i",
};


export default function AboutPage() {
  return (
    <>
      <section
        className={`w-full h-[75dvh] bg-zinc-950 flex justify-normal md:justify-center items-center `}>
        <div className="w-full max-w-fit h-full mt-5 mb-20 mx-4 md:mx-10 pt-16 flex flex-col justify-center gap-20 ">
          <div className="prose prose-invert">
            <h1 className="mb-5 text-2xl font-bold">about me</h1>
            <p className="leading-loose md:text-justify">
              I&apos;m a 21-year-old student at Sripatum University in Thailand,
              where I&apos;m studying Information and Communication Technology.
              Currently, I&apos;m diving into TypeScript, <NextjsIcon />,{" "}
              <ReactIcon /> and <TailwindcssIcon />. Despite my preference for
              front-end web development, I&apos;m always keen on tackling new
              challenges.
            </p>
            <p className="leading-loose md:text-justify">
              I like the pixel art aesthetic and would like to make video games.
              In addition, I like to watch anime, play video games, and am a{" "}
              <a
                href="https://www.rockstargames.com/"
                target="_blank"
                className="no-underline">
                RockstarGames
              </a>{" "}
              fan.
            </p>
          </div>
          <div className="text-white">
            <h4 className="mb-5 font-bold">connect</h4>
            <div className="space-y-1.5 text-sm inline-flex flex-col">
              <a
                href="https://github.com/me22mer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded px-3 py-2 gap-2.5 no-underline duration-200 hover:bg-zinc-800">
                {" "}
                <GitHubIcon />
                @me22mer
              </a>
              <a
                href="https://x.com/0o_asa_o0"
                target="_blank"
                aria-label="X"
                className="flex items-center rounded px-3 py-2 gap-2.5 no-underline duration-200 hover:bg-zinc-800">
                <TwitterIcon />
                @Asa
              </a>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
