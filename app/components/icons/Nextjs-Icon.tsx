import { siNextdotjs } from "simple-icons";
import Badge from "../ui/badge";

type Props = {
  IconClass?: string;
};

export default function NextjsIcon({ IconClass }: Props) {
  return (
    <Badge href="https://nextjs.org/">
      <svg
        width={16}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${IconClass} mr-1 fill-white`}
      >
        <title>Next.js</title>
        <path d={siNextdotjs.path} />
      </svg>
      Nextjs
    </Badge>
  );
}
