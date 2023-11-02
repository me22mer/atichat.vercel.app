import Link from "next/link";
import getFormattedDate from "@/lib/getFomattedDate";

type Props = {
  post: ProjectPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, subtitle, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="max-md:w-full w-[345px] p-6 border border-zinc-600 rounded-xl">
      <Link href={`/projects/${id}`}>
        <article className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
          <p className="text-xs ">{formattedDate}</p>
          <h1 className="text-2xl text-zinc-50 font-bold mt-2">{title}</h1>
          <p className="text-sm  mt-3">{subtitle}</p>
        </article>
      </Link>
    </li>
  );
}
