import Link from "next/link";
import Image from "next/image";
import { getFormatDate } from "@/lib/utils";
import { useState } from "react";
import { flushSync } from "react-dom";

type Props = {
  post: BlogMeta;
  slug: string;
};

export function ListBlog({ post, slug }: Props) {
  const { title, description, publishedAt, coverImage, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  return (
    <>
      {published ? (
        <Link
          href={`blog/${slug}`}
          className="w-full h-full p-4 md:p-6 overflow-hidden hover:bg-zinc-900 rounded-lg duration-500 border border-zinc-800/70"
        >
          <div className="text-zinc-400 flex flex-col md:flex-row gap-5 hover:text-zinc-100 transition-colors duration-1000">
            <Image
              className="w-full md:w-[252px] h-full rounded-lg duration-1000 "
              src={coverImage}
              alt=""
              style={{ objectFit: "cover" }}
              width={372}
              height={400}
              quality={100}
              sizes="(max-width: 1024px) 100vw"
              priority
            />
            <div className="flex flex-col">
              <time className="text-xs text-zinc-50">{formattedDate}</time>
              <h1 className="mb-6 text-2xl  md:text-3xl font-bold">{title}</h1>
              <p className="">{description}</p>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}
