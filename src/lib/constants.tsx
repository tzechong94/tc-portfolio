export interface Job {
  id: number;
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  projectName: string;
  projectDescription: string;
  imageSource: string;
  skills: string[];
  link?: string;
  featured?: boolean;
  year?: string;
}

export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Swift", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "SwiftUI",
      "Redux",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "Java Spring Boot",
      "Prisma ORM",
      "Drizzle ORM",
      "REST APIs",
    ],
  },
  {
    label: "Data & Infra",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "DynamoDB",
      "NeonDB",
      "Pinecone",
      "AWS Lambda",
      "AWS S3",
    ],
  },
  {
    label: "AI",
    items: [
      "OpenAI",
      "Anthropic Claude",
      "Replicate",
      "Deepgram",
      "RAG",
      "Vector Search",
    ],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "BitBucket", "Clerk", "Stripe", "Vercel", "Docker"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 10,
    projectName: "HelloCher",
    projectDescription:
      "AI tutor for A-level General Paper. Students draft essays and get instant feedback, model answers, and exam-style tips, with subscription billing baked in. Traction: ~1,000 unique visitors in launch month from a single Reddit post; now ~200 organic visitors a month with 3 paying users.",
    imageSource: "/hellocher.png",
    skills: [
      "Next.js",
      "TypeScript",
      "Anthropic Claude",
      "OpenAI",
      "Clerk",
      "Stripe",
      "Prisma",
    ],
    link: "https://www.hellocher.com",
    featured: true,
    year: "2026",
  },
  {
    id: 11,
    projectName: "HotSource",
    projectDescription:
      "AI-assisted sourcing for custom furniture and cabinetry, straight from the factory. Describe a piece and skip weeks of Mandarin back-and-forth and the middleman markup, with humans in the loop for inspection. Traction: ~S$6.5k GMV so far, with ~S$30k GMV in warm leads.",
    imageSource: "/hotsource.png",
    skills: [
      "Next.js",
      "TypeScript",
      "Anthropic Claude",
      "Supabase",
      "Prisma",
      "Clerk",
    ],
    link: "https://tryhotsource.vercel.app",
    featured: true,
    year: "2026",
  },
  {
    id: 12,
    projectName: "Carousel Generator",
    projectDescription:
      "Browser-only Instagram carousel designer. Paste structured JSON, pick a palette and layout, and export feed-ready PNGs. No backend, nothing leaves your browser.",
    imageSource: "/carousel.png",
    skills: ["Next.js", "React", "TypeScript", "JSZip"],
    link: "https://carousel-generator-peach.vercel.app/",
    featured: true,
    year: "2026",
  },
  {
    id: 19,
    projectName: "Nimbus",
    projectDescription:
      "A personal software compiler for macOS. Press a hotkey, describe what you want, and Nimbus generates it as a live floating panel or full app, reading on-screen context from any app via the macOS Accessibility API. Streaming generation, SQLite persistence, and version history built in.",
    imageSource: "/nimbus.png",
    skills: [
      "Python",
      "FastAPI",
      "Anthropic Claude",
      "Electron",
      "SQLite",
      "macOS Accessibility",
    ],
    link: "https://youtu.be/8Og84b0fTm8",
    featured: true,
    year: "2026",
  },
  {
    id: 20,
    projectName: "Qapture",
    projectDescription:
      "Autonomous AI QA agent that drives a real browser to test web apps end to end. Describe a flow in plain English and it navigates, clicks, and reports what passed or failed. Built solo for the Synapxe Innovation Challenge.",
    imageSource: "/qapture.svg",
    skills: [
      "Python",
      "FastAPI",
      "LangChain",
      "browser-use",
      "OpenAI",
      "Next.js",
    ],
    link: "https://youtu.be/G1QyKhJ7qZY",
    featured: true,
    year: "2025",
  },
  {
    id: 13,
    projectName: "Gavid Doggins",
    projectDescription:
      "A Telegram bot with David Goggins' personality. Set your wake and sleep hours and it fires motivational messages on your schedule to keep you accountable and stay hard.",
    imageSource: "/doggins.svg",
    skills: ["Node.js", "Express", "Telegram Bot API", "SQLite", "node-cron"],
    link: "https://t.me/dogginsbot",
    featured: true,
    year: "2025",
  },
  {
    id: 14,
    projectName: "Journi",
    projectDescription:
      "Conversational AI travel-insurance agent. Buy cover by talking, not filling forms. Built for the MSIG × Ancileo hackathon with Claude, Deepgram voice, and DynamoDB.",
    imageSource: "/journi.svg",
    skills: [
      "Next.js",
      "TypeScript",
      "Anthropic Claude",
      "Deepgram",
      "AWS DynamoDB",
      "Prisma",
      "Stripe",
    ],
    featured: true,
    year: "2025",
  },
  {
    id: 15,
    projectName: "BuildCheck",
    projectDescription:
      "AI-powered construction quality control. Log site defects, auto-classify issues, and track resolution from punch list to sign-off. Built for the IMDA Open Innovation Challenge.",
    imageSource: "/buildcheck.svg",
    skills: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Prisma", "Postgres"],
    link: "https://youtu.be/Zt58Bc4JTpo",
    featured: true,
    year: "2025",
  },
  {
    id: 16,
    projectName: "Roomix",
    projectDescription:
      "AI home-staging app. Upload a room and get redesigned, photoreal interior inspiration in seconds, powered by OpenAI and Replicate image models.",
    imageSource: "/roomix.svg",
    skills: ["Next.js", "TypeScript", "OpenAI", "Replicate"],
    featured: true,
    year: "2025",
  },
  {
    id: 18,
    projectName: "TagTeam",
    projectDescription:
      "Family task and medication manager: assign chores, track meds, and keep the whole household in sync. Built for Open Government Products (OGP)'s community hackathon.",
    imageSource: "/tagteam.png",
    skills: ["Next.js", "TypeScript", "Clerk", "Prisma", "AWS S3"],
    link: "https://tagteam-hackathon.vercel.app",
    featured: true,
    year: "2025",
  },
  {
    id: 0,
    projectName: "Aideation",
    projectDescription:
      "AI-powered note-taking app with a rich editor, automatic thumbnail generation via DALL·E, and AI autocomplete that picks up where you stop typing.",
    imageSource: "/aideation.png",
    skills: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "DALL·E",
      "Drizzle ORM",
      "NeonDB",
      "Postgres",
      "Firebase",
    ],
    link: "https://aideation-chi.vercel.app/",
    featured: true,
    year: "2024",
  },
  {
    id: 1,
    projectName: "AskDoc",
    projectDescription:
      "Personal health copilot. Upload medical documents, ask questions about your symptoms, and chat with an AI grounded in your records via RAG.",
    imageSource: "/askdoc.png",
    skills: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Pinecone",
      "NeonDB",
      "AWS S3",
    ],
    link: "https://askdoc-healthhack.vercel.app/",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    projectName: "Stowee",
    projectDescription:
      "A bedtime-story generator built for my nephew. Feed it an age, a name, and a moral, and get back a story you can actually read aloud.",
    imageSource: "/stowee.png",
    skills: ["Next.js", "React", "TypeScript", "OpenAI"],
    link: "https://stowee.vercel.app/",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    projectName: "Ultra",
    projectDescription:
      "Personal project tracker. Create projects, log updates, watch momentum over time. Originally Angular + Spring Boot, rebuilt on MERN.",
    imageSource: "/ultra.png",
    skills: ["React", "Express", "Node.js", "MongoDB"],
    link: "https://tryultra.vercel.app/",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    projectName: "Simple Calculator",
    projectDescription: "A tiny React calculator from the FreeCodeCamp days.",
    imageSource: "/calculator.png",
    skills: ["React", "JavaScript"],
    link: "https://tzechong94.github.io/basic-calculator/",
    year: "2022",
  },
  {
    id: 5,
    projectName: "Drum Machine",
    projectDescription:
      "Tap or hit a key, make a beat. Part of FreeCodeCamp's curriculum.",
    imageSource: "/drum.png",
    skills: ["React", "JavaScript"],
    link: "https://tzechong94.github.io/drum-machine/",
    year: "2022",
  },
  {
    id: 6,
    projectName: "Random Quote Machine",
    projectDescription:
      "A click of inspiration. Part of FreeCodeCamp's curriculum.",
    imageSource: "/quote.png",
    skills: ["React", "JavaScript"],
    link: "https://tzechong94.github.io/random-quote-machine/",
    year: "2022",
  },
  {
    id: 7,
    projectName: "Markdown Previewer",
    projectDescription:
      "Type markdown on the left, see HTML on the right. FreeCodeCamp.",
    imageSource: "/markdown.png",
    skills: ["React", "JavaScript"],
    link: "https://tzechong94.github.io/markdown-previewer/",
    year: "2022",
  },
  {
    id: 8,
    projectName: "GDP Viewer",
    projectDescription: "A D3 bar chart of US GDP over time.",
    imageSource: "/gdp.png",
    skills: ["React", "D3", "JavaScript"],
    link: "https://tzechong94.github.io/bar-chart/",
    year: "2022",
  },
  {
    id: 9,
    projectName: "Pomodoro Clock",
    projectDescription: "Stay productive 25 minutes at a time.",
    imageSource: "/pomodoro.png",
    skills: ["React", "JavaScript"],
    link: "https://tzechong94.github.io/pomodoro-clock/",
    year: "2022",
  },
];

