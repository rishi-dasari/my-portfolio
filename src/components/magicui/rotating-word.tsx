"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
}

export default function RotatingWord({
  words,
  intervalMs = 2400,
  className,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  const word = words[index];

  return (
    <span
      className={`relative inline-flex align-baseline overflow-hidden ${className ?? ""}`}
      style={{ verticalAlign: "baseline" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          layout
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: "0.5em", filter: "blur(6px)" }
          }
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: "-0.5em", filter: "blur(6px)" }
          }
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block whitespace-nowrap"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
