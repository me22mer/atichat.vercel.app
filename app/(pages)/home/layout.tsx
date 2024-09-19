import type { Metadata } from "next";
import Header from "@/common/header";
import Footer from "@/common/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Mess Developer, student and gamer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
