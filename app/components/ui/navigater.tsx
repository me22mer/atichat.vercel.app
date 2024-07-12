"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

type Prop = {
  pageHeading: string;
};

export default function Navigater({ pageHeading }: Prop) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className={`z-50 w-full flex fixed backdrop-blur-xl duration-200 border-b-[1px] border-b-zinc-800`}>
      <div
        className={cn(
          `px-4 py-6 w-full flex justify-between`,
          // pathname === "/resume" ? "grid-cols-3" : "grid-cols-2 md:grid-cols-3"
        )}>
        {/* <span> */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="navigater-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              className="invert-[.45] hover:invert-0 hover:fill-white duration-500"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </button>
        </div>
        <div
          className={cn(
            `flex justify-end md:justify-center items-center`,
            pathname === "/resume" ? " justify-center" : ""
          )}>
          <h1 className="text-xl md:text-3xl font-extrabold">{pageHeading}</h1>
        </div>
        {pathname === "/resume" && (
          <div className="flex justify-end items-center">
            <a
              className="inline-flex items-center rounded-md bg-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-black shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              href="mailto:atichatbusiness@gmail.com">
              EMAIL ME
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
