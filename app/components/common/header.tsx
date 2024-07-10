"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-xl flex justify-center border-b-[1px] border-b-zinc-900">
      <div className="w-[672px] mx-4 md:mx-6 gap-2 flex justify-between items-center text-base">
        <div className="flex space-x-4 md:space-x-6 ">
          <Link
            scroll={false}
            href="/"
            className={`link ${
              pathname === "/"
                ? "active transition-colors duration-500 hover:text-zinc-100"
                : "transition-colors duration-500 text-zinc-300 hover:text-white"
            }`}
          >
            home
          </Link>
          <Link
            scroll={false}
            href="/projects"
            className={`link ${
              pathname === "/projects"
                ? "active transition-colors duration-500 hover:text-zinc-100"
                : "transition-colors duration-500 text-zinc-300 hover:text-white"
            }`}
          >
            projects
          </Link>

          <Link
            scroll={false}
            href="/resume"
            className={`link ${
              pathname === "/resume"
                ? "active transition-colors duration-500 hover:text-zinc-100"
                : "transition-colors duration-500 text-zinc-300 hover:text-white"
            }`}
          >
            resume
          </Link>
          <Link
            scroll={false}
            href="/blog"
            className={`link ${
              pathname === "/blog"
                ? "active transition-colors duration-500 hover:text-zinc-100"
                : "transition-colors duration-500 text-zinc-300 hover:text-white"
            }`}
          >
            blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
