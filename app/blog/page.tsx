import Header from "@/components/common/header";
import BlogPosts from "@/components/ui/blog/blogPosts";
import Section from "@/components/ui/section";

export default async function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-black">
      <Header />
      <div className="w-full flex justify-center ">
        <div className="m-4  md:m-7 w-[720px] h-screen">
          <div className="mb-14">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
          </div>
          <hr className=" border-zinc-600" />
          <Section delay={0.3} className="">
            <BlogPosts />
          </Section>
        </div>
      </div>
    </div>
  );
}
