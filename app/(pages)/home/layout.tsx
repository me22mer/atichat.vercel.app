import type { Metadata } from "next";
import Header from "@/common/header";
import Footer from "@/common/footer";

export const metadata: Metadata = {
  title: {
    default: "Atichat Thongnak",
    template: "%s | Atichat Thongnak",
  },
  description: "Mess Developer, student and gamer",
  openGraph: {
    title: "Atichat Thongnak",
    description: "Mess Developer, student and gamer",
    url: "https://atichat.vercel.app/",
    siteName: "Atichat Thongnak",
    locale: "en_US, th_TH",
    type: "website",
    images: [
      {
        url: "https://atichat.vercel.app/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Atichat Thongnak",
    card: "summary_large_image",
  },
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
