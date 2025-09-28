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
      { name: "C++", iconUrl: "/images/skills/cpp.webp" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", iconUrl: "/images/frameworks/react.webp" },
      { name: "Angular", iconUrl: "/images/frameworks/angular.webp" },
      { name: "Vue.js", iconUrl: "/images/frameworks/vuejs.webp" },
      { name: "Node.js", iconUrl: "/images/frameworks/nodejs.webp" },
      { name: "Express.js", iconUrl: "/images/frameworks/express.webp" },
      { name: "Django", iconUrl: "/images/frameworks/django.webp" },
      { name: "Spring Boot", iconUrl: "/images/frameworks/springboot.webp" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", iconUrl: "/images/others/git.webp" },
      { name: "Docker", iconUrl: "/images/others/docker.webp" },
      { name: "AWS", iconUrl: "/images/others/aws.webp" },
      { name: "Firebase", iconUrl: "/images/others/firebase.webp" },
      { name: "MongoDB", iconUrl: "/images/others/mongodb.webp" },
      { name: "PostgreSQL", iconUrl: "/images/others/postgre.webp" },
      { name: "Jira", iconUrl: "/images/others/jira.webp" },
    ],
  },
];
