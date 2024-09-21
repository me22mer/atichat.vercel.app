"use client";

import { Button } from "@/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";

export default function Navigation() {
  const router = useTransitionRouter()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </nav>
  );
}
