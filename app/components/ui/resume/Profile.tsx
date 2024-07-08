import Image from "next/image";
import LinkedInIcon from "@/icons/LInkedIn-Icon";
import XIcon from "@/icons/X-Icon";
import profile from "public/images/profile-rm-bg.png";

export default function Profile() {
  return (
    <div>
      <div className="w-full h-max mb-20 p-3.5 sm:p-5 flex flex-col md:flex-row md:gap-5 rounded-xl bg-gradient-to-br from-zinc-200 via-zinc-200 to-zinc-600">
        <div className="z-50 mb-5 md:mb-0 relative h-full w-full md:w-[280px] md:h-[200px] flex-shrink-0 rounded-lg ">
          <Image
            className="z-50 mb-0 mt-0 w-full h-full rounded-lg duration-1000 object-cover"
            src={profile}
            alt="Profile Picture"
            style={{ objectFit: "cover" }}
            loading="lazy"
            quality={100}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw"
          />
          <div className="z-40 absolute h-full w-full top-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/10 rounded-lg "></div>
        </div>
        <div className="my-auto w-full text-start">
          <div className="mb-2 text-black flex flex-col text-xs md:text-lg">
            <h1 className="-mb-1 font-bold text-2xl md:text-3xl text-black">
              Atichat Thongnak
            </h1>
            <div className="mb-3.5 text-[0.85rem] sm:text-[1.05rem]">
              <p className="mb-1.5 md:mb-1 font-normal">
                Address: Bangkok 10220, Thailand
              </p>
              <p className="mt-0 font-normal">
                Email: atichatbusiness@gmail.com
              </p>
              {/* Phone: <span className="font-normal">+66 093 xxx xx22</span> */}
            </div>
            <div className="flex flex-row-reverse md:flex-row  justify-between items-center">
              <div className="flex gap-2.5 items-center">
                <LinkedInIcon IconClass="fill-black hover:scale-105 duration-300" />
                <XIcon IconClass="fill-black hover:scale-105 duration-300" />
              </div>
              <div className="flex items-center gap-2 bg-zinc-700 text-white px-2.5 sm:px-3 py-1 sm:py-2 rounded-2xl">
                {/* <div className="relative w-2 h-2">
                  <div className="absolute w-full h-full bg-green-600 rounded-full animate-ping"></div>
                  <div className="relative w-full h-full bg-green-600 rounded-full"></div>
                </div>
                <span className="font-base text-xs">Available For Work</span> */}
                <div className="relative w-2 h-2">
                  <div className="absolute w-full h-full bg-red-600 rounded-full animate-ping"></div>
                  <div className="relative w-full h-full bg-red-600 rounded-full"></div>
                </div>
                <span className="font-base text-xs text-red-600">
                  Not Available For Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
