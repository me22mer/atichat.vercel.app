import { getBlogs } from "@/lib/posts";
import { ListBlog } from "./ListBlog";

export default async function BlogPosts() {
  const posts = await getBlogs();

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {posts.map((post) => (
          <ListBlog key={post.slug} post={post.frontmatter} slug={post.slug} />
        ))}
      </ul>
    </div>
  );
}
