import Link from "next/link";

type Props = {
    Href: string,
}

export default function Navigation({ Href }: Props) {
  return (
    <nav className="w-full flex fixed backdrop-blur duration-200 bg-zinc-900/0">
      <div className="py-6 px-10">
        <span>
          <Link href={Href}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="invert-[.45]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </Link>
        </span>
      </div>
    </nav>
  );
}
