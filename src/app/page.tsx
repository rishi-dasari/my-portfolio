// src/app/page.tsx
import { RESUME_DATA } from "../../data/resume-data";
import { GlobeIcon, MailIcon, Github, Linkedin, Phone  } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResumeCard } from "@/components/resume-card";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ICON_MAP = {
  Github: Github,
  Linkedin: Linkedin,
  Phone: Phone,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        
        {/* === 1. HEADER SECTION === */}
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            
            {/* Location Link */}
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            
            {/* Contact Buttons */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button variant="ghost" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => {
                const Icon = ICON_MAP[social.icon as keyof typeof ICON_MAP];

                return (
                  <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Avatar Image */}
          <div className="avatar rounded-xl overflow-hidden border">
            <img 
              alt={RESUME_DATA.name} 
              src={RESUME_DATA.avatarUrl} 
              className="h-28 w-28 object-cover" 
            />
          </div>
        </div>

        {/* === 2. WORK EXPERIENCE SECTION === */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Experience</h2>
          {RESUME_DATA.work.map((work, index) => (
            <ResumeCard
              key={index}
              company={work.company}
              title={work.title}
              description={work.description}
              badges={work.badges}
              start={work.start}
              end={work.end}
              link={work.link}
            />
          ))}
        </section>

        {/* === 3. EDUCATION SECTION === */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education, index) => (
            <ResumeCard
              key={index}
              title={education.school}
              description={education.degree}
              badges={[]}
              start={education.start}
              end={education.end}
            />
          ))}
        </section>
        
        {/* === 4. SKILLS SECTION === */}
        <section className="space-y-3 print:hidden">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </section>
        
        {/* === 5. PROJECTS SECTION (BENTO GRID) === */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project, index) => (
              <Card className="flex flex-col overflow-hidden border" key={index}>
                <CardHeader>
                  <div className="space-y-1">
                    {/* Project Title and Link */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold leading-none">
                            <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                            </a>
                        </h3>
                        {/* External Link Icon (optional, could add Lucide icon here) */}
                    </div>
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.map((stack) => (
                      <Badge key={stack} variant="secondary">
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                {/* Project Description */}
                <CardContent className="mt-auto text-xs text-muted-foreground">
                    {project.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}