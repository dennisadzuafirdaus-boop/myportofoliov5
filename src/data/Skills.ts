import {
  siReact,
  siJavascript,
  siTypescript,
  siHtml5,
  siTailwindcss,
  siNextdotjs,
  siPhp,
  siLaravel,
  siNodedotjs,
  siMysql,
  siGit,
  siGithub,
  siVite,
  siPostman,
} from "simple-icons";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: typeof siReact;
  description: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  // =========================
  // FRONTEND
  // =========================

  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: siReact,
    description:
      "Building interactive and reusable user interfaces using component-based architecture.",
    featured: true,
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    icon: siJavascript,
    description:
      "Creating dynamic functionality and interactive experiences for modern web applications.",
    featured: true,
  },

  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    icon: siTypescript,
    description:
      "Writing more predictable and maintainable JavaScript applications with static typing.",
  },

  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    icon: siHtml5,
    description:
      "Creating semantic, accessible, and structured web interfaces.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: siTailwindcss,
    description:
      "Building responsive and modern interfaces using utility-first CSS.",
    featured: true,
  },

  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: siNextdotjs,
    description:
      "Building modern React applications with routing and optimized rendering.",
  },

  // =========================
  // BACKEND
  // =========================

  {
    id: "php",
    name: "PHP",
    category: "Backend",
    icon: siPhp,
    description:
      "Developing server-side applications, business logic, and web systems.",
    featured: true,
  },

  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    icon: siLaravel,
    description:
      "Building structured backend applications, authentication systems, and APIs.",
    featured: true,
  },

  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: siNodedotjs,
    description:
      "Building JavaScript-based backend services and application APIs.",
  },

  // =========================
  // DATABASE
  // =========================

  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: siMysql,
    description:
      "Designing, managing, and querying relational databases for web applications.",
    featured: true,
  },

  // =========================
  // TOOLS
  // =========================

  {
    id: "git",
    name: "Git",
    category: "Tools",
    icon: siGit,
    description:
      "Managing source code versions and maintaining development workflows.",
  },

  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    icon: siGithub,
    description:
      "Managing repositories, version control, and collaborative development.",
  },

  {
    id: "vite",
    name: "Vite",
    category: "Tools",
    icon: siVite,
    description:
      "Using fast modern tooling for frontend development with React.",
  },

  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    icon: siPostman,
    description: "Testing and debugging APIs during application development.",
  },
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

export type SkillFilter = (typeof skillCategories)[number];
