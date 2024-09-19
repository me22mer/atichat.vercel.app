"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    setIsAnimating(true);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer); // Clear timeout on unmount or re-render
    }
  }, [isAnimating, duration, startAnimation]);

  const currentWord = words[currentIndex];

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
      initial={false} // Optimize initial render by skipping initial animation
    >
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)", position: "absolute" }}
        transition={{ duration: 0.4 }}
        className={cn(
          "z-10 inline-block relative",
          "bg-clip-text text-transparent bg-gradient-to-r from-[#1dbde6] via-[#FF44EC] to-[#f1515e]",
          className
        )}>
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};
