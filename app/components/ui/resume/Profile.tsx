import Image from "next/image";

import FacebookIcon from "@/icons/Facebook-Icon";
import LinkedInIcon from "@/icons/LInkedIn-Icon";
import XIcon from "@/icons/X-Icon";

import profile from "public/images/myprofile.png";

export default function Profile() {
  return (
    <>
      <div className="mb-20 flex flex-col md:flex-row md:gap-10">
        <div className="h-full w-full md:w-[220px] md:h-[300px] flex-shrink-0">
          <Image
            className="w-full h-full rounded-md duration-1000 object-top md:object-center"
            src={profile}
            alt="Profile Picture"
            style={{ objectFit: "cover" }}
            loading="lazy"
            quality={100}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw"
          />
        </div>
        <div className="">
          <article className="mb-2 text-white">
            <h3 className="mt-[1em] text-3xl md:text-4xl font-bold">
              Atichat Thongnak
            </h3>
            <p className="-mb-1 font-semibold text-[1.05rem]">
              Address:{" "}
              <span className="font-normal">Bangkok 10220, Thailand</span>
            </p>
            <p className="font-semibold text-[1.05rem]">
              Email:{" "}
              <span className="font-normal">atichatbusiness@gmail.com</span>
            </p>
            {/* <p className="mb-2 font-semibold text-[1.05rem]">
              Phone: <span className="font-normal">+66 093 xxx xx22</span>
          </p> */}
          </article>
          <div className="flex gap-2.5 items-center">
            <FacebookIcon IconClass="fill-white hover:scale-105 duration-300" />
            <LinkedInIcon IconClass="fill-white hover:scale-105 duration-300" />
            <XIcon IconClass="fill-white hover:scale-105 duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}
