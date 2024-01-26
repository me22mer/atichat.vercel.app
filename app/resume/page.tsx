import ListIcon from "@/components/ui/ListIcon";
import Navigation from "@/components/ui/navigaton";

export default function ResumePage() {
  return (
    <section className="w-full h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 flex justify-center">
      <Navigation Href="/" />
      <div className="w-[710px] mt-32 mb-6 mx-7 ">
        <div className="my-10">
          <h3 className="mb-6 text-2xl font-semibold">Education</h3>
          <div className="leading-relaxed">
            <time className="font-semibold">2021 - Present</time>
            <h5 className="text-zinc-50">
              Bachelor of Science (Information and Communication Technology)
            </h5>
            <p className="text-zinc-400">Sripatum University</p>
          </div>
        </div>
        <div className="my-20">
          <h3 className="mb-6 text-2xl font-semibold">Skill</h3>
          <div className="flex gap-1.5">
            <ListIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
