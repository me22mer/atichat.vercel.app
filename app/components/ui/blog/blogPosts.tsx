import { blogs } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { ListBlog } from "./ListBlog";

export default async function BlogPosts() {
  const sortedPosts = sortPosts(blogs.filter((post) => post));

  return (
    <div className="">
      <ul className="my-10 w-full flex flex-wrap justify-betdween gap-5">
        {sortedPosts.map((post) => (
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
