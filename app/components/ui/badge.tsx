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
      className="inline-flex mx-0.5 px-2 py-1.5 align-middle items-center rounded border border-zinc-700 bg-gradient-to-br from-zinc-700 via-zinc-950 to-zinc-700 text-xs leading-4 text-white no-underline"
    >
      {children}
    </a>
  );
}
