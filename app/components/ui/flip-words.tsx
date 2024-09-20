"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const FlipWords = ({
  words,
  gradients,
  duration = 3000,
  className,
}: {
  words: string[];
  gradients: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    setIsAnimating(true);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  const currentWord = words[currentIndex];
  const currentGradient = gradients[currentIndex % gradients.length];

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
      initial={false}>
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)", position: "absolute" }}
        transition={{ duration: 0.4 }}
        className={cn(
          "z-10 inline-block relative",
          "bg-clip-text text-transparent",
          currentGradient,
          className
        )}>
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};
