import React from "react";

export default function AnimatedName({
  words,
  className,
  delayMultiplier,
}: {
  words: string[];
  className?: string,
  delayMultiplier: number;
}) {
  const createAnimatedText = (text: string, delayMultiplier: number) =>
    text.split("").map((letter, index) => (
      <span
        key={index}
        className={className}
        style={{ transitionDelay: `${index * delayMultiplier}ms` }}>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

  const [firstWord, secondWord] = words;

  return (
    <span aria-hidden="true" className="block overflow-hidden group relative">
      <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
        {createAnimatedText(`${firstWord}`, delayMultiplier)}
      </span>
      <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
        {createAnimatedText(`${secondWord}`, delayMultiplier)}
      </span>
    </span>
  );
}
