"use client"; // Error components must be Client Components

import Section from "@/components/ui/section";
import { useRouter, usePathname } from "next/navigation";


export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <main>
      <div className="w-full">
        <div className="h-[100vh] py-24 sm:py-32 flex items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-700/10 to-zinc-900">
          <Section delay={0.5} className="">
            <div className=" px-6 flex flex-col text-center items-center">
              <h1 className="mb-16 text-2xl mb:text-4xl font-bold tracking-tight text-white sm:text-6xl ">
              Not found : &quot;{pathName}&quot;
              </h1>
              <button
                onClick={() => router.push("/", { scroll: false })}
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