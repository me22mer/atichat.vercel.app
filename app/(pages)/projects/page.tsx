import type { Metadata } from "next";

import ProjectPosts from "@/ui/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "This is a project of my own initiative and practice.",
};

export default async function ProjectsPage() {
  return (
    <div className="bg-zinc-950 h-[75dvh]">
      <div className="w-full flex justify-center ">
        <div className="m-4 md:m-7 w-[672px]">
          <div className="mb-16 text-white">
            <h2 className="mb-2.5 text-xl md:text-2xl font-bold">projects</h2>
            <p>I&apos;ve done some projects on my own time.</p>
          </div>
          <hr className=" border-zinc-800" />
          <ProjectPosts />
        </div>
      </div>
    </div>
  );
}
