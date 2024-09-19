import Badge from "../ui/badge";
import { siReact } from "simple-icons";

type Props = {
  IconClass?: string;
};

export default function ReactIcon({ IconClass }: Props) {
  return (
    <Badge href="https://react.dev/">
      <svg
        width={16}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${IconClass} mr-1 fill-[#61DAFB]`}
      >
        <title>React</title>
        <path d={siReact.path} />
      </svg>
    React
    </Badge>
  );
}
