import AnimatedName from "@/ui/animated-name";
import { Metadata } from "next";
import { Badge } from "@/ui/badge";
import AnimatedSection from "@/ui/animated-section";
import {
  GithubIcon,
  TwitterIcon,
  HeadphonesIcon,
  CodeIcon,
  GamepadIcon,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

export const metadata: Metadata = {
  title: "About | Atichat Thongnak",
  description:
    "Learn more about Atichat Thongnak, a frontend developer and student.",
};

export default function AboutPage() {
  const musicList = ["Lo-fi", "Jazz", "R&B", "Original Soundtrack"];
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn/ui",
  ];

  return (
    <div className="min-h-screen  text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <main className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <header className="text-center mb-12">
            <Avatar className="mx-auto mb-10 w-32 h-32">
              <AvatarImage src="https://github.com/me22mer.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-2">
              about{" "}
              <span className="inline-flex font-bold">
                <AnimatedName words={["atichat", "art"]} delayMultiplier={25} />
              </span>
            </h1>
            <p className="text-zinc-400">Student • Developer • Gamer</p>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="mb-12  p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                I'm a 21-year-old student at Sripatum University in Thailand,
                where I'm studying Information and Communication Technology.
                Despite my preference for front-end web development, I'm always
                keen on tackling new challenges.
              </p>
              <p>
                I like the pixel art aesthetic and would like to make video
                games. In addition, I like to watch anime, play video games, and
                am a{" "}
                <a
                  href="https://www.rockstargames.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline">
                  RockstarGames
                </a>{" "}
                fan.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.4}>
            <section className=" px-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <HeadphonesIcon className="mr-2" /> Music I Like
              </h2>
              <div className="flex flex-wrap gap-2">
                {musicList.map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="bg-zinc-700">
                    {genre}
                  </Badge>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <section className=" px-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CodeIcon className="mr-2" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.8}>
          <section className="mt-12  px-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <GamepadIcon className="mr-2" /> Hobbies
            </h2>
            <p className="text-zinc-300 mb-4">
              When I'm not coding, you can find me immersed in the world of
              video games, watching anime, or exploring new pixel art creations.
              I'm particularly passionate about game development and hope to
              create my own games in the future.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <section className="mt-12 px-6">
            <h2 className="text-2xl font-semibold mb-4">Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/me22mer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  rounded-lg px-4 py-2 hover:bg-zinc-700 transition-colors duration-200">
                <GithubIcon className="mr-2" />
                <span>@me22mer</span>
              </a>
              <a
                href="https://x.com/lm_A2a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex items-center  rounded-lg px-4 py-2 hover:bg-zinc-700 transition-colors duration-200">
                <TwitterIcon className="mr-2" />
                <span>@Im_A2a</span>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
