import "../globals.css";

import { cn } from "@/lib/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ViewTransitions } from "next-view-transitions";

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
          `antialiased scrollbar-thin scrollbar-corner-black scrollbar-thumb-zinc-300 scrollbar-track-zinc-950 bg-zinc-950`,
          GeistSans.variable,
          GeistMono.variable
        )}>
        <body className="dark antialiased w-full flex flex-col justify-center">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
