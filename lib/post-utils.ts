export function isPublished(publishedAt: string | number): boolean {
  const publishDate = new Date(publishedAt);
  const currentDate = new Date();
  return publishDate.getTime() <= currentDate.getTime();
}

export function getFormatDate(dateString: string | number): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function sortPosts<T extends { frontmatter: { publishedAt: string } }>(
  posts: T[]
): T[] {
  return posts.sort(
    (b, a) =>
      new Date(getFormatDate(a.frontmatter.publishedAt)).getTime() -
      new Date(getFormatDate(b.frontmatter.publishedAt)).getTime()
  );
}

