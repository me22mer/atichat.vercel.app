import AstroIcon from "@/components/icons/Astro-Icon";
import CSSIcon from "@/components/icons/Css-Icon";
import HTMLIcon from "@/components/icons/Html-Icon";
import JSIcon from "@/components/icons/JavaScript-Icon";
import NextjsIcon from "@/components/icons/Nextjs-Icon";
import ReactIcon from "@/components/icons/React-Icon";
import TailwindcssIcon from "@/components/icons/Tailwindcss-Icon";
import TSIcon from "@/components/icons/TS-Icon";

export default function Objective() {
  return (
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">Objective</h3>
      <p className="leading-9  text-[1rem] ">
        Seeking a challenging role to leverage expertise in creating
        user-interactive websites and contribute to innovative projects.
        experienced front-end developer proficient in <HTMLIcon />, <CSSIcon />,{" "}
        <JSIcon />, <TSIcon />, <ReactIcon />, <NextjsIcon />, <AstroIcon /> and{" "}
        <TailwindcssIcon />. Skilled in utilizing Amazon services like
        Cloudfront, S3, and EC2.
      </p>
    </div>
  );
}