export const JOBS: Job[] = [
  {
    id: 0,
    date: "Jan 2025 - Present",
    role: "Senior Software Developer",
    company: "Synapxe",
    companyUrl: "https://www.synapxe.sg/",
    description:
      "Building HealthHub Plus, the consolidation of Singapore's public healthcare cluster apps into one national health app. Work across the appointments, medication refill, pharmacy queue, and AutoPay modules, serving millions of residents.",
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Tailwind CSS",
      ".NET",
      "SQL",
      "AWS Lambda",
    ],
  },
  {
    id: 1,
    date: "Jun 2023 - Apr 2024",
    role: "Software Developer",
    company: "DBS Bank",
    companyUrl: "https://www.dbs.com/",
    description:
      "Built and maintained internal full-stack tools. Led frontend on responsive, accessible web apps and partnered closely with backend on API design and feature integration.",
    skills: ["React", "TypeScript", "JavaScript", "Java", "Spring Boot", "Git"],
  },
  {
    id: 2,
    date: "Dec 2022 - May 2023",
    role: "Trainee, Full-Stack Development",
    company: "IBF · TFIP",
    description:
      "Industry-funded full-stack programme at NUS-ISS, followed by attachment in a financial institution. Shipped Angular + Spring Boot apps backed by MySQL, Mongo, and Redis.",
    skills: [
      "Angular",
      "TypeScript",
      "Java Spring Boot",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: 3,
    date: "Jul 2021 - Apr 2022",
    role: "Product Manager",
    company: "Biobot Surgical",
    description:
      "Drove logistics, marketing, training, and technical support for the US launch of the iSR'obot Mona Lisa 2.0, a robotic MRI-Ultrasound fusion platform for prostate biopsy and focal therapy.",
    skills: ["Product Management", "GTM", "Clinical Ops"],
  },
  {
    id: 4,
    date: "2020 - 2022",
    role: "Co-founder",
    company: "Studemy · Codemap",
    description:
      "Partnered with IHLs to deliver data science and software engineering courses to adult learners. Launched the first cohort of a full-stack coding bootcamp in the Philippines.",
    skills: ["Sales", "BizDev", "Curriculum"],
  },
];

export const SOCIALS = {
  github: "https://github.com/tzechong94",
  linkedin: "https://www.linkedin.com/in/tze-chong-chua-915869118/",
  email: "mailto:tze.chong1994@gmail.com",
} as const;
