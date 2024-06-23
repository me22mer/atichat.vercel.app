import { Link } from "next-view-transitions";
import { getFormatDate } from "utils/useformatdate";
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
      className="block bg-zinc-300 border border-zinc-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <time className="text-sm text-zinc-500">{formattedDate}</time>
        </div>
        <p className="text-sm text-zinc-700 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
