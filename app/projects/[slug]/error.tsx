"use client"; // Error components must be Client Components

import Footer from "@/components/footer";
import Section from "@/components/section";
import { useRouter } from "next/navigation";


export default function Error(){
  const router = useRouter()

  return (
    <div>
      <div className="w-full">
        <div className="h-[82vh] py-24 sm:py-32 flex items-center justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <Section delay={0.5} className="">
            <div className=" px-6 flex flex-col text-center items-center">
              <h1 className="mb-6 text-2xl mb:text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                blunderbuss 🔧
              </h1>
              <p className="mb-6 text-sm md:text-lg leading-8 text-zinc-300">
                Something want wrong.
              </p>
              <button
                onClick={() => router.push('/projects', { scroll: false })}
                className="w-max text-lg duration-500 text-zinc-500 hover:text-white"
              >
                Go back
              </button>
            </div>
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
