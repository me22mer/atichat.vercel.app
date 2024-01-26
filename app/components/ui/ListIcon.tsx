import HTMLIcon from "../icons/Html-Icon";
import CSSIcon from "../icons/Css-Icon";
import TSIcon from "../icons/TS-Icon";

const icons = [HTMLIcon, CSSIcon, TSIcon];
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
