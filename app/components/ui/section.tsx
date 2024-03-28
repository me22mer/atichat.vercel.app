"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className={`${className}`}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
