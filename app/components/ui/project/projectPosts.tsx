import { getSortedPosts } from "@/lib/posts";
import Listproject from "./Listproject";

export default async function ProjectPosts() {
  const { projectPosts } = await getSortedPosts();

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {projectPosts.map((post) => (
          <Listproject
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
