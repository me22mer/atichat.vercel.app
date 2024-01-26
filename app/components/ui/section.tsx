"use client";


import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";


type Props = {
  children: ReactNode;
  className: string;
  delay: number;
};

export default function Section({ children, className, delay }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className={`${className}`}
      >
       {children}
      </m.div>
    </LazyMotion>
  );
}
