import Listproject from "./Listproject";

import { projects } from "#site/content";
import { sortPosts } from "@/lib/utils";


export default async function ProjectPosts() {
  const sortedPosts = sortPosts(projects.filter((post) => post));

  return (
    <div className="">
      <ul className="my-16 w-full flex flex-wrap justify-betdween gap-5">
        {sortedPosts.map((post) => (
          <Listproject
            key={post.slug}
            slug={post.slug}
            title={post.slugAsParams}
            description={post.description}
            date={post.date}
          />
        ))}
      </ul>
    </div>
  );
}
