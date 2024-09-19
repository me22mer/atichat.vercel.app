import { siLinkedin } from "simple-icons";

type Props = {
  IconClass?: string;
};

export default function LinkedInIcon({ IconClass }: Props) {
  return (
    <a
      href="https://www.linkedin.com/in/atichat-thongnak-b1334122a/"
      target="_blank"
      aria-label="linkedin">
      <svg
        width={26}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${IconClass}`}>
        <title>LinkedIn</title>
        <path d={siLinkedin.path} />
      </svg>
    </a>
  );
}
