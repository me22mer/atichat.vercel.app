import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const projectsDir = path.join(process.cwd(), "/content/projects/");
const blogsDir = path.join(process.cwd(), "/content/blogs/");

export async function getSortedPosts() {
  try {
    const projectFileNames = await fs.readdir(projectsDir);
    const blogFileNames = await fs.readdir(blogsDir);

    const projectPosts = await Promise.all(
      projectFileNames.map(async (fileName) => {
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
          tags: matterResult.data.tags,
        };

        return projectPost;
      })
    );

    const blogPosts = await Promise.all(
      blogFileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(blogsDir, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
          id,
          title: matterResult.data.title,
          subtitle: matterResult.data.subtitle,
          date: matterResult.data.date,
          tags: matterResult.data.tags,
        };

        return blogPost;
      })
    );

    return {
      projectPosts: projectPosts.sort((a, b) => (a.date < b.date ? 1 : -1)),
      blogPosts: blogPosts.sort((a, b) => (a.date < b.date ? 1 : -1)),
    };
  } catch (error) {
    console.error("Error reading or processing posts:", error);
    throw error;
  }
}

export async function getProjectPost(id: string) {
  const baseDir = projectsDir;
  const fileExtension = ".md"; // Adjust the extension if needed

  const fullPath = path.join(baseDir, `${id}${fileExtension}`);

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

    const PostWithHTML: (ProjectPost) & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      repository: matterResult.data.repository,
      url: matterResult.data.url,
      tags: matterResult.data.tags,
      contentHtml,
    };
    return PostWithHTML;
  } catch (error) {
    console.error("Error reading or processing post:", error);
    notFound();
  }
}

export async function getBlogPost(id: string) {
  const baseDir = blogsDir;
  const fileExtension = ".md"; // Adjust the extension if needed

  const fullPath = path.join(baseDir, `${id}${fileExtension}`);

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

    const PostWithHTML: (ProjectPost) & { contentHtml: string } = {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      repository: matterResult.data.repository,
      url: matterResult.data.url,
      tags: matterResult.data.tags,
      contentHtml,
    };
    return PostWithHTML;
  } catch (error) {
    console.error("Error reading or processing post:", error);
    notFound();
  }
}


