import Header from "@/components/header";
import Posts from "@/components/post";

export default async function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <div className="m-6 w-[710px] divide-y divide-zinc-600">
          <div className="mb-6  divide-y divide-zinc-700">
            <div className="mb-16">
              <h2 className="mb-2 text-3xl font-bold">Projects</h2>
              <p>I&apos;ve done some projects on my own time.</p>
            </div>
            <Posts />
          </div>
        </div>
      </div>
    </>
  );
}
