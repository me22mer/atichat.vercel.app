import Link from "next/link";
import getFormattedDate from "@/lib/getFomattedDate";

type Props = {
  post: BlogPost;
};

export default function Listblog({ post }: Props) {
  const { id, title, subtitle, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="max-md:w-full w-[345px] p-6 border border-zinc-600 rounded-xl">
      <Link href={`/blog/${id}`}>
        <article className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
          {formattedDate ? (
            <time className="text-xs text-zinc-50">{formattedDate}</time>
          ) : (
            <span className="text-xs text-zinc-50 font-semibold">SOON</span>
          )}
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <p className="text-sm truncate">{subtitle}</p>
        </article>
      </Link>
    </li>
  );
}