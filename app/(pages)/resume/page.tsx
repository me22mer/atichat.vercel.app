import type { Metadata } from "next";
import { CircleXIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

export const metadata: Metadata = {
  title: "Resume",
  description: "Please consider hiring me based on my resume.",
};

export default function ResumePage() {
  return (
    <>
      <section
        className={`w-full h-full bg-zinc-950 flex flex-col justify-normal md:justify-center items-center `}>
        <div className="max-w-[672px] h-full mt-5 mb-20 mx-4 md:mx-10 pt-16 flex justify-center gap-20 ">
          <div className="bg-transparent text-white max-w-[672px] flex flex-col ">
            <div className="grid gap-8">
              <section className="grid gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar className="h-28 w-28 ">
                    <AvatarImage
                      src="/images/profile.jpeg"
                      className="h-full w-full object-cover object-center"
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <h1 className="text-2xl font-bold">Atichat Thongnak</h1>
                    <p className="text-muted-foreground">Frontend Developer</p>
                    <p className="text-muted-foreground">
                      Address: 10220 Bangkok, Thailand
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-red-500">
                      <CircleXIcon className="h-4 w-4" />
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
                  user-interactive websites and contribute to innovative
                  projects. experienced front-end developer proficient in HTML,
                  CSS and Typescript (TSX), with Next.js, Angular, Astro, React,
                  Tailwindcss and shadcn/ui. Skilled in utilizing Amazon
                  services like Cloudfront, S3, and EC2.
                </p>
              </section>
              <section className="grid gap-4">
                <h2 className="text-lg font-semibold"># Experience</h2>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <div className="flex flex-col-reverse md:flex-row md:justify-between">
                      <div className="grid gap-1">
                        <h3 className="text-base font-semibold">
                          GoodGeekClub,{" "}
                          <span className="font-normal">Web Developer</span>
                        </h3>
                      </div>
                      <p className="text-muted-foreground">2022 - Present</p>
                    </div>
                    <div className="prose max-w-full">
                      <p className="text-muted-foreground text-zinc-300 leading-relaxed">
                        GoodGeekClub is a group that teaches young people who
                        are interested in technology and uses that knowledge to
                        better society. I volunteered to plan many IT events to
                        advance diverse skill development and have a beneficial
                        impact on society when I was a member of GoodGeekClub.
                      </p>
                      <p className="text-muted-foreground text-zinc-300 leading-relaxed">
                        I created a website with Plesk hosting and WordPress for
                        healthy food products at
                        <a
                          href="https://dseelin.co.th/"
                          target="_blank"
                          className="no-underline font-semibold text-white">
                          {" "}
                          dseelin.co.th
                        </a>
                        . I also deployed a static web page using
                        <a
                          href="https://nextjs.org/"
                          target="_blank"
                          className="no-underline font-semibold text-white">
                          {" "}
                          Next.js{" "}
                        </a>
                        and implemented an internationalization feature with
                        <a
                          href="https://next-intl-docs.vercel.app/"
                          target="_blank"
                          className="no-underline font-semibold text-white">
                          {" "}
                          next-intl{" "}
                        </a>
                        for
                        <a
                          href="https://youthplusthailand.com/"
                          target="_blank"
                          className="no-underline font-semibold text-white">
                          {" "}
                          youthplusthailand.com{" "}
                        </a>
                        . Additionally, I hosted static web pages with
                        <a
                          href="https://aws.amazon.com/"
                          target="_blank"
                          className="no-underline font-semibold text-white">
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
    </>
  );
}