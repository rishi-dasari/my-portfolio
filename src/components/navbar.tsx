"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { useActiveSection } from "@/lib/use-active-section";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

const SECTION_IDS = DATA.sections.map((s) => s.id);

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? SECTION_IDS : []);

  function scrollToSection(e: MouseEvent<HTMLAnchorElement>, id: string) {
    if (!isHome) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 px-2">
      <div
        className={[
          "mx-auto pointer-events-auto",
          "max-w-[calc(100vw-1rem)] overflow-x-auto md:overflow-visible md:max-w-fit",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        <Dock className="z-50 relative h-14 p-2 flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
          {DATA.sections.map((section) => {
            const isActive = isHome && active === section.id;
            const href = isHome ? `#${section.id}` : `/#${section.id}`;
            const Icon = section.icon;
            return (
              <Tooltip key={section.id}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, section.id)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <DockIcon className="relative rounded-3xl cursor-pointer size-full p-0 text-muted-foreground hover:text-foreground border border-border transition-colors bg-background hover:bg-muted">
                      {isActive && (
                        <motion.div
                          layoutId="dock-active"
                          className="absolute inset-0 rounded-3xl bg-foreground/10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon
                        className={`relative size-full rounded-sm overflow-hidden object-contain ${
                          isActive ? "text-foreground" : ""
                        }`}
                      />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{section.label}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}

          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

          {DATA.navbar
            .filter((item) => item.label !== "Home")
            .map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                        <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                      </DockIcon>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <p>{item.label}</p>
                    <TooltipArrow className="fill-primary" />
                  </TooltipContent>
                </Tooltip>
              );
            })}

          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social], index) => {
              const isExternal = social.url.startsWith("http");
              const IconComponent = social.icon;
              return (
                <Tooltip key={`social-${name}-${index}`}>
                  <TooltipTrigger asChild>
                    <a
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                        <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                      </DockIcon>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <p>{name}</p>
                    <TooltipArrow className="fill-primary" />
                  </TooltipContent>
                </Tooltip>
              );
            })}

          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

          <Tooltip>
            <TooltipTrigger asChild>
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <ModeToggle className="size-full cursor-pointer" />
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>Theme</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        </Dock>
      </div>
    </div>
  );
}
