"use client"

import React, { Suspense } from "react";
import { notFound, useSearchParams } from "next/navigation";
import AnimatedSection from "@/ui/animated-section";
import { Button } from "@/ui/button";
import { ArrowUpRight, LoaderIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import CountdownTimer from "@/ui/countdown-timer";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl font-bold mb-4 text-zinc-950">Coming Soon</h1>
          <p className="text-lg text-zinc-500 mb-8">
            This project is not yet available.
          </p>
          <Suspense fallback={<LoaderIcon className="animate-spin text-primary-foreground" />}>
            <SearchParamsBoundary />
          </Suspense>
          <Button asChild variant="outline">
            <Link href="/projects" className="flex items-center">
              Back to Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}

function SearchParamsBoundary() {
  const searchParams = useSearchParams();
  const publishedAt = searchParams.get("date");

  if (!publishedAt) return notFound();

  return (
    <Suspense fallback={<LoaderIcon className="animate-spin text-primary-foreground" />}>
      <CountdownTimer publishedAt={publishedAt} />
    </Suspense>
  );
}