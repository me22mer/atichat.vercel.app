import AnimatedName from "@/ui/animated-name";
import { FlipWords } from "@/ui/flip-words";
import Particle from "@/ui/particle";

export default async function Home() {
  const words = ["amazing", "beautiful", "fantastic"];
  const gradients = [
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
    "bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500",
    "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500",
  ];


  return (
    <div className="relative">
      <Particle />
      <div className="flex justify-center">
        <div className="mx-4 w-[672px] h-[75dvh] md:mx-6 grid place-items-center">
          <div className="text-2xl font-extrabold leading-10 text-white md:text-[1.9rem] md:leading-[3rem] text-center">
            <h1 className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-tight text-transparent">
              I&apos;m{" "}
              <span className="inline-flex">
                <AnimatedName
                  words={["aitchat", "art"]}
                  delayMultiplier={25}
                  className="inline-block text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text"
                />
              </span>
              , a frontend developer dedicated to crafting{" "}
              <FlipWords words={words} gradients={gradients} /> websites using
              React.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
