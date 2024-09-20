import "./globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    <ViewTransitions>
      <html
        lang="en"
        className={cn(
          `antialiased scrollbar-thin scrollbar-corner-black scrollbar-thumb-zinc-300 scrollbar-track-zinc-950 `,
          GeistSans.variable,
          GeistMono.variable
        )}>
        <body className="dark antialiased w-full flex flex-col justify-center">
          <SpeedInsights />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
