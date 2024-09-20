import { Link } from "next-view-transitions";
import { getFormatDate } from "@/lib/useformatdate";
import { ProjectMeta, BlogMeta } from "type";

type PostProps = {
  post: ProjectMeta | BlogMeta;
  slug: string;
};

export const PostList = ({ post, slug }: PostProps) => {
  const { title, description, publishedAt, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  if (!published) {
    return null; // Optionally show a message if unpublished
  }

  return (
    <Link
      href={`/${slug}`}
      className="block bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-800 border border-zinc-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <time className="text-sm text-zinc-200">{formattedDate}</time>
        </div>
        <p className="text-sm text-zinc-400 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};
