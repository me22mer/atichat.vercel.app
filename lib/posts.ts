import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const projectsDir = path.join(process.cwd(), "projects/");

export async function getSortedPosts() {
  try {
    const fileNames = await fs.readdir(projectsDir);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(projectsDir, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        const matterResult = matter(fileContents);

        const projectPost: ProjectPost = {
          id,
          title: matterResult.data.title,
          subtitle: matterResult.data.subtitle,
          date: matterResult.data.date,
          repository: matterResult.data.repository,
          url: matterResult.data.url,
          category: matterResult.data.category,
        };

        return projectPost;
      })
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading or processing posts:", error);
    throw error;
  }
}

export async function getPost(id: string) {
  const fullPath = path.join(projectsDir, `${id}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    if (!contentHtml) {
      notFound();
    }

    const PostWithHTML: ProjectPost & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      repository: matterResult.data.repository,
      url: matterResult.data.url,
      category: matterResult.data.category,
      contentHtml,
    };
    return PostWithHTML;
  } catch (error) {
    // console.error("Error reading or processing post:", error);
    notFound();
  }
}
