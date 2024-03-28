import fs from "fs/promises";
import path from "path";

import { remark } from "remark";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";

const projectsDir = path.join(process.cwd(), "/app/content/(projects)/");
const blogsDir = path.join(process.cwd(), "/app/content/(blog)/");

async function processMarkdownContent(content) {
  return await remark()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .process(content);
}

export async function getBlogPost(filename: string) {
  const slug = filename.replace(/\.md$/, "");

  const fullPath = path.join(blogsDir, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  const meta = matter(fileContents);
  const processedContent = await processMarkdownContent(meta.content);

  const contentHtml = processedContent.toString();

  const blogPost: BlogPost = {
    meta: {
      slug,
      title: meta.data.title,
      description: meta.data.description,
      date: meta.data.date,
      published: meta.data.published,
    },
    content: contentHtml,
  };

  return blogPost;
}

export async function getBlogMeta() {
  const filesArray = await fs.readdir(blogsDir);

  const posts: BlogMeta[] = [];

  for (const file of filesArray) {
    if (file.endsWith(".md")) {
      const post = await getBlogPost(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectPost(filename: string) {
  const slug = filename.replace(/\.md$/, "");

  const fullPath = path.join(projectsDir, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  const meta = matter(fileContents);
  const processedContent = await processMarkdownContent(meta.content);

  const contentHtml = processedContent.toString();

  const projectPostObj: ProjectPost = {
    meta: {
      slug,
      title: meta.data.title,
      date: meta.data.date,
      description: meta.data.description,
      repository: meta.data.repository,
      url: meta.data.url,
    },
    content: contentHtml,
  };
  return projectPostObj;
}

export async function getProjectMeta() {
  const filesArray = await fs.readdir(projectsDir);

  const posts: ProjectMeta[] = [];

  for (const file of filesArray) {
    if (file.endsWith(".md")) {
      const post = await getProjectPost(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
