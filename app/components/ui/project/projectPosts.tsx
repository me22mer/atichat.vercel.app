import { getSortedPosts } from "@/lib/posts";
import Listproject from "./Listproject";

export default async function ProjectPosts() {
  const { projectPosts } = await getSortedPosts();

  return (
    <div>
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {projectPosts.map((post) => (
          <Listproject key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
