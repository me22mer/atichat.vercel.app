import Link from "next/link";

import { getFormatDate } from "@/lib/utils";

type Props = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

export default function Listproject({ slug, title, description, date }: Props) {
  const formattedDate = getFormatDate(date);

  return (
    <li className="w-full md:w-[345px] p-4 md:p-6 border rounded-xl hover:bg-zinc-900 duration-500  border-zinc-800">
      <Link href={`projects/${slug}`}>
        <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
          <time className="text-xs text-zinc-50">{formattedDate}</time>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
          <p className="text-sm md:truncate">{description}</p>
        </div>
      </Link>
    </li>
  );
}
