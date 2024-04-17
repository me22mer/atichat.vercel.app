import { Link } from "next-view-transitions";
import Image from "next/image";
import { getFormatDate } from "@/lib/utils";

type Props = {
  post: BlogMeta;
  slug: string;
};

export function ListBlog({ post, slug }: Props) {
  const { title, description, publishedAt, coverImage, published } = post;
  const formattedDate = getFormatDate(publishedAt);

  return (
    <>
      {published ? (
        <Link
          href={`blog/${slug}`}
          className="w-full px-3 py-3 md:w-[326px] h-full overflow-hidden rounded-lg duration-500 border border-zinc-800"
        >
          <div className="overflow-hidden rounded-md text-zinc-400 flex flex-col gap-5 hover:text-zinc-100 transition-colors duration-1000">
            <Image
              className="w-full rounded-md duration-1000  hover:scale-105 "
              src={coverImage}
              alt=""
              style={{ objectFit: "fill" }}
              width={300}
              height={400}
              quality={100}
              sizes="(max-width: 1024px) 100vw"
              placeholder="blur"
              blurDataURL="/images/blog/blur.jpg"
            />
            <div className=" flex flex-col ">
              <time className="mb-3 text-sm text-zinc-50">{formattedDate}</time>
              <h1 className="mb-3 text-2xl  md:text-3xl font-bold">{title}</h1>
              <p >{description}</p>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}
