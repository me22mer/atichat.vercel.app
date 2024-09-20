"use client";

import { useTransitionRouter } from "next-view-transitions";
import { cn } from "@/lib/cn";


export default function Navigater() {
  const router = useTransitionRouter();

  return (
    <nav
      className={`z-50 w-full flex fixed backdrop-blur-xl duration-200 `}>
      <div className={cn(`px-4 py-6 w-full flex`)}>
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
      </div>
    </nav>
  );
}
