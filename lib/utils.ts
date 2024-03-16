import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Blog, Project } from "#site/content";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function getFormatDate(input: string | number): string {
  const date = new Date(input);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function sortPosts(posts: Array<Blog | Project>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
