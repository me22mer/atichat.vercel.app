import { getSortedPosts } from "@/lib/posts";
import ListItem from "./listitem";

export default function Posts() {
  const posts = getSortedPosts();

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
