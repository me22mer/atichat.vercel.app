import Header from "@/components/common/header";
import BlogPosts from "@/components/ui/blog/blogPosts";
import Section from "@/components/ui/section";

export default async function BlogPage() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center ">
        <div className="m-7 w-[710px]">
          <div className="mb-16">      
            <h2 className="mb-2 text-3xl font-bold">Blog</h2>
            <p></p>
          </div>
          <hr className=" border-zinc-600" />
          <Section delay={0.3}  className="">
            <BlogPosts />
          </Section>
        </div>
      </div>
    </>
  );
}