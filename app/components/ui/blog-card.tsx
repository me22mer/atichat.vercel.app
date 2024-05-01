import { Link } from "next-view-transitions";

import { getPosts } from "@/lib/mdx";
import { getFormatDate } from "utils/useformatdate";
import { BlogMeta } from "type";

type Props = {
  post: BlogMeta;
  slug: string;
};

const BlogCard = async () => {
  const posts = await getPosts<BlogMeta>("blog");

  posts.sort((a, b) => {
    if (
      new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)
    ) {
      return 1;
    }
    return -1;
  });


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
      className="p-5 w-full h-full  rounded-xl transition-colors border border-zinc-800 group hover:bg-zinc-900 duration-500"
    >
      <div className="text-zinc-400 hover:text-zinc-100 flex flex-col sm:flex-row gap-5 transition-colors duration-1000">

        <div className="flex flex-col prose prose-invert">
          <time className="text-xs">{formattedDate}</time>
          <h1 className="text-xl  md:text-3xl font-bold">{title}</h1>
          <p className="my-0 max-sm:text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
