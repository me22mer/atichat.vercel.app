import { getFormatDate } from "@/lib/useformatdate";

export function sortPosts<T extends { frontmatter: { publishedAt: string } }>(
  posts: T[]
): T[] {
  return posts.sort(
    (b, a) =>
      new Date(getFormatDate(a.frontmatter.publishedAt)).getTime() -
      new Date(getFormatDate(b.frontmatter.publishedAt)).getTime()
  );
}
