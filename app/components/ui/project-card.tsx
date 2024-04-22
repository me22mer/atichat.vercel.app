import { Link } from "next-view-transitions";

import { getFormatDate } from "@/lib/utils";
import { ProjectMeta } from "type";
import { getPosts } from "@/lib/mdx";

type Props = {
  post: ProjectMeta;
  slug: string;
};


export default async function ProjectCard() {
  const posts = await getPosts<ProjectMeta>("projects");

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.frontmatter.publishedAt) >
              new Date(b.frontmatter.publishedAt)
            ) {
              return 1;
            }
            return -1;
          })
          .map((post) => (
            <Listproject
              key={post.slug}
              post={post.frontmatter}
              slug={post.slug}
            />
          ))}
      </ul>
    </div>
  );
}

export function Listproject({ post, slug }: Props) {
  const { title, description, publishedAt, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  return (
    <>
      {published ? (
        <Link
          href={`/${slug}`}
          className="w-full  p-4 md:p-6 border rounded-xl hover:bg-zinc-900 duration-500  border-zinc-800"
        >
          <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
            <div className="mb-3 flex justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <time className="text-xs text-zinc-50">{formattedDate}</time>
            </div>
            <p className="text-sm md:truncate">{description}</p>
          </div>
        </Link>
      ) : null}
    </>
  );
}
