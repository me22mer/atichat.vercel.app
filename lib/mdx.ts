import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import CustomImage from "app/components/mdx/customImage";


const RootDir = path.join(process.cwd(), "app", "content");

interface Post<T> {
  frontmatter: T;
  content: ReactElement;
  slug: string;
}

async function getFilePath(slug: string): Promise<string> {
  return path.join(RootDir, slug, "page.mdx");
}

async function readFileContent(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw new Error("File reading error");
  }
}

async function parseMDX<T>(
  fileContent: string
): Promise<{ frontmatter: T; content: ReactElement }> {
  try {
    const { frontmatter, content } = await compileMDX<T>({
      source: fileContent,
      components: { CustomImage },
      options: { parseFrontmatter: true },
    });
    return { frontmatter, content };
  } catch (error) {
    console.error("Error parsing MDX content:", error);
    throw new Error("MDX parsing error");
  }
}

export async function getPostBySlug<T>(slug: string): Promise<Post<T>> {
  try {
    const filePath = await getFilePath(slug);
    const fileContent = await readFileContent(filePath);
    const { frontmatter, content } = await parseMDX<T>(fileContent);
    return { frontmatter, content, slug };
  } catch (error) {
    notFound();
  }
}

export async function getPosts<T>(directoryPath: string): Promise<Post<T>[]> {
  try {
    const folderPath = path.join(RootDir, directoryPath);
    const files = await fs.readdir(folderPath);
    const posts = await Promise.all(
      files.map(async (file) => {
        const fileName = path.parse(file).name;
        return await getPostBySlug<T>(path.join(directoryPath, fileName));
      })
    );
    return posts.filter(Boolean) as Post<T>[];
  } catch (error) {
    console.error("Error getting posts:", error);
    throw new Error("Error retrieving posts");
  }
}
