import { getSortedPosts } from "@/lib/posts";
import { ListBlog } from "./ListBlog";

export default async function BlogPosts() {
  const { blogPosts } = await getSortedPosts();

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {blogPosts.map((post) => (
          <ListBlog
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </ul>
    </div>
  );
}
