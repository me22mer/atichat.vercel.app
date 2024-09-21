"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps extends MotionProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedSection({
  children,
  delay = 0,
  ...props
}: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      {...props}>
      {children}
    </motion.div>
  );
}
