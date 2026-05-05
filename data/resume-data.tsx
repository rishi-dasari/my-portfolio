// data/resume-data.tsx
// NOTE: We are using placeholder values and skipping icons for now.

export const RESUME_DATA = {
  name: "Maharshi Dasari",
  initials: "MD",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco,+CA",
  about: "Data Wizard, Vibe Developer, Cloud & AI Enthusiast",
  summary: "Turning data into decisions → 25% better forecasts, 40% less manual work | Data Scientist | AI/ML & GenAI Engineer | Python, SQL, PySpark, LangChain, RAG | Forecasting, A/B Testing, ETL & BI",
  avatarUrl: "/profile-photo.jpg", // Create this file in the 'public' folder later
  // personalWebsiteUrl: "https://yourwebsite.com",
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
      company: "Forte Group",
      badges: ["Remote", "Full-time"],
      start: "2025",
      end: "Present"
    },
  ],
  skills: ["Python","SQL","PySpark","LangChain","RAG","React", "Next.js", "TypeScript", "Tailwind CSS"],
  projects: [
    {
      title: "SQL Codebase Git Migration",
      techStack: [
        "Work Project",
        "Python",
        "TSQL"
      ],
      description: "Led the migration of a 4,000-object SQL codebase from shared folders to Git with branching rules, PR reviews, and tagged releases, giving the team its first reliable rollback path in production.",
      logo: "LogoPlaceholder",
      link: {
        label: "SQL Codebase Git Migration",
        href: "https://github.com/rishi-dasari/SQL-Codebase-Git-Migration",
      },
    },
    {
      title: "Word Reveal",
      techStack: [
        "Side Project",
        "Javascript",
        "CSS",
        "HTML",
      ],
      description: "Built a Wordle-inspired game using JavaScript, HTML, and CSS, featuring dynamic word lists and responsive design for an engaging user experience across devices.",
      logo: "LogoPlaceholder",
      link: {
        label: "Word Reveal",
        href: "https://word-reveal-smoky.vercel.app/",
      },
    },
  ],
} as const;