import Navigation from "@/components/ui/navigaton";
import getFormattedDate from "@/lib/getFomattedDate";
import { getSortedPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getSortedPosts();

  return (posts).map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await getSortedPosts();
  const { slug } = params;

  const post = posts.find((post) => post.id === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { title, date, subtitle, contentHtml } = await getPost(slug);
  const pubDate = getFormattedDate(date);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation Href="/projects" />
      <div className="w-full bg-black">
        <div className="py-24 sm:py-32 flex justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <div className=" px-6 flex flex-col text-center">
            <time className="mb-6 text-lg  text-zinc-300">{pubDate}</time>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{subtitle}</p>
          </div>
        </div>
        <div className="bg-white">
          <div className="">
            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
