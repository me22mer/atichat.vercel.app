import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/components/common/customImage";

const blogDir = path.join(process.cwd(), "app/content/(blog)");
const projectDir = path.join(process.cwd(), "app/content/(projects)");

// Blog

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(blogDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<BlogMeta>({
    source: fileContent,
    components: { CustomImage },
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(blogDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name))
  );
  return blogs;
}

// Project

export async function getProjectBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(projectDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<ProjectMeta>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getProjects() {
  const files = fs.readdirSync(projectDir);
  const projects = await Promise.all(
    files.map(async (file) => await getProjectBySlug(path.parse(file).name))
  );
  return projects;
}
