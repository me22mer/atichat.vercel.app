import type { Metadata } from "next";

import Header from "@/components/common/header";
import BlogCard from "@/components/ui/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Take a look at my journal to help you relax and feel motivated.",
};

export default async function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black">
      <Header />
      <div className="w-full flex justify-center ">
        <div className="m-4  md:m-7 w-[672px]">
          <div className="mb-16 prose prose-invert">
            <h2 className="mb-2.5 text-3xl font-bold">Blog</h2>
            <p>
              Explore my blog for a dose of inspiration and relaxation. Let my
              stories and tips uplift your spirits and keep you motivated!
            </p>
          </div>
          <hr className=" border-zinc-800" />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
