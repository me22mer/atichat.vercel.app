"use client";

import Footer from "@/common/footer";
import Header from "@/common/header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const showHeader = !pathname.startsWith("/blog/") || pathname === "/blog";
  
  return (
    <section>
      {showHeader && <Header />}
      {children}
      {showHeader && <Footer />}
    </section>
  );
}
