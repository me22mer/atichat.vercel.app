"use client";

import Link from "next/link";
import { getFormatDate } from "@/lib/utils";

type Props = {
  post: BlogMeta;
};

export function ListBlog({ post }: Props) {
  const { slug, title, description, date } = post;
  const formattedDate = getFormatDate(date);

  return (
    <>
      {date ? (
        <Link
          href={`blog/${slug}`}
          className="w-full hover:bg-zinc-900 rounded-xl duration-500 border border-zinc-800"
        >
          <li className="w-full p-4 md:p-6">
            <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
              <time className="text-xs text-zinc-50">{formattedDate}</time>
              <h1 className="text-2xl  md:text-3xl font-bold mb-6">{title}</h1>
              <p className="text-sm md:truncate">{description}</p>
            </div>
          </li>
        </Link>
      ) : (
        <div className="w-full  p-4 md:p-6 border rounded-xl flex items-center border-zinc-800">
          <p className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000 select-none hover:cursor-default">
            more blog is coming soon, please stay tuned
          </p>
        </div>
      )}
    </>
  );
}
