// data/resume-data.tsx
// NOTE: We are using placeholder values and skipping icons for now.

export const RESUME_DATA = {
  name: "Your Name Here",
  initials: "YN",
  location: "Your City, State",
  locationLink: "https://www.google.com/maps/place/Your+City",
  about: "Full Stack Developer focused on building high-performance, accessible web applications.",
  summary: "A passionate engineer with X years of experience, specializing in Next.js, React, and TypeScript.",
  avatarUrl: "/profile-photo.jpg", // Create this file in the 'public' folder later
  personalWebsiteUrl: "https://yourwebsite.com",
  contact: {
    email: "youremail@domain.com",
    tel: "+1234567890",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rishi-dasari",
        icon: "Github", // We will use this string to map to the Lucide icon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dmrishi",
        icon: "Linkedin",
      },
    ],
  },
  education: [
    {
      school: "Lewis University",
      degree: "Master of Sciences in Business Analytics",
      start: "2023",
      end: "2024",
    },
    {
      school: "KLEF University",
      degree: "Bachelors of Technology in Computer Science Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Acme Corp",
      link: "https://acmecorp.com",
      badges: ["Remote", "Full-time"],
      title: "Senior Software Engineer",
      start: "2022",
      end: "Present",
      description: "Designed and built the next-gen client dashboard using Next.js and implemented performance monitoring.",
    },
  ],
  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  projects: [
    {
      title: "Project Alpha",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "PostgreSQL"
      ],
      description: "A full-stack application for managing personal finances with real-time analytics.",
      logo: "LogoPlaceholder", // You can use a URL here later
      link: {
        label: "projectalpha.com",
        href: "https://projectalpha.com/",
      },
    },
    {
      title: "Project Beta",
      techStack: [
        "Work Project",
        "React",
        "Redux",
        "Java",
      ],
      description: "Implemented a custom component library that reduced build times by 20%.",
      logo: "LogoPlaceholder",
      link: {
        label: "clientbeta.com",
        href: "https://clientbeta.com/",
      },
    },
  ],
} as const;