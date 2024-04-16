import { Link } from "next-view-transitions";

import { getFormatDate } from "@/lib/utils";

type Props = {
  post: ProjectMeta;
  slug: string;
};

export default function Listproject({ post, slug }: Props) {
  const { title, description, publishedAt, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  return (
    <>
      {published ? (
        <Link
          href={`projects/${slug}`}
          className="w-full  p-4 md:p-6 border rounded-xl hover:bg-zinc-900 duration-500  border-zinc-800"
        >
          <div className="text-zinc-400 hover:text-zinc-100 transition-colors duration-1000">
            <time className="text-xs text-zinc-50">{formattedDate}</time>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
            <p className="text-sm md:truncate">{description}</p>
          </div>
        </Link>
      ) : null}
    </>
  );
}
