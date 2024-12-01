"use client"

import { Button } from "@/ui/button";
import { useTransitionRouter } from "next-view-transitions";

export default function NotFound() {
  const router = useTransitionRouter();
  return (
    <div className="flex min-h-screen w-screen absolute top-0 flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 z-50">
      <div className="mx-auto max-w-md text-center">
        <FrownIcon className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t seem to exist.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => router.push("/")}
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}

function FrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
