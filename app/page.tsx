import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/ui/animated-section";
import { FlipWords } from "@/ui/flip-words";

const words = ["fantastic", "amazing", "innovative"];
const gradients = [
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500",
  "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500",
];

export default function HomePage() {
  return (
    <div className="relative h-[75dvh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {" "}
        <AnimatedSection>
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            I&apos;m{" "}
            <Link href="/about">
              <span className="hover:underline decoration-white">atichat</span>
            </Link>
            , a frontend developer
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <article className="text-2xl md:text-3xl font-bold mb-8">
            {" "}
            dedicated to crafting{" "}
            <span>
              <FlipWords words={words} gradients={gradients} />
            </span>{" "}
            websites using React.
          </article>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 text-lg font-semibold text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors duration-300">
            View My Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
