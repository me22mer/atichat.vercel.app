import { MapPin } from "lucide-react";
import { Badge } from "@/ui/badge";
import { Card, CardContent } from "@/ui/card";
import AnimatedSection from "@/ui/animated-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Please consider hiring me based on my resume.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen my-12 mx-4 sm:mx-6 lg:mx-8">
      <div className="container max-w-4xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="px-0 md:p-8 space-y-12">
            <AnimatedSection>
              <header className="mb-12 text-center space-y-2">
                <h1 className="text-4xl font-bold text-white">
                  Atichat Thongnak
                </h1>
                <p className="text-xl text-gray-400">Frontend Developer</p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>10220 Bangkok, Thailand</span>
                </div>
                <Badge
                  variant="secondary"
                  className="mt-2 bg-zinc-800 text-zinc-300">
                  Not available for work
                </Badge>
              </header>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                  Objective
                </h2>
                <p className="text-gray-300">
                  Seeking a challenging role as a frontend developer to leverage
                  expertise in creating dynamic, user-interactive websites using
                  modern technologies like React and Angular. Eager to
                  contribute to innovative projects that push the boundaries of
                  user experience and web development.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                  Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-200">
                      Web Developer
                    </h3>
                    <p className="text-sm text-gray-400">
                      GoodGeekClub | 2022 - Present
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                      <li>
                        Volunteered to plan many IT events to advance diverse
                        skill development and have a beneficial impact on
                        society.
                      </li>
                      <li>
                        Created a website with Plesk hosting and WordPress for{" "}
                        <a
                          href="https://dseelin.co.th"
                          target="_blank"
                          className="text-blue-400">
                          dseelin.co.th
                        </a>
                      </li>
                      <li>
                        Deployed a static web page using Next.js and implemented
                        an internationalization feature with next-intl for{" "}
                        <a
                          href="https://youthplusthailand.com"
                          target="_blank"
                          className="text-blue-400">
                          youthplusthailand.com
                        </a>
                      </li>
                      <li>
                        Hosted static web pages with Amazon Web Services,
                        utilizing CloudFront, S3, and EC2.
                      </li>
                      <li>Provided IT expertise as a volunteer.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                  Education
                </h2>
                <div>
                  <h3 className="text-lg font-medium text-gray-200">
                    Bachelor of Science
                  </h3>
                  <p className="text-sm text-gray-300">
                    Information and Communication Technology
                  </p>
                  <p className="text-sm text-gray-400">
                    Sripatum University, Bangkok | 2021 - Present
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-white">
                  Skills
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
                      className="bg-zinc-800 text-gray-300 hover:bg-zinc-700 border-zinc-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
