import { Header } from "./components/header";
import Image from "next/image";


export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Astro",
  ];

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="m-6 w-[710px] ">
          <div>
            <div>
              <h1 className="mb-8 text-2xl font-semibold">
                Hi there, I&apos;m y3sterd4y 😊
              </h1>
              <p className="mb-8">
                I work as a front-end developer. I appreciate the pixelart style
                and am interested in game creation. I also enjoy playing video
                games🎮 and watching anime⚔️ and series.
              </p>
            </div>
            <div className="">
              <Image
                className="mb-8 rounded-md"
                src=""
                alt=""
                style={{ objectFit: "contain" }}
                loading="lazy"
                width={710}
                height={500}
                quality={90}
                placeholder="empty"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* <div>
              <h2 className="mb-2.5 text-xl font-semibold">Skill</h2>
              <ul className="flex gap-2">
                {skills.map((skill) => (
                  <li
                    className="p-2 bg-zinc-200 rounded-md text-black font-medium"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
