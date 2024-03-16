"use client"

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getFormatDate } from "@/lib/utils";

type Props = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

export function ListBlog({ slug, title, description, date }: Props) {
  const formattedDate = getFormatDate(date);

  const [animatedContent, setAnimatedContent] = useState(title);

  const generateRandomContent = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let randomContent = '';
    for (let i = 0; i < 21; i++) { 
      randomContent += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomContent;
  }, []);

  const memoizedRandomContent = useMemo(() => {
    if (!title || title.trim().length === 0) {
      return generateRandomContent();
    }
    return title;
  }, [title, generateRandomContent]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedContent(memoizedRandomContent);
    }, 1000);

    return() => clearInterval(interval);
  }, [memoizedRandomContent]);

  return (
    <Link
      href={slug}
      className="w-full hover:bg-zinc-900 rounded-lg duration-500 border border-zinc-800"
    >
      <li className="w-full p-6">
        <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
          <time className="text-xs text-zinc-50">{formattedDate ? formattedDate : "notFound"}</time>
          <h1 className="text-3xl font-bold mb-6">{animatedContent}</h1>
          <p className="text-sm md:truncate">{description}</p>
        </div>
      </li>
    </Link>
  );
}
