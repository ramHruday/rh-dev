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
      { name: "C++", iconUrl: "/images/skills/cpp.webp" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", iconUrl: "/images/frameworks/react.webp" },
      { name: "Angular", iconUrl: "/images/frameworks/angular.webp" },
      { name: "Spark", iconUrl: "/images/others/spark.png" },
      { name: "Table Format", iconUrl: "/images/others/openfil.webp" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Docker", iconUrl: "/images/others/docker.svg" },
      { name: "Azure", iconUrl: "/images/others/azure.svg" },
      { name: "Firebase", iconUrl: "/images/others/firebase.webp" },
      { name: "MongoDB", iconUrl: "/images/others/mongo.webp" },
      { name: "PostgreSQL", iconUrl: "/images/others/postgre.webp" },
    ],
  },
];
