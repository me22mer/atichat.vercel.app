import Image from "next/image";
import profile from "public/images/DSC02933.jpg";

import ListIcon from "@/components/ui/resume/ListIcon";
import Navigation from "@/components/ui/navigater";
import LinkedInIcon from "@/components/icons/LInkedIn-Icon";
import FacebookIcon from "@/components/icons/Facebook-Icon";
import XIcon from "@/components/icons/X-Icon";

export default function ResumePage() {
  return (
    <section className="w-full h-full bg-gradient-to-tl from-zinc-900 via-zinc-700/10 to-zinc-900 flex justify-center">
      <Navigation Href="/" />
      <div className="w-[720px] mt-32 mb-5 mx-10 ">
        <div className="mb-16 flex max-md:flex-col gap-10">
          <div className="md:w-[260px] md:h-[380px] w-full h-full">
            <Image
              className="mb-8 w-full h-full rounded-md duration-1000 "
              src={profile}
              alt=""
              style={{ objectFit: "cover", objectPosition: "center" }}
              loading="lazy"
              quality={100}
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw"
            />
          </div>
          <div>
            <article className="mb-5">
              <h3 className="mb-5 text-4xl font-bold">Atichat Thongnak</h3>
              <p className="mb-2 font-semibold  text-[1.05rem]">
                Address:{" "}
                <span className="font-normal">Bangkok 10220, Thailand</span>
              </p>
              <p className="mb-2 font-semibold  text-[1.05rem]">
                Email:{" "}
                <span className="font-normal">atichatbusiness@gmail.com</span>
              </p>
              {/* <p className="mb-2 font-semibold">
                Phone: <span className="font-normal">+66 093 xxx xx22</span>
              </p> */}
            </article>
            <span className="flex gap-2.5 items-center">
              <FacebookIcon IconClass="fill-white hover:scale-105 duration-300" />
              <LinkedInIcon IconClass="fill-white hover:scale-105 duration-300" />
              <XIcon IconClass="fill-white hover:scale-105 duration-300" />
            </span>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="mb-5 text-2xl font-semibold">Objective</h3>
          <p className="leading-relaxed  text-[1.05rem]">
            Seeking a challenging role to leverage expertise in creating
            user-interactive websites and contribute to innovative projects.
            experienced front-end developer proficient in HTML, CSS, and
            Typescript (TSX), with expertise in Next.js, React, and Astro
            Framework. Skilled in utilizing Amazon services like Cloudfront, S3,
            and EC2.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="mb-5 text-2xl font-semibold">Experience</h3>
          <div className="leading-relaxed">
            <div className="font-semibold text-yellow-500">
              <h4 className="mb-1.5 text-[1.05rem]">
                <span className="font-semibold text-lg">
                  Volunteer<span className="text-white">,</span>
                </span>{" "}
                <span className="font-normal text-white"> GoodGeekClub</span>{" "}
                <span className="font-normal text-zinc-300 italic">
                  (Dec 2023 to Present)
                </span>
              </h4>
            </div>
            <div>
              <ul className="list-disc list-inside  text-[1.05rem]">
                <li>
                  Create a website with WordPress for healthy food products.
                </li>
                <li>
                  Using Amazon services such as S3, Cloudfront, to host a static
                  webpage.
                </li>
                <li>
                  Provide IT expertise as a volunteer to benefit the less
                  fortunate.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="mb-5 text-2xl font-semibold">Education</h3>
          <div className="leading-relaxed">
            <time className="font-semibold text-yellow-500 text-[1.05rem]">
              2021 - Present
            </time>
            <p className="text-zinc-50  text-[1.05rem]">
              Bachelor of Science (Information and Communication Technology),
              <span className="text-zinc-300"> Sripatum University</span>
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="mb-5 text-2xl font-semibold">Skills</h3>
          <div className="flex gap-1.5">
            <ListIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
