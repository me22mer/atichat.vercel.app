import GitHubIcon from "@/icons/Github-Icon";
import TwitterIcon from "@/icons/Twitter-Icon";
import AnimatedName from "@/ui/animated-name";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Badge } from "@/ui/badge";
import AnimatedSection from "@/ui/animated-section";

export const metadata: Metadata = {
  title: "About",
  description: "Who am I",
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
    <div className="min-h-screen text-white">
      <main className="container mx-auto my-16 max-w-4xl ">
        <AnimatedSection>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              about{" "}
              <span className="inline-flex font-bold">
                <AnimatedName words={["atichat", "art"]} delayMultiplier={25} />
              </span>
            </h1>
            <p className="text-zinc-400">Student • Developer • Gamer</p>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="border-none">
            <CardContent className="prose prose-invert max-w-none">
              <p className="leading-relaxed">
                I&apos;m a 21-year-old student at Sripatum University in
                Thailand, where I&apos;m studying Information and Communication
                Technology. Despite my preference for front-end web development,
                I&apos;m always keen on tackling new challenges.
              </p>
              <p className="leading-relaxed">
                I like the pixel art aesthetic and would like to make video
                games. In addition, I like to watch anime, play video games, and
                am a{" "}
                <a
                  href="https://www.rockstargames.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 no-underline">
                  RockstarGames
                </a>{" "}
                fan.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <div className="grid mb-6">
          <AnimatedSection delay={0.4}>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Music I Like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {musicList.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.8}>
          <section className="px-6">
            <h2 className="text-2xl font-bold mb-4 items-center gap-2">
              Connect
            </h2>
            <div className="grid gap-1 grid-row-2">
              <a
                href="https://github.com/me22mer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded w-fit px-4 py-3 gap-3 no-underline duration-200 hover:bg-zinc-800">
                <GitHubIcon />
                <span className="text-sm">@me22mer</span>
              </a>
              <a
                href="https://x.com/0o_asa_o0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex items-center rounded w-fit px-4 py-3 gap-3 no-underline duration-200 hover:bg-zinc-800">
                <TwitterIcon />
                <span className="text-sm">@Asa</span>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
