import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import CustomImage from "@/components/mdx/customImage";

const RootDir = path.join(process.cwd(), "app", "content");

export async function getPostBySlug<T>(slug: string) {
  try {
    const filePost = `${slug}/page.mdx`;
    const filePath = path.join(RootDir, filePost);
    const fileContent = await fs.readFile(filePath, "utf8");
    const { frontmatter, content } = await compileMDX<T>({
      source: fileContent,
      components: { CustomImage },
      options: { parseFrontmatter: true },
    });
    return {
      frontmatter,
      content,
      slug,
    };
  } catch {
    return notFound();
  }
}

export async function getPosts<T>(directoryPath: string) {
  const folderPath = path.join(RootDir, directoryPath);
  const files = await fs.readdir(folderPath);
  const posts = await Promise.all(
    files.map(async (file) => {
      const fileName = path.parse(file).name;
      return await getPostBySlug<T>(path.join(directoryPath, fileName));
    })
  );

  return posts;
}
