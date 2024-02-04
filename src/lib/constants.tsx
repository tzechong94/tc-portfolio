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
];
export const PROJECTS = [
  {
    id: 1,
    projectName: "Ultra",
    projectDescription:
      "Ultra is a full stack project that helps track all your personal projects. Create project, create project updates and check progress over time. Previously, I built this on Angular and Java Spring Boot before redoing it on MERN.",
    imageSource: "/ultra.png",
    skills: ["React", "Javascript", "Express", "NodeJS", "MongoDB"],
    link: "https://tryultra.vercel.app/",
  },
  {
    id: 2,
    projectName: "Stowee",
    projectDescription:
      "Stowee is a bedtime generator built for my nephew, powered by OpenAI. Enter simple prompts like age, name and moral of the story, and watch your story come to life. Keep your kids occupied every night without running out of ideas.",
    imageSource: "/stowee.png",
    skills: ["React", "NextJS", "TypeScript", "OpenAI API"],
    link: "https://stowee.vercel.app/",
  },
  {
    id: 3,
    projectName: "AskDoc",
    projectDescription:
      "Explore your health insights by asking AskDoc for personalized advice about your health concerns, symptoms, and medication queries. Interact with AI chatbot to learn more about your medical document and symptoms.",
    imageSource: "/askdoc.png",
    skills: [
      "React",
      "NextJS",
      "TypeScript",
      "OpenAI API",
      "Pinecone",
      "NeonDB",
    ],
    link: "https://askdoc-healthhack.vercel.app/",
  },
  {
    id: 4,
    projectName: "Simple Calculator",
    projectDescription: "Built a Simple calculator with react.",
    imageSource: "/calculator.png",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://tzechong94.github.io/basic-calculator/",
  },
  {
    id: 5,
    projectName: "Drum Machine",
    projectDescription:
      "Make music with this simple drum machine. Part of FreeCodeCamp's curriculum.",
    imageSource: "/drum.png",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://tzechong94.github.io/drum-machine/",
  },
  {
    id: 6,
    projectName: "Random Quote Machine",
    projectDescription:
      "Inspire yourself with one of these quotes! Part of FreeCodeCamp's curriculum.",
    imageSource: "/quote.png",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://tzechong94.github.io/random-quote-machine/",
  },
  {
    id: 7,
    projectName: "Markdown Previewer",
    projectDescription:
      "Built a markdown previewer as part of FreeCodeCamp's curriculum.",
    imageSource: "/markdown.png",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://tzechong94.github.io/markdown-previewer/",
  },
  {
    id: 8,
    projectName: "GDP Viewer",
    projectDescription: "",
    imageSource: "/gdp.png",
    skills: ["React", "HTML", "CSS", "JavaScript", "D3"],
    link: "https://tzechong94.github.io/bar-chart/",
  },
  {
    id: 9,
    projectName: "Pomodoro Clock",
    projectDescription: "Stay productive with this pomodoro clock!",
    imageSource: "/pomodoro.png",
    skills: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://tzechong94.github.io/pomodoro-clock/",
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
