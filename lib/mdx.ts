import { MDXImage } from 'app/components/mdx/image';
import { MDXCarousel } from 'app/components/mdx/carousel';
import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ReactElement } from "react";

const RootDir = path.join(process.cwd(), "app", "content");

interface Post<T> {
  frontmatter: T;
  content: ReactElement;
  slug: string;
}

async function getFilePath(contentType: string, slug: string): Promise<string> {
  return path.join(RootDir, contentType, slug, "page.mdx");
}

async function readFileContent(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw error;
  }
}

async function parseMDX<T>(
  fileContent: string
): Promise<{ frontmatter: T; content: ReactElement }> {
  try {
    const { frontmatter, content } = await compileMDX<T>({
      source: fileContent,
      components: { MDXCarousel, MDXImage },
      options: { parseFrontmatter: true },
    });
    return { frontmatter, content };
  } catch (error) {
    console.error("Error parsing MDX content:", error);
    throw error;
  }
}

export async function getPostBySlug<T>(contentType: string, slug: string): Promise<Post<T> | null> {
  try {
    const filePath = await getFilePath(contentType, slug);
    const fileContent = await readFileContent(filePath);
    const { frontmatter, content } = await parseMDX<T>(fileContent);
    return { frontmatter, content, slug };
  } catch (error) {
    console.error(`Error getting post for slug ${slug}:`, error);
    return null;
  }
}

export async function getPosts<T>(contentType: string): Promise<Post<T>[]> {
  try {
    const folderPath = path.join(RootDir, contentType);
    const entries = await fs.readdir(folderPath, { withFileTypes: true });
    
    const posts = await Promise.all(
      entries
        .filter(entry => entry.isDirectory())
        .map(async (dir) => {
          const slug = dir.name;
          return await getPostBySlug<T>(contentType, slug);
        })
    );

    return posts.filter((post): post is Post<T> => post !== null);
  } catch (error) {
    console.error(`Error getting posts for ${contentType}:`, error);
    return [];
  }
}

