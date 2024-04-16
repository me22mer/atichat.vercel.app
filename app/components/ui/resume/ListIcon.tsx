import HTMLIcon from "@/icons/Html-Icon";
import CSSIcon from "@/icons/Css-Icon";
import TSIcon from "@/icons/TS-Icon";
import GitIcon from "@/icons/Git-Icon";
import NextjsIcon from "@/icons/Nextjs-Icon";
import ReactIcon from "@/icons/React-Icon";
import TailwindcssIcon from "@/components/icons/Tailwindcss-Icon";
import AstroIcon from "@/components/icons/Astro-Icon";

const icons = {
  HTML: <HTMLIcon IconClass=" fill-white" />,
  CSS: <CSSIcon IconClass=" fill-white" />,
  TS: <TSIcon IconClass=" fill-white" />,
  Git: <GitIcon IconClass=" fill-white" />,
  Nextjs: <NextjsIcon IconClass=" fill-white" />,
  React: <ReactIcon IconClass=" fill-white" />,
  Astro: <AstroIcon IconClass=" fill-white" />,
  Tailwind: <TailwindcssIcon IconClass=" fill-white" />,
};

export default function ListIcon() {
  return (
    <>
      {Object.keys(icons).map((Icon, index) => (
        <span key={index} className="hover:scale-105 duration-500 ">
          {icons[Icon]}
        </span>
      ))}
    </>
  );
}
