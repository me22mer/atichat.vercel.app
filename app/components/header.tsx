"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-lg bg-black/20 flex justify-center scroll">
      <div className="w-[710px] mx-12 gap-2">
        <div className="space-x-6 flex justify-start">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-500 hover:text-white"
            }`} 
          >
            home
          </Link>
          <Link
            href="/projects"
            className={`link ${
              pathname === "/projects/"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-500 hover:text-white"
            }`}
          >
            projects
          </Link>
          <Link
            href="#"
            className={`link ${
              pathname === "/blog"
                ? "active transition-colors duration-500 hover:text-zinc-300"
                : "transition-colors duration-500 text-zinc-500 hover:text-white"
            }`}
          >
            blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
