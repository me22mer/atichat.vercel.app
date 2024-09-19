import Footer from "@/common/footer";

import { FlipWords } from "@/ui/flip-words";

export default async function Home() {
  const words = ["amazing", "beautiful", "fantastic"];

  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="mx-4 w-[672px] h-[75dvh] pt-20 md:mx-6 grid place-items-center">
          <div className="text-2xl font-extrabold leading-10 text-white md:text-[1.9rem] md:leading-[3rem] text-center">
            <h1 className="bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text tracking-tight text-transparent">
              hi I&apos;m Atichat, a front-end developer dedicated to crafting{" "}
              <FlipWords words={words} /> websites using React.{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
