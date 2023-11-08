import Header from "@/components/header";
import Posts from "@/components/post";
import Section from "@/components/section";

export default async function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <div className="m-6 w-[710px] divide-y divide-zinc-600">
          <div className="mb-6  divide-y divide-zinc-700">
            <Section delay={0.1} className="mb-16">
              <h2 className="mb-2 text-3xl font-bold">Projects</h2>
              <p>I&apos;ve done some projects on my own time.</p>
            </Section>
          </div>
          <Section delay={0.3} className="">
            <Posts />
          </Section>
        </div>
      </div>
    </>
  );
}
