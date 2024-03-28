"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import GithubIcon from "../icons/Github-Icon";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-lg flex justify-center">
      <div className="w-[720px] mx-4 md:mx-6 gap-2 flex justify-between items-center">
        <div className="space-x-4 md:space-x-6 flex justify-start">
          <Link
            scroll={false}
            href="/"
            className={`link ${
              pathname === "/"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-400 hover:text-white"
            }`}
          >
            home
          </Link>
          <Link
            scroll={false}
            href="/projects"
            className={`link ${
              pathname === "/projects"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-400 hover:text-white"
            }`}
          >
            projects
          </Link>

          <Link
            scroll={false}
            href="/resume"
            className={`link ${
              pathname === "/resume"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-400 hover:text-white flex"
            }`}
          >
            resume
          </Link>
          <Link
            scroll={false}
            href="/blog"
            className={`link ${
              pathname === "/blog"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-400 hover:text-white flex"
            }`}
          >
            blog
          </Link>
        </div>
        <div className="">
          <GithubIcon />
        </div>
      </div>
    </nav>
  );
}
