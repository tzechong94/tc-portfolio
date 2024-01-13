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
  link: string;
}

export interface Jobs {
  jobs: Job[];
}

export const SKILLS = [
  "React",
  "Redux",
  "HTML",
  "CSS",
  "NextJS",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Express",
  "Node",
  "ES6",
  "Go (Learning in progress)",
  "Java Spring Boot",
  "MongoDB",
  "MySQL",
  "Git",
  "Github",
  "BitBucket",
  "",
];
export const PROJECTS = [
  {
    id: 1,
    projectName: "Ultra",
    projectDescription: "Ultra project adfadsf",
    imageSource: "/ultra.png",
    skills: ["React", "Javascript", "Express", "NodeJS", "MongoDB"],
    link: "https://tryultra.vercel.app/",
  },
  {
    id: 2,
    projectName: "Stowee",
    projectDescription: "Bedtime Story Generator",
    imageSource: "/stowee.png",
    skills: ["React", "NextJS", "TypeScript", "OpenAI API"],
    link: "https://stowee.vercel.app/",
  },
  {
    id: 3,
    projectName: "ChatPDF",
    projectDescription: "Bedtime Story Generator",
    imageSource: "/chatpdf.png",
    skills: [
      "React",
      "NextJS",
      "TypeScript",
      "OpenAI API",
      "Pinecone",
      "NeonDB",
    ],
    link: "https://chatpdf-five-plum.vercel.app/",
  },
];

export const JOBS = [
  {
    id: 1,
    date: "JUN 2023 — PRESENT",
    role: "Software Developer",
    description:
      "Worked on the frontend development of internal projects, ensuring responsive and user-friendly web applications. Collaborated with backend developers to implement features and integrate functionalities.",
    company: "DBS Bank",
    skills: ["React", "Javascript", "TypeScript", "Git"],
  },
  {
    id: 2,
    date: "DEC 2022 — MAY 2023",
    role: "Trainee",
    description:
      "As part of the TFIP programme, we learned Full Stack Development in NUS before our attachment in financial institutions.",
    company: "IBF",
    skills: [
      "Angular",
      "Typescript",
      "Java Spring Boot",
      "MySQL",
      "MongoDB",
      "Redis",
      "Git",
    ],
  },
  {
    id: 3,
    date: "JUL 2021 — APR 2022",
    role: "Product Manager",
    description:
      "Worked on logistics, marketing, training, and technical support materials for the US launch of the iSR’obot Mona Lisa 2.0, a robotic MRI-Ultrasound fusion platform capable of prostate biopsy and focal therapy.",
    company: "Biobot Surgical",
    skills: ["Product Management"],
  },
  {
    id: 4,
    date: "2020 - 2022",
    role: "Cofounder",
    description:
      "Worked with IHLs to deliver Data Science and Software Engineering courses to adult learners. Launched batch 1 of a full-stack coding bootcamp in the Philippines in Nov 2021.",
    company: "Studemy | Codemap",
    skills: ["Sales", "Business Development"],
  },
];
