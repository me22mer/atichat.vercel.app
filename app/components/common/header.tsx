"use client";

import { cn } from "@/lib/cn";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function Header() {
  const [showBorder, setShowBorder] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setShowBorder(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const generateLinkClass = (path) =>
    cn(
      "transition-colors duration-500 hover:text-white",
      pathname === path ? "text-white" : "text-zinc-300"
    );

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 py-8 backdrop-blur flex justify-center",
        showBorder ? "border-b-[1px] border-b-zinc-900/80" : "border-b-0"
      )}>
      <div className="w-[672px] h-10 mx-4 md:mx-6 flex justify-center items-center">
        <div className="gap-2 flex justify-between items-center text-base">
          <div className="flex space-x-4 md:space-x-10">
            <Link
              scroll={false}
              href="/"
              className={generateLinkClass("/")}>
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
      </div>
    </nav>
  );
}
