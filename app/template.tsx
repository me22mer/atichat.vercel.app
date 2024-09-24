"use client";

import Footer from "@/common/footer";
import Header from "@/common/header";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const showHeader =
    !(pathname.startsWith("/projects/") && pathname !== "/projects") &&
    !(pathname.startsWith("/blog/") && pathname !== "/blog") &&
    !pathname.startsWith("/coming-soon");

  return (
    <div className="z-10">
      {showHeader && <Header />}
      {children}
      {showHeader && <Footer />}
    </div>
  );
}
