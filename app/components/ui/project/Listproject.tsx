import Link from "next/link";

import { getFormatDate } from "@/lib/utils";

type Props = {
  post: ProjectMeta;
};

export default function Listproject({ post }: Props) {
  const { slug, title, description, date } = post;
  const formattedDate = getFormatDate(date);

  return (
    <>
      {date ? (
        <li className="w-full  p-4 md:p-6 border rounded-xl hover:bg-zinc-900 duration-500  border-zinc-800">
          <Link href={`projects/${slug}`}>
            <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
              <time className="text-xs text-zinc-50">{formattedDate}</time>
              <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
              <p className="text-sm md:truncate">{description}</p>
            </div>
          </Link>
        </li>
      ) : (
        <div className="w-full  p-4 md:p-6 border rounded-xl flex items-center border-zinc-800">
          <p className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000 select-none hover:cursor-default">
            more project is coming soon, please stay tuned
          </p>
        </div>
      )}
    </>
  );
}
