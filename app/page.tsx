import Image from "next/image";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Section from "@/components/ui/section";

import profile from "public/images/DSC03307.avif";

export default async function Home() {
  return (
    <div className="bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black">
      <Header />

      <div className="flex justify-center">
        <div className="mt-12 mb-6 mx-4 md:mx-6 w-[720px]">
          <div className="flex flex-col md:gap-6">
            <Section className="mb-6 aspect-h-2 md:aspect-w-7 aspect-w-4 overflow-hidden rounded-md">
              <Image
                className=" w-full h-full rounded-md duration-1000 "
                src={profile}
                alt=""
                style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                loading="lazy"
                quality={100}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw"
              />
            </Section>

            <Section className="mb-8 col-span-2">
              <h1 className="mb-8 text-[1.2rem] md:text-3xl font-bold">
                Hi there, I&apos;m Atichat 😊
              </h1>
              <div className=" sm:text-justify text-start flex flex-col gap-7 leading-relaxed text-[1rem]">
                <p>
                  I&apos;m currently a student at{" "}
                  <a
                    href="https://www.spu.ac.th/"
                    target="_blank"
                    className="hover:font-semibold duration-500"
                  >
                    Sripatum University{" "}
                  </a>
                  studying Information and Communication Technology. Even though
                  I prefer to create front-end websites, I&apos;ll keep trying.
                  I enjoy finding challenges for myself.
                </p>
                <p>
                  I like the pixel art aesthetic and would like to make video
                  games. In addition, I like to watch anime, play video games,
                  and am a{" "}
                  <a
                    href="https://www.rockstargames.com/"
                    target="_blank"
                    className="hover:font-semibold duration-500"
                  >
                    RockstarGames
                  </a>{" "}
                  fan.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
