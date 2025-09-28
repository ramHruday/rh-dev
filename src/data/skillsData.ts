export interface Skill {
  name: string;
  iconUrl: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", iconUrl: "/images/skills/javascript.webp" },
      { name: "TypeScript", iconUrl: "/images/skills/typescript.webp" },
      { name: "Python", iconUrl: "/images/skills/python.webp" },
      { name: "Java", iconUrl: "/images/skills/java.webp" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", iconUrl: "/images/frameworks/react.webp" },
      { name: "Angular", iconUrl: "/images/frameworks/angular.webp" },
      { name: "Node.js", iconUrl: "/images/frameworks/nodejs.webp" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Docker", iconUrl: "/images/others/docker.webp" },
      { name: "AWS", iconUrl: "/images/others/aws.webp" },
      { name: "Firebase", iconUrl: "/images/others/firebase.webp" },
      { name: "MongoDB", iconUrl: "/images/others/mongo.webp" },
      { name: "PostgreSQL", iconUrl: "/images/others/postgre.webp" },
    ],
  },
];
