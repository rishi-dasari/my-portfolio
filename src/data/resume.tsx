import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { SQL } from "@/components/ui/svgs/sql";
import { PySpark } from "@/components/ui/svgs/pyspark";
import { Pandas } from "@/components/ui/svgs/pandas";
import { ScikitLearn } from "@/components/ui/svgs/scikitLearn";
import { MachineLearning } from "@/components/ui/svgs/machineLearning";
import { RAG } from "@/components/ui/svgs/rag";
import { Jupyter } from "@/components/ui/svgs/jupyter";
import { Snowflake } from "@/components/ui/svgs/snowflake";
import { Databricks } from "@/components/ui/svgs/databricks";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { AWS } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { PowerBI } from "@/components/ui/svgs/powerbi";
import { Tableau } from "@/components/ui/svgs/tableau";
import { Excel } from "@/components/ui/svgs/excel";
import { Git } from "@/components/ui/svgs/git";
import { VSCode } from "@/components/ui/svgs/vscode";

export const DATA = {
  name: "Maharshi Dasari",
  initials: "MD",
  url: "https://rishidw.my",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco,+CA",
  description:
    "Data Wizard, Vibe Developer, Cloud & AI Enthusiast.",
  summary:
    "Turning data into decisions → 25% better forecasts, 40% less manual work. Data Scientist · AI/ML & GenAI Engineer working in Python, SQL, PySpark, LangChain, and RAG — across forecasting, A/B testing, ETL, and BI.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: SQL },
    { name: "PySpark", icon: PySpark },
    { name: "Pandas", icon: Pandas },
    { name: "Scikit-learn", icon: ScikitLearn },
    { name: "Machine Learning", icon: MachineLearning },
    { name: "RAG", icon: RAG },
    { name: "Jupyter", icon: Jupyter },
    { name: "Snowflake", icon: Snowflake },
    { name: "Databricks", icon: Databricks },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "AWS", icon: AWS },
    { name: "Azure", icon: Azure },
    { name: "Power BI", icon: PowerBI },
    { name: "Tableau", icon: Tableau },
    { name: "Excel", icon: Excel },
    { name: "Git", icon: Git },
    { name: "VS Code", icon: VSCode },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "maharshidasari5@gmail.com",
    tel: "+12037233473",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishi-dasari",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dmrishi",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:maharshidasari5@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Forte Group",
      href: "https://fortegroup.com",
      badges: ["Remote", "Full-time"],
      location: "Remote",
      logoUrl: "/logos/forte.jpeg",
      title: "",
      start: "2025",
      end: "Present",
      description: "",
    },
    {
      company: "Lewis University",
      href: "https://www.lewisu.edu/",
      badges: ["Remote", "Part-time"],
      location: "Chicago, IL",
      logoUrl: "/logos/lewis.jpeg",
      title: "",
      start: "2023",
      end: "2024",
      description: "",
    },
    {
      company: "Connate.ai",
      href: "https://connate.in/",
      badges: ["Inperson", "Full-time"],
      location: "Hyderabad, TN",
      logoUrl: "/logos/connate.jpeg",
      title: "",
      start: "2020",
      end: "2022",
      description: "",
    },
  ],
  education: [
    {
      school: "Lewis University",
      href: "https://www.lewisu.edu/",
      degree: "Master of Sciences in Business Analytics",
      logoUrl: "/logos/lewis.jpeg",
      start: "2023",
      end: "2024",
    },
    {
      school: "KLEF University",
      href: "https://www.kluniversity.in/",
      degree: "Bachelor of Technology, Computer Science Engineering",
      logoUrl: "/logos/klef.png",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "SQL Codebase Git Migration",
      href: "https://github.com/rishi-dasari/SQL-Codebase-Git-Migration",
      dates: "2024",
      active: true,
      description:"Led the migration of a 4,000-object SQL codebase from shared folders to Git with branching rules, PR reviews, and tagged releases — giving the team its first reliable rollback path in production.",
      technologies: ["Python", "T-SQL", "Git"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rishi-dasari/SQL-Codebase-Git-Migration",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/1/rishi-dasari/SQL-Codebase-Git-Migration",
      video: "",
    },
    {
      title: "Word Reveal",
      href: "https://word-reveal-kappa.vercel.app/",
      dates: "2023",
      active: true,
      description:"A Wordle-inspired game built with vanilla JavaScript, HTML, and CSS — dynamic word lists and responsive design for play across devices.",
      technologies: ["JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://word-reveal-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/wordreveal.png",
      video: "",
    },
  ],
    certifications: [
    {
      title: "SnowPro Associate",
      issuer: "Snowflake",
      dates: "Issued Mar 2026 · Mar 2028",
      description: "",
      image: "/certs/snowpro.png",
      links: [
        {
          title: "Verify",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://achieve.snowflake.com/e348e663-76f0-4411-a084-fa7e9e473852#acc.VwsNCz8E",
        },
      ],
    },
    {
      title: "Risk Job Simulation",
      issuer: "Forage / Goldman Sachs",
      dates: "Issued Mar 2026 · No Expiration Date",
      description: "",
      image: "/certs/GS.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certs/forage-risk.pdf",
        },
      ],
    },
    {
      title: "AI/BI for Data Analysts",
      issuer: "Databricks",
      dates: "Issued Jun 2025 · No Expiration Date",
      description: "",
      image: "/certs/databricks.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certs/db-aibi.pdf",
        },
      ],
    },
    {
      title: "Data Management and Governance with Unity Catalog",
      issuer: "Databricks",
      dates: "Issued Jun 2025 · No Expiration Date",
      description: "",
      image: "/certs/databricks.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certs/db-dm&g.pdf",
        },
      ],
    },
    {
      title: "SQL Analytics on Databricks",
      issuer: "Databricks",
      dates: "Issued Jun 2025 · No Expiration Date",
      description: "",
      image: "/certs/databricks.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/certs/db-sql.pdf",
        },
      ],
    },
    {
      title: "Customer Satisfaction Survey with Typeform",
      issuer: "Coursera",
      dates: "Issued Oct 2024 · No Expiration Date",
      description: "Project-based course covering fundamental customer satisfaction survey techniques.",
      image: "/certs/cour.png",
      links: [
        {
          title: "Verify",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/JRUYO2Q45M64",
        },
      ],
    },
    {
      title: "AWS Billing Alerts using AWS Budgets",
      issuer: "Coursera",
      dates: "Issued Oct 2024 · No Expiration Date",
      description: "Project-based course covering fundamental AWS billing concepts.",
      image: "/certs/cour.png",
      links: [
        {
          title: "Verify",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/1P5LJG9MGVAD",
        },
      ],
    },
    {
      title: "Introduction to Cost Accounting",
      issuer: "Coursera",
      dates: "Issued Sep 2024 · No Expiration Date",
      description: "Project-based course covering fundamental cost accounting concepts.",
      image: "/certs/cour.png",
      links: [
        {
          title: "Verify",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/FZDTCDKTMMAN",
        },
      ],
    },
  ],
} as const;
