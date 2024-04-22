import Image from "next/image";
import { Link } from "next-view-transitions";

import { getPosts } from "@/lib/mdx";
import { getFormatDate } from "@/lib/utils";
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

  if (!published) {
    return null; // or return a message indicating that the post is not published
  }

  return (
    <Link
      href={`/${slug}`}
      className="w-full p-4 md:w-[326px] h-full overflow-hidden rounded-lg transition-colors border border-zinc-800 group"
    >
      <div className="overflow-hidden rounded-md text-zinc-400 hover:text-zinc-100 flex flex-col gap-5 transition-colors duration-1000">
        {coverImage ? (
          <div className="w-[300px]">
            <Image
              className="w-full rounded-md duration-300 group-hover:scale-105"
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
          </div>
        ) : (
          <div className="w-[300px] flex justify-center items-center">
            <p>No cover image available</p>
          </div>
        )}
        <div className="flex flex-col">
          <h1 className="mb-3 text-2xl  md:text-3xl font-bold">{title}</h1>
          <p className="mb-3">{description}</p>
          <time className="text-sm text-zinc-100">{formattedDate}</time>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
