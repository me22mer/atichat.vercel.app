import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import CustomImage from "app/components/mdx/customImage";

// Memoize the root directory to avoid multiple path joins
const RootDir = path.join(process.cwd(), "app", "content");

interface Post<T> {
  frontmatter: T;
  content: ReactElement;
  slug: string;
}

// Get the path of the MDX file by slug
async function getFilePath(slug: string): Promise<string> {
  return path.join(RootDir, slug, "page.mdx");
}

// Read file content
async function readFileContent(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file at ${filePath}`);
    throw new Error("Error reading the file");
  }
}

// Parse MDX file content
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

// Get a single post by slug
export async function getPostBySlug<T>(slug: string): Promise<Post<T>> {
  try {
    const filePath = await getFilePath(slug);
    const fileContent = await readFileContent(filePath);
    const { frontmatter, content } = await parseMDX<T>(fileContent);
    return { frontmatter, content, slug };
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error);
    notFound();
    throw new Error("Post not found");
  }
}

// Get all posts in a directory
export async function getPosts<T>(directoryPath: string): Promise<Post<T>[]> {
  const folderPath = path.join(RootDir, directoryPath);

  try {
    const files = await fs.readdir(folderPath);

    // Using Promise.allSettled to ensure partial success in case of errors
    const posts = await Promise.allSettled(
      files.map(async (file) => {
        const fileName = path.parse(file).name;
        return await getPostBySlug<T>(path.join(directoryPath, fileName));
      })
    );

    // Filter out failed results and only return successful ones
    return posts
      .filter(
        (result): result is PromiseFulfilledResult<Post<T>> =>
          result.status === "fulfilled"
      )
      .map((result) => result.value);
  } catch (error) {
    console.error(
      `Error retrieving posts from directory: ${directoryPath}`,
      error
    );
    throw new Error("Error retrieving posts");
  }
}
