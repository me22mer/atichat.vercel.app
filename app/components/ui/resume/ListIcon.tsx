import HTMLIcon from "../../icons/Html-Icon";
import CSSIcon from "../../icons/Css-Icon";
import TSIcon from "../../icons/TS-Icon";
import GitIcon from "../../icons/Git-Icon";
import NextjsIcon from "../../icons/Nextjs-Icon";
import ReactIcon from "../../icons/React-Icon";

const icons = [HTMLIcon, CSSIcon, TSIcon, GitIcon, NextjsIcon, ReactIcon];
export default function ListIcon() {
  return (
    <>
      {icons.map((Icon, index) => (
        <span key={index} className="p-2.5 bg-white rounded hover:scale-105 duration-300">
          <Icon />
        </span>
      ))}
    </>
  );
}
