
import Navigation from "@/components/ui/navigater";
import Profile from "@/components/ui/resume/Profile";
import Objective from "@/components/ui/resume/Objective";
import Experience from "@/components/ui/resume/Experience";
import Education from "@/components/ui/resume/Education";
import Skills from "@/components/ui/resume/Skills";

export default function ResumePage() {
  return (
    <section className="w-full h-full bg-gradient-to-tl from-zinc-900 via-zinc-700/10 to-zinc-900 flex justify-center">
      <Navigation Href="/" />
      <div className="w-[720px] mt-32 mb-5 mx-10 ">
        <Profile />
        <Objective />
        <Experience />
        <Education />
        <Skills />
      </div>
    </section>
  );
}
