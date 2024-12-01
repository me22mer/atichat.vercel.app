export function isPublished(publishedAt: string | number): boolean {
  return new Date(publishedAt) <= new Date();
}

export function getFormatDate(dateString: string | number): string {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function sortPosts<T extends { frontmatter: { publishedAt: string } }>(posts: T[]): T[] {
  return posts.sort((b, a) => 
    new Date(a.frontmatter.publishedAt).getTime() - new Date(b.frontmatter.publishedAt).getTime()
  );
}
