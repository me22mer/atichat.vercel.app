import Link from "next/link";

export default function Badge({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="inline-flex items-center rounded p-1.5 text-xs font-semibold leading-4 text-white no-underline"
    >
      {children}
    </a>
  );
}
