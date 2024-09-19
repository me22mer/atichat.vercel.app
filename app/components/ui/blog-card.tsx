import { getPosts } from "@/lib/mdx";
import { sortPosts } from "@/lib/sortposts";
import { BlogMeta } from "type";
import { PostList } from "./postlist";


const BlogCard = async () => {
  const posts = await getPosts<BlogMeta>("blog");

  // Sort the posts by date
  const sortedPosts = sortPosts(posts);

  return (
    <div className="my-16 w-full flex flex-wrap justify-between gap-5">
      {sortedPosts.map((post) => (
        <PostList key={post.slug} post={post.frontmatter} slug={post.slug} />
      ))}
    </div>
  );
};

export default BlogCard;
