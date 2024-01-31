import { getSortedPosts } from "@/lib/posts";
import Listblog from "./Listblog";

export default async function BlogPosts() {
  
  const { blogPosts } = await getSortedPosts();
  
  return (
    <div>
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {blogPosts.map((post) => (
          <Listblog key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
