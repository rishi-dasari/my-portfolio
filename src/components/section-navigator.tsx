"use client";

import { DATA } from "@/data/resume";
import { useActiveSection } from "@/lib/use-active-section";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const SECTION_IDS: string[] = DATA.sections.map((s) => s.id);

function scrollTo(id: string | null) {
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function SectionNavigator() {
  const active = useActiveSection(SECTION_IDS);

  if (!active) return null;

  const idx = SECTION_IDS.indexOf(active);
  const prev = idx > 0 ? SECTION_IDS[idx - 1] : null;
  const next = idx < SECTION_IDS.length - 1 ? SECTION_IDS[idx + 1] : null;
  const visible = active !== "hero";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="section-nav"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
          aria-label="Section navigator"
        >
          <button
            type="button"
            onClick={() => scrollTo(prev)}
            disabled={!prev}
            aria-label="Previous section"
            className="size-12 rounded-full border border-border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronUp className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo(next)}
            disabled={!next}
            aria-label="Next section"
            className="size-12 rounded-full border border-border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronDown className="size-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
