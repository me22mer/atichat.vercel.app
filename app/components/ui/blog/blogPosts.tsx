import { getBlogs } from "@/lib/posts";
import { ListBlog } from "./ListBlog";

export default async function BlogPosts() {
  const posts = await getBlogs();

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.frontmatter.publishedAt) >
              new Date(b.frontmatter.publishedAt)
            ) {
              return 1;
            }
            return -1;
          })
          .map((post) => (
            <ListBlog
              key={post.slug}
              post={post.frontmatter}
              slug={post.slug}
            />
          ))}
      </ul>
    </div>
  );
}
