import { Link } from "next-view-transitions";

import { getPosts } from "@/lib/mdx";
import { getFormatDate } from "@/lib/useformatdate";
import { BlogMeta } from "type";

type Props = {
  post: BlogMeta;
  slug: string;
};

const BlogCard = async () => {
  const posts = await getPosts<BlogMeta>("blog");

  return (
    <div className="">
      <div className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {posts.map((post) => (
          <ListBlog key={post.slug} post={post.frontmatter} slug={post.slug} />
        ))}
      </div>
    </div>
  );
};

const ListBlog = ({ post, slug }: Props) => {
  const { title, description, publishedAt, coverImage, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  if (!published || !formattedDate) {
    return null;
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
};

export default BlogCard;
