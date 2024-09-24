"use client";

import React, { useState, useEffect } from "react";
import { notFound, useSearchParams } from "next/navigation";
import AnimatedSection from "@/ui/animated-section";
import { Button } from "@/ui/button";
import { ArrowUpRight, LoaderIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("@/ui/countdown-timer"), {
  ssr: false,
});

export default function ComingSoonPage() {
  const searchParams = useSearchParams();
  const publishedAt = searchParams.get("date");

  if (!publishedAt) return notFound();

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl font-bold mb-4 text-zinc-950">Coming Soon</h1>
          {publishedAt && <CountdownTimer publishedAt={publishedAt} />}
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
