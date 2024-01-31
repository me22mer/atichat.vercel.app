import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const projectsDir = path.join(process.cwd(), "content/projects/");
// const blogsDir = path.join(process.cwd(), "content/blogs/");
const FILE_EXTENSION = ".md";

async function readPostsFromDirectory(baseDir: string): Promise<(ProjectPost | BlogPost)[]> {
  try {
    const fileNames = await fs.readdir(baseDir);
    
    const posts = await Promise.all(
      fileNames.map(async (fileName) => {
        const id = fileName.replace(new RegExp(`${FILE_EXTENSION}$`), "");
        
        const fullPath = path.join(baseDir, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const matterResult = matter(fileContents);

        const post: ProjectPost | BlogPost = {
          id,
          title: matterResult.data.title,
          subtitle: matterResult.data.subtitle,
          date: matterResult.data.date,
          repository: matterResult.data.repository,
          url: matterResult.data.url,
          tags: matterResult.data.tags,
        };

        return post;
      })
    );

    return posts;
  } catch (error) {
    console.error(`Error reading or processing posts from ${baseDir}:`, error);
    throw error;
  }
}

export async function getSortedPosts() {
  try {
    const [projectPosts] = await Promise.all([
      readPostsFromDirectory(projectsDir),
      // readPostsFromDirectory(blogsDir),
    ]);

    const allPostsData = [...projectPosts];
    
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading or processing posts:", error);
    throw error;
  }
}

export async function getPost(id: string, isProject: boolean = true) {
  const baseDir = projectsDir;
  const fullPath = path.join(baseDir, `${id}${FILE_EXTENSION}`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    if (!contentHtml) {
      notFound();
    }

    const PostWithHTML: (ProjectPost | BlogPost) & { contentHtml: string } = {
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
    notFound();
  }
}
