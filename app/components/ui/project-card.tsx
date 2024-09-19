import { getPosts } from "@/lib/mdx";
import { sortPosts } from "@/lib/sortposts";
import { ProjectMeta } from "type";
import { PostList } from "./postlist";


const ProjectCard = async () => {
  const posts = await getPosts<ProjectMeta>("projects");

  // Sort the posts by date
  const sortedPosts = sortPosts(posts);

  return (
    <div className="py-16">
      <ul className="flex flex-col gap-5">
        {sortedPosts.map((post) => (
          <PostList key={post.slug} post={post.frontmatter} slug={post.slug} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
