/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import HeroSection, { ScrollHint } from "@/components/section/hero-section";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import CertificationsSection from "@/components/section/certifications-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import SectionNavigator from "@/components/section-navigator";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col relative">
      <section id="hero" className="relative min-h-dvh flex flex-col justify-center">
        <HeroSection />
        <ScrollHint />
      </section>
      <section id="about" className="min-h-dvh flex flex-col justify-center">
        <div className="flex min-h-0 flex-col gap-y-12">
          {/* About */}
          <div className="flex flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold tracking-tight">About</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-y-5">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Experience
              </h3>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-y-5">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Education
              </h3>
            </BlurFade>

            <div className="flex flex-col gap-6">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-x-3 group"
                  >
                    <div className="flex flex-1 min-w-0 items-center gap-x-3">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-white"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none bg-white" />
                      )}

                      <div className="flex flex-1 min-w-0 flex-col gap-0.5">
                        <div className="flex items-center gap-2 font-semibold leading-none">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                            aria-hidden
                          />
                        </div>

                        <div className="text-sm font-sans text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-none items-center gap-1 text-xs tabular-nums text-muted-foreground text-right">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="min-h-dvh flex flex-col justify-center">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && (
                    <span className="size-5 flex items-center justify-center rounded-full bg-white p-0.5 ring-1 ring-border">
                      <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                    </span>
                  )}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-dvh flex flex-col justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="certifications" className="min-h-dvh flex flex-col justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <CertificationsSection />
        </BlurFade>
      </section>
      <section id="contact" className="min-h-dvh flex flex-col justify-center">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
      <SectionNavigator />
    </main>
  );
}
