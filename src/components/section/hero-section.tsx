"use client";

import MagneticButton from "@/components/magicui/magnetic-button";
import RotatingWord from "@/components/magicui/rotating-word";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type MouseEvent } from "react";

const ROTATING_WORDS = [
  "Data Wizard",
  "Vibe Developer",
  "Cloud Enthusiast",
  "AI Tinkerer",
] as const;

const FIRST_NAME = DATA.name.split(" ")[0];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <div className="relative">
      <GradientBlob />
      <div className="mx-auto w-full max-w-2xl space-y-8 relative">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="gap-2 flex flex-col order-2 md:order-1 max-w-[600px]"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
            >
              Hi, I&apos;m {FIRST_NAME}
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold"
            >
              A <RotatingWord words={ROTATING_WORDS} />.
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              <MagneticButton href="#contact" variant="primary">
                Get in touch
                <ArrowRight className="size-4" />
              </MagneticButton>
              <MagneticButton href="#projects" variant="outline">
                View Projects
                <ArrowUpRight className="size-4" />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <ParallaxAvatar />
        </div>
      </div>
    </div>
  );
}

export function ScrollHint() {
  const reduceMotion = useReducedMotion();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("about");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#about");
  }

  return (
    <motion.a
      href="#about"
      onClick={handleClick}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 0.75, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ opacity: 1 }}
      className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Scroll to learn more"
    >
      <span>Scroll</span>
      <motion.span
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ChevronDown className="size-4" />
      </motion.span>
    </motion.a>
  );
}

function ParallaxAvatar() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  const rotateX = useTransform(springY, [-40, 40], [8, -8]);
  const rotateY = useTransform(springX, [-40, 40], [-8, 8]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="order-1 md:order-2 self-center"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Avatar className="size-44 md:size-72 border rounded-full shadow-lg ring-4 ring-muted">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </motion.div>
    </motion.div>
  );
}


function GradientBlob() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="pointer-events-none absolute -top-24 -left-10 -right-10 h-[320px] -z-10"
    >
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="size-full rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 40%, var(--color-chart-1), transparent 60%)",
          opacity: 0.22,
        }}
      />
    </motion.div>
  );
}
