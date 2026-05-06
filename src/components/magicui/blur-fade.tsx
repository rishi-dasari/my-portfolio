"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  yOffset = 8,
  inView = true,
  inViewMargin = "-80px",
  blur = "6px",
}: BlurFadeProps) => {
  const reduceMotion = useReducedMotion();

  const defaultVariants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: reduceMotion
      ? { opacity: 1 }
      : { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  if (!inView) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: inViewMargin as any }}
      variants={combinedVariants}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
