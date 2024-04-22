import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

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
