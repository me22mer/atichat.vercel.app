import Image from "next/image";

import FacebookIcon from "@/icons/Facebook-Icon";
import LinkedInIcon from "@/icons/LInkedIn-Icon";
import XIcon from "@/icons/X-Icon";

import profile from "public/images/DSC02933.avif";

export default function Profile() {
  return (
    <div className="mb-16 flex max-md:flex-col-reverse gap-10">
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
        <article className="mb-2">
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
  );
}
