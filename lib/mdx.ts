import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/components/common/customImage";

const mdxFilesRootDirectory = path.join(process.cwd(), "app", "content");

export async function getPostBySlug<T>(slug: string) {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(mdxFilesRootDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
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
}

export async function getPosts<T>(directoryPath: string) {
  const folderPath = path.join(mdxFilesRootDirectory, directoryPath);
  const files = fs.readdirSync(folderPath);
  const posts = await Promise.all(
    files.map(async (file) => {
      const fileName = path.parse(file).name;
      return await getPostBySlug<T>(path.join(directoryPath, fileName));
    })
  );
  return posts;
}
