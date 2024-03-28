"use client";

import dynamic from "next/dynamic";

// import Navigation from "@/components/ui/navigater";
// import Profile from "@/components/ui/resume/Profile";
// import Objective from "@/components/ui/resume/Objective";
// import Experience from "@/components/ui/resume/Experience";
// import Education from "@/components/ui/resume/Education";
// import Skills from "@/components/ui/resume/Skills";

const Navigation = dynamic(() => import("@/components/ui/navigater"));
const Profile = dynamic(() => import("@/components/ui/resume/Profile"));
const Objective = dynamic(() => import("@/components/ui/resume/Objective"));
const Experience = dynamic(() => import("@/components/ui/resume/Experience"));
const Education = dynamic(() => import("@/components/ui/resume/Education"));
const Skills = dynamic(() => import("@/components/ui/resume/Skills"));

export default function ResumePage() {
  return (
    <section className="w-full h-full bg-gradient-to-tl from-zinc-900 via-zinc-950 to-zinc-900 flex justify-normal md:justify-center">
      <Navigation />
      <div className="w-[720px] mt-32 mb-5 mx-5 md:mx-10 ">
        <Profile />
        <Objective />
        <Experience />
        <Education />
        <Skills />
      </div>
    </section>
  );
}
