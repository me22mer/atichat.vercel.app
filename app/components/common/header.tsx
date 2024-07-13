"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Briefcase, EqualIcon, FileText, HouseIcon, Mail, TextIcon, User } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-8 backdrop-blur-xl flex justify-center border-b-[1px] border-b-zinc-900">
      <div className="w-[672px] h-10 mx-4 md:mx-6 flex justify-between items-center">
        <div className="gap-2 flex justify-between items-center text-base">
          <div className="max-sm:hidden flex space-x-4 md:space-x-6 ">
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
          <Drawer>
            <DrawerTrigger asChild className="sm:hidden">
              {/* <Button variant="default" className="px-3 py-0"><EqualIcon className=""/></Button> */}
              <TextIcon className="h-8 w-8" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="my-3.5">Pages</DrawerTitle>
              </DrawerHeader>
              <div className="mx-2 sm:mx-4 mb-4 w-[95dvw] flex flex-col">
                <Link
                  scroll={false}
                  href="/"
                  className="py-3.5 px-2 flex items-center hover:bg-zinc-800 rounded-lg">
                  <HouseIcon className="mr-2" />
                  home
                </Link>
                <Link
                  scroll={false}
                  href="/projects"
                  className="py-3.5 px-2 flex items-center hover:bg-zinc-800 rounded-lg">
                  <Briefcase className="mr-2" />
                  projects
                </Link>
                <Link
                  scroll={false}
                  href="/resume"
                  className="py-3.5 px-2 flex items-center hover:bg-zinc-800 rounded-lg">
                  <User className="mr-2" />
                  resume
                </Link>
                <Link
                  scroll={false}
                  href="/blog"
                  className="py-3.5 px-2 flex items-center hover:bg-zinc-800 rounded-lg">
                  <FileText className="mr-2" />
                  blog
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
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
