"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Contact from "./contact";
import Section from "./section";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-lg bg-black/20 flex justify-center">
      <div className="w-[710px] mx-6 gap-2 flex justify-between items-center">
        <Section
          delay={0.5}
          className="space-x-4 md:space-x-6 flex justify-start"
        >
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
              pathname === "/projects"
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
        </Section>
        <Section className="" delay={0.7}>
          <Contact />
        </Section>
      </div>
    </nav>
  );
}
