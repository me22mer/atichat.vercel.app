import fs from "fs";
import matter from "gray-matter";

export default function getPostBySlug() {
  const folder = "projects/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`projects/${fileName}`, `utf-8`);
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      coverimage: matterResult.data.coverimage,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}
