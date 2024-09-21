"use client";

import { cn } from "@/lib/cn";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const generateLinkClass = (path) =>
    cn(
      "transition-colors duration-500 hover:text-white",
      pathname === path ? "text-white" : "text-zinc-300"
    );

  return (
    <nav className={cn("sticky top-0 z-50 py-8 flex justify-center")}>
      <div className="w-full md:w-fit px-4 backdrop-blur-lg border rounded-lg bg-zinc-900/30 h-14 mx-4 md:mx-6 flex justify-center items-center">
        <div className="flex gap-4 sm:gap-8 justify-between items-center text-base">
          <Link scroll={false} href="/" className={generateLinkClass("/")}>
            home
          </Link>
          <Link
            scroll={false}
            href="/about"
            className={generateLinkClass("/about")}>
            about
          </Link>
          <Link
            scroll={false}
            href="/projects"
            className={generateLinkClass("/projects")}>
            projects
          </Link>
          <Link
            scroll={false}
            href="/resume"
            className={generateLinkClass("/resume")}>
            resume
          </Link>
          <Link
            scroll={false}
            href="/blog"
            className={generateLinkClass("/blog")}>
            blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
