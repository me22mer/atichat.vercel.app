import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import { MDXImage } from "app/components/mdx/image";
import { MDXCarousel } from "app/components/mdx/carousel";
import { Octokit } from '@octokit/rest';

if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN is not set in the environment variables');
  process.exit(1);
}

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

const OWNER = 'me22mer';
const REPO = 'atichat.vercel.app';
const BASE_PATH = 'app/content';

interface Post<T> {
  frontmatter: T;
  content: ReactElement;
  slug: string;
}

async function getFileContent(path: string): Promise<string> {
  try {
    const response = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: `${BASE_PATH}/${path}`,
    });

    if (Array.isArray(response.data) || !('content' in response.data)) {
      throw new Error('Unexpected response format');
    }
    
    return Buffer.from(response.data.content, 'base64').toString('utf-8');
  } catch (error) {
    console.error(`Error fetching file content from GitHub: ${path}`, error);
    throw new Error('Error fetching file content');
  }
}

async function parseMDX<T>(
  fileContent: string
): Promise<{ frontmatter: T; content: ReactElement }> {
  try {
    const { frontmatter, content } = await compileMDX<T>({
      source: fileContent,
      components: { MDXImage, MDXCarousel },
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
    const fileContent = await getFileContent(`${slug}/page.mdx`);
    const { frontmatter, content } = await parseMDX<T>(fileContent);
    return { frontmatter, content, slug };
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error);
    notFound();
  }
}

export async function getPosts<T>(directoryPath: string): Promise<Post<T>[]> {
  try {
    const response = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: `${BASE_PATH}/${directoryPath}`,
    });

    if (!Array.isArray(response.data)) {
      throw new Error('Unexpected response format');
    }

    const posts = await Promise.all(
      response.data
        .filter(item => item.type === 'dir')
        .map(async (item) => {
          try {
            return await getPostBySlug<T>(`${directoryPath}/${item.name}`);
          } catch (error) {
            console.error(`Error getting post: ${item.name}`, error);
            return null;
          }
        })
    );

    return posts.filter((post): post is Post<T> => post !== null);
  } catch (error) {
    console.error(`Error retrieving posts from directory: ${directoryPath}`, error);
    throw new Error("Error retrieving posts");
  }
}