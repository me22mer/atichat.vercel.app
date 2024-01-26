import { getSortedPosts } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getSortedPosts();

  return (
    <div>
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
