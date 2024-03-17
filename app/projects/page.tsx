import Header from "@/components/common/header";
import ProjectPosts from "@/components/ui/project/projectPosts";
import Section from "@/components/ui/section";

export default async function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-black">
      <Header />
      <div className="w-full flex justify-center ">
        <div className="m-7 w-[720px]">
          <div className="mb-16">      
            <h2 className="mb-2 text-3xl font-bold">Projects</h2>
            <p>I&apos;ve done some projects on my own time.</p>
          </div>
          <hr className=" border-zinc-600" />
          <Section delay={0.3}  className="">
            <ProjectPosts />
          </Section>
        </div>
      </div>
    </div>
  );
}
