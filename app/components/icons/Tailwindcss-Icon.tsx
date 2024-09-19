import Badge from "../ui/badge";
import { siTailwindcss } from "simple-icons";

type Props = {
  IconClass?: string;
};

export default function TailwindcssIcon({ IconClass }: Props) {
  return (
    <Badge href="https://tailwindcss.com/">
      <svg
        width={16}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={` ${IconClass} mr-1 fill-[#06B6D4]`}>
        <title>Tailwind CSS</title>
        <path d={siTailwindcss.path} />
      </svg>
      Tailwind CSS
    </Badge>
  );
}
