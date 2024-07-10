import type { Metadata } from "next";

import Navigation from "@/components/ui/navigater";
import Image from "next/image";

import profile from "public/images/profile.jpeg";

export const metadata: Metadata = {
  title: "Resume",
  description: "Please consider hiring me based on my resume.",
};

export default function ResumePage() {
  return (
    <section
      className={`w-full h-full bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950 flex justify-normal md:justify-center`}
    >
      <Navigation pageHeading="RESUME." />
      <div className="w-full max-w-fit mt-20 mb-20 mx-4 md:mx-10 pt-16 flex justify-center gap-20 ">
        <div className="bg-background text-foreground max-w-[672px] flex flex-col">
          <div className="grid gap-8">
            <section className="grid gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-28 w-28">
                  <Image
                    className="h-full w-full object-cover object-center"
                    alt=""
                    src={profile}
                    loading="lazy"
                    quality={100}
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw"
                  />
                </span>
                <div className="grid gap-1">
                  <h1 className="text-2xl font-bold">Atichat Thongnak</h1>
                  <p className="text-muted-foreground">Web Developer</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-red-500">
                    <CircleCrossIcon className="h-4 w-4" />
                    <span>Not available for work</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground"></p>
            </section>
            <section className="grid gap-2">
              <h2 className="text-lg font-semibold"># Objective</h2>
              <p className="text-zinc-300 prose max-w-full">
                Seeking a challenging role to leverage expertise in creating
                user-interactive websites and contribute to innovative projects.
                experienced front-end developer proficient in HTML, CSS and
                Typescript (TSX), with Next.js, Angular, Astro, React, and
                Tailwindcss. Skilled in utilizing Amazon services like
                Cloudfront, S3, and EC2.
              </p>
            </section>
            <section className="grid gap-4">
              <h2 className="text-lg font-semibold"># Experience</h2>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <div className="flex flex-col-reverse md:flex-row md:justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-base font-semibold">
                        Web Developer,{" "}
                        <span className="font-normal">GoodGeekClub</span>
                      </h3>
                    </div>
                    <p className="text-muted-foreground">2022 - Present</p>
                  </div>
                  <div className="prose max-w-full">
                    <p className="text-muted-foreground text-zinc-300 leading-relaxed">
                      Goodgeekclub is a club dedicated to training youth
                      interested in IT and providing IT expertise to improve
                      society. During my time with Goodgeekclub, I volunteered
                      to organize numerous IT activities to contribute
                      positively to society and develop various skills.
                    </p>
                    <p className="text-muted-foreground text-zinc-300 leading-relaxed">
                      I created a website with Plesk hosting and WordPress for
                      healthy food products at
                      <a
                        href="https://dseelin.co.th/"
                        target="_blank"
                        className="no-underline font-semibold text-white"
                      >
                        {" "}
                        dseelin.co.th
                      </a>
                      . I also deployed a static web page using
                      <a
                        href="https://nextjs.org/"
                        target="_blank"
                        className="no-underline font-semibold text-white"
                      >
                        {" "}
                        Next.js{" "}
                      </a>
                      and implemented an internationalization feature with
                      <a
                        href="https://next-intl-docs.vercel.app/"
                        target="_blank"
                        className="no-underline font-semibold text-white"
                      >
                        {" "}
                        next-intl{" "}
                      </a>
                      for
                      <a
                        href="https://youthplusthailand.com/"
                        target="_blank"
                        className="no-underline font-semibold text-white"
                      >
                        {" "}
                        youthplusthailand.com{" "}
                      </a>
                      . Additionally, I hosted static web pages with
                      <a
                        href="https://aws.amazon.com/"
                        target="_blank"
                        className="no-underline font-semibold text-white"
                      >
                        {" "}
                        Amazon Web Services{" "}
                      </a>
                      , utilizing CloudFront, S3, and EC2, and provided IT
                      expertise as a volunteer.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid gap-4">
              <h2 className="text-lg font-semibold"># Education</h2>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <div className="flex flex-col-reverse md:flex-row md:justify-between">
                    <div className="grid gap-1">
                      <h3 className="text-base font-medium">
                        Bachelor of Science (Information and Communication
                        Technology)
                      </h3>
                      <p className="text-muted-foreground text-zinc-300">
                        Sripatum University, Bangkok
                      </p>
                    </div>
                    <p className="text-muted-foreground">2021 - Present</p>
                  </div>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CircleCrossIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}
