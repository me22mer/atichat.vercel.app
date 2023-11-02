import fs from "fs";
import path from 'path'
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html'

const projectsDir = path.join(process.cwd(), 'projects/')

export function getSortedPosts() {
    const fileNames = fs.readdirSync(projectsDir);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(projectsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        const projectPost: ProjectPost = {
            id,
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date,
        }


        return projectPost
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPost(id: string) {
    const fullPath = path.join(projectsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const PostWithHTML : ProjectPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        contentHtml,
    }

    return PostWithHTML
}