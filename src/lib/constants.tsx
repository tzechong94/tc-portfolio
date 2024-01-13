export interface Job {
  date: string;
  role: string;
  description: string;
  company: string;
  skills: string[];
}

export interface Project {
  projectName: string;
  projectDescription: string;
  imageSource: string;
  skills: string[];
}

export interface Jobs {
  jobs: Job[];
}

export const PROJECTS = [
  {
    id: 1,
    projectName: "Ultra",
    projectDescription: "Ultra project adfadsf",
    imageSource: "asdf",
    skills: ["React", "Javascript", "Express", "NodeJS", "MongoDB"],
  },
  {
    id: 2,
    projectName: "Stowee",
    projectDescription: "Bedtime Story Generator",
    imageSource: "asdf",
    skills: ["React", "NextJS", "TypeScript", "OpenAI API"],
  },
  {
    id: 3,
    projectName: "ChatPDF",
    projectDescription: "Bedtime Story Generator",
    imageSource: "asdf",
    skills: ["React", "NextJS", "TypeScript"],
  },
];

export const JOBS = [
  {
    id: 1,
    date: "JUNE — PRESENT",
    role: "Software Developer",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    company: "DBS Bank",
    skills: ["React", "Javascript", "TypeScript"],
  },
  {
    id: 2,
    date: "JULY — DEC 2017",
    role: "Software Developer",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    company: "DBS Bank",
    skills: ["React", "Javascript", "TypeScript"],
  },
];
