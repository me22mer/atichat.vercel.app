import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="m-6 py-8 w-[710px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
            <div className="mb-8 aspect-h-2 aspect-w-square">
              <Image
                className="mb-8 rounded-md"
                src="/images/DSC02965.jpg"
                alt=""
                style={{ objectFit: "cover", objectPosition: "right" }}
                width={710}
                height={100}
                quality={90}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="mb-8 col-span-2">
              <h1 className="mb-8 text-[1.25rem] lg:text-3xl font-semibold">
                {` Hi there, I'm y3sterd4y 😊`}
              </h1>
              <p className="mb-6 text-[1.05rem] md:text-justify leading-relaxed">
                {`I'm currently a student at`}{" "}
                <a
                  href="https://www.spu.ac.th/"
                  target="_blank"
                  className="text-pink-400"
                >
                  Sripatum University{" "}
                </a>
                {`
                studying Information and Communication Technology. Even though I
                prefer to create front-end-only websites, I'll keep trying.
                I enjoy finding challenges for myself.`}
              </p>
              <p className="md:text-justify">
                I like the pixel art aesthetic and would like to make video
                games. In addition, I like to watch anime ⚔️, play video games
                🎮, and am a{" "}
                <a
                  href="https://www.rockstargames.com/"
                  target="_blank"
                  className="text-[#ffab00]"
                >
                  RockstarGames💛
                </a>{" "}
                fan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
