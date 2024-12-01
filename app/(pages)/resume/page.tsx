import { MapPin, Briefcase, GraduationCap, Code } from "lucide-react";
import { Badge } from "@/ui/badge";
import AnimatedSection from "@/ui/animated-section";
import { Metadata } from "next";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

export const metadata: Metadata = {
  title: "Resume | Atichat Thongnak",
  description: "Professional resume of Atichat Thongnak, Frontend Developer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <AnimatedSection>
          <header className="text-center space-y-4 mb-12">
            <Avatar className="mx-auto mb-10 w-32 h-32">
              <AvatarImage src="https://github.com/me22mer.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold">Atichat Thongnak</h1>
            <p className="text-xl text-zinc-400">Frontend Developer</p>
            <div className="flex items-center justify-center text-sm text-zinc-400">
              <MapPin className="w-4 h-4 mr-1" />
              <span>10220 Bangkok, Thailand</span>
            </div>
            <Badge variant="destructive" className="mt-2">
              Not available for work
            </Badge>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" /> Objective
            </h2>
            <p className="text-zinc-300">
              Seeking a challenging role as a frontend developer to leverage
              expertise in creating dynamic, user-interactive websites using
              modern technologies like React and Angular. Eager to contribute to
              innovative projects that push the boundaries of user experience
              and web development.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Experience
            </h2>
            <div className="space-y-6">
              <div className=" p-6 rounded-lg">
                <h3 className="text-lg font-medium text-zinc-200">
                  Web Developer
                </h3>
                <p className="text-sm text-zinc-400 mb-2">
                  GoodGeekClub | 2022 - Present
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-300">
                  <li>
                    Volunteered to plan many IT events to advance diverse skill
                    development and have a beneficial impact on society.
                  </li>
                  <li>
                    Created a website with Plesk hosting and WordPress for{" "}
                    <a
                      href="https://dseelin.co.th"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline">
                      dseelin.co.th
                    </a>
                  </li>
                  <li>
                    Deployed a static web page using Next.js and implemented an
                    internationalization feature with next-intl for{" "}
                    <a
                      href="https://youthplusthailand.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline">
                      youthplusthailand.com
                    </a>
                  </li>
                  <li>
                    Hosted static web pages with Amazon Web Services, utilizing
                    CloudFront, S3, and EC2.
                  </li>
                  <li>Provided IT expertise as a volunteer.</li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            <div className=" p-6 rounded-lg">
              <h3 className="text-lg font-medium text-zinc-200">
                Bachelor of Science
              </h3>
              <p className="text-zinc-300">
                Information and Communication Technology
              </p>
              <p className="text-sm text-zinc-400">
                Sripatum University, Bangkok | 2021 - Present
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" /> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "TypeScript",
                "Next.js",
                "Angular",
                "Astro",
                "React",
                "Tailwind CSS",
                "shadcn/ui",
                "Amazon CloudFront",
                "Amazon S3",
                "Amazon EC2",
                "WordPress",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-zinc-600">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
