import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { url } from "inspector";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Atichat Thongnak",
    template: "%s | Atichat Thongnak",
  },
  description: "Mess Developer, student and gamer",
  metadataBase: new URL("https://atichat.vercel.app/"),
  openGraph: {
    title: "Atichat Thongank",
    description: "Mess Developer, student and gamer",
    url: "https://atichat.vercel.app/",
    siteName: "Atichat Thongank",
    locale: "en_US, th_TH",
    type: "website",
    images: [{
      url: "https://localhost:3000/og",
      width: 1200,
      height: 630
    }]
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${inter.className} antialiased scrollbar-thin scrollbar-corner-black scrollbar-thumb-zinc-300 scrollbar-track-zinc-950`}
      >
        <body className=" antialiased w-full flex flex-col justify-center">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
