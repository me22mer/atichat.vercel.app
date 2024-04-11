import Link from "next/link";
import { getFormatDate } from "@/lib/utils";

type Props = {
  post: BlogMeta;
  slug: string;
};

export function ListBlog({ post, slug }: Props) {
  const { title, publishedAt, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  return (
    <>
      {published ? (
        <Link
          href={`blog/${slug}`}
          className="w-full hover:bg-zinc-900 rounded-lg duration-500 border border-zinc-800"
        >
          <li className="w-full p-4 md:p-6">
            <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
              <time className="text-xs text-zinc-50">{formattedDate}</time>
              <h1 className="text-2xl  md:text-3xl font-bold">{title}</h1>
            </div>
          </li>
        </Link>
      ) : null}
    </>
  );
}
