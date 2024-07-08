import type { Metadata } from "next";

import Navigation from "@/components/ui/navigater";
import Profile from "@/components/ui/resume/Profile";
import Objective from "@/components/ui/resume/Objective";
import Experience from "@/components/ui/resume/Experience";
import Education from "@/components/ui/resume/Education";

export const metadata: Metadata = {
  title: "Resume",
  description: "Please consider hiring me based on my resume.",
};

export default function ResumePage() {
  return (
    <section className="w-full h-full bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950 flex justify-normal md:justify-center">
      <Navigation />
      <div className="w-full max-w-fit mt-32 mb-40 mx-4 md:mx-10 prose prose-invert flex justify-center gap-20 prose-hr:border-zinc-800 marker:text-zinc-500">
        <div className=" max-w-[672px]">
          <Profile />
          <Objective />
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
}
