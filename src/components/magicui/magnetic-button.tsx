"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  }

  const base =
    "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-border bg-background hover:bg-muted text-foreground";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {children}
    </motion.a>
  );
}
