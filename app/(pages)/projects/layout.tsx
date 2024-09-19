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
  const showHeader = !pathname.startsWith("/projects/") || pathname === "/projects";

  return (
    <section>
      {showHeader && <Header />}
      {children}
      {showHeader && <Footer />}
    </section>
  );
}
