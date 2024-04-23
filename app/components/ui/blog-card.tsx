import Image from "next/image";
import { Link } from "next-view-transitions";

import { getPosts } from "@/lib/mdx";
import { getFormatDate } from "@/lib/utils";
import { BlogMeta } from "type";

import notFoundImage from "../../../public/images/blog/not-found-image.jpg";

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
      className="p-4 w-full h-full  rounded-lg transition-colors border border-zinc-800 group"
    >
      <div className="rounded-md text-zinc-400 hover:text-zinc-100 flex flex-col sm:flex-row gap-5 transition-colors duration-1000">
        {coverImage ? (
          <div className="w-full overflow-hidden rounded-md">
            <Image
              className="w-full h-full rounded-md duration-300 group-hover:scale-105"
              src={coverImage}
              alt=""
              width={320}
              height={200}
              quality={100}
              sizes="(max-width: 1024px) 100vw"
              placeholder="blur"
              blurDataURL="/images/blog/blur.webp"
            />
          </div>
        ) : (
          <div className="w-full relative overflow-hidden rounded-md">
            <Image
              className="w-full sm:w-[320px] h-full sm:h-[180px] rounded-md brightness-75 object-cover blur-lg"
              src={notFoundImage}
              alt=""
              width={320}
              height={200}
              quality={100}
              sizes="(max-width: 1024px) 100vw"
            />
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
