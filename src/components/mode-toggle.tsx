"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ORDER = ["system", "light", "dark"] as const;
type Mode = (typeof ORDER)[number];

const ICONS: Record<Mode, typeof Monitor> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
};

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current: Mode =
    mounted && (ORDER as readonly string[]).includes(theme ?? "")
      ? (theme as Mode)
      : "system";
  const next: Mode = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  const Icon = ICONS[current];

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${current}. Click to switch to ${next}.`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex h-full w-full items-center justify-center"
        >
          <Icon className="h-full w-full" />
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
