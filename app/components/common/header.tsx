"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-xl flex justify-center border-b-[1px] border-b-zinc-900">
      <div className="w-[672px] h-10 mx-4 md:mx-6 flex justify-between">
        <div className="gap-2 flex justify-between items-center text-base">
          <div className="flex space-x-4 md:space-x-6 ">
            <Link
              scroll={false}
              href="/"
              className={`link ${
                pathname === "/"
                  ? "active transition-colors duration-500 text-white hover:text-zinc-100"
                  : "transition-colors duration-500 text-zinc-300 hover:text-white"
              }`}>
              home
            </Link>
            <Link
              scroll={false}
              href="/projects"
              className={`link ${
                pathname === "/projects"
                  ? "active transition-colors duration-500 text-white hover:text-zinc-100"
                  : "transition-colors duration-500 text-zinc-300 hover:text-white"
              }`}>
              projects
            </Link>

            <Link
              scroll={false}
              href="/resume"
              className={`link ${
                pathname === "/resume"
                  ? "active transition-colors duration-500 text-white hover:text-zinc-100"
                  : "transition-colors duration-500 text-zinc-300 hover:text-white"
              }`}>
              resume
            </Link>
            <Link
              scroll={false}
              href="/blog"
              className={`link ${
                pathname === "/blog"
                  ? "active transition-colors duration-500 text-white hover:text-zinc-100"
                  : "transition-colors duration-500 text-zinc-300 hover:text-white"
              }`}>
              blog
            </Link>
          </div>
        </div>
        {pathname === "/resume" && (
          <Button size="sm">
            {" "}
            <Mail className="mr-2 h-4 w-4" />
            <a href="mailto:atichatbusiness@gmail.com">EMAIL ME</a>
          </Button>
        )}
      </div>
    </nav>
  );
}
