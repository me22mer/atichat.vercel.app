import { Link } from "next-view-transitions";
import { getFormatDate } from "@/lib/useformatdate";
import { ProjectMeta } from "type";
import { getPosts } from "@/lib/mdx";

type Props = {
  post: ProjectMeta;
  slug: string;
};

export default async function ProjectCard() {
  const posts = await getPosts<ProjectMeta>("projects");

  // Sort posts by publishedAt date
  const sortedPosts = posts.sort(
    (b, a) =>
      new Date(getFormatDate(a.frontmatter.publishedAt)).getTime() -
      new Date(getFormatDate(b.frontmatter.publishedAt)).getTime()
  );

  return (
    <div className=" py-16">
      <ul className="flex flex-col gap-5">
        {sortedPosts.map((post) => (
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

  if (!published) {
    return null; // or return a message indicating that the post is not published
  }

  return (
    <Link
      href={`/${slug}`}
      className="block bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-800 border border-zinc-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <time className="text-sm text-zinc-200">{formattedDate}</time>
        </div>
        <p className="text-sm text-zinc-400 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
