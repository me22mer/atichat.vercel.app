"use client"; // Error components must be Client Components

import Section from "@/components/section";
import { useRouter } from "next/navigation";

const ErrorHead = [
  "Oops, something went wrong",
  "An error occurred",
  "Oh no, not again",
  "Error 404",
  "Oops, something went wrong",
  "An error occurred",
  "Oh no, not again",
  "Error 404",
  "Unexpected error",
  "Page not found",
  "Server hiccup",
  "Something's amiss",
  "Technical difficulties",
  "Uh-oh!",
  "I'm sorry but something went wrong",
];

export default function NotFound() {
  const router = useRouter();

  const errorhead = ErrorHead[Math.floor(Math.random() * ErrorHead.length)];
  return (
    <main>
      <div className="w-full">
        <div className="h-[100vh] py-24 sm:py-32 flex items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-700/10 to-zinc-900">
          <Section delay={0.1} className="">
            <div className=" px-6 flex flex-col text-center items-center">
              <h1 className="mb-16 text-2xl mb:text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                {`" ${errorhead} "`}
              </h1>
              <button
                onClick={() => router.push("/projects", { scroll: false })}
                className="w-max text-xl duration-500 text-zinc-500 hover:text-white"
              >
                Go back
              </button>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
