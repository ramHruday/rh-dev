export interface IProjects {
  label: string;
  url?: string;
  githubUrl?: string;
  img: string;
  desc: string;
  tags?: string[];
}

export const Projects: IProjects[] = [
  {
    label: "B-App",
    img: "/images/frameworks/react.webp",
    desc: "A Full-stack web application for store inventory portal for a family-owned business",
    githubUrl: "https://github.com/ramHruday/bApp",
    url: "https://bapp-surya.herokuapp.com/",
    tags: ["React", "JavaScript", "Flask", "Python", "Bootstrap"],
  },
  {
    label: "Project Drone",
    img: "/images/frameworks/angular.webp",
    desc: "Simulation of drone movement and object detection using ROS, Gazebo, YOLO, OpenCV.",
    githubUrl: "https://github.com/ramHruday/project-drone",
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV"],
  },
  {
    label: "Yettey",
    img: "/images/frameworks/bckbone.webp",
    desc: "Yettey lets you create blogs on a particular technical article,then you publish it and earn.",
    githubUrl: "https://github.com/ramHruday/YetteY",
    url: "https://yettey-app.web.app/write",
    tags: ["React", "TypeScript", "Firebase", "Firestore", "Ant-design"],
  },
  {
    label: "Truffle Starter",
    img: "/images/frameworks/vue.webp",
    desc: "This is a truffle project for validating Mutation generation tool called MuSC, Contains 20 solidity files targetting all the edge cases of solidty vulnerabilities",
    tags: ["Solidity", "Blockchain"],
    githubUrl: "https://github.com/ramHruday/truffle-starter",
  },
  {
    label: "Pulsa",
    img: "/images/frameworks/flask.webp",
    desc: "Google assistant-driven form filling app scheduled daily based on Gitlab/bitbucket commit API.",
    githubUrl: "https://github.com/ramHruday/pulsa",
    tags: ["Python", "Javascript", "Google assistant"],
  },
  {
    label: "Leave manager",
    img: "/images/frameworks/flask.webp",
    desc: "Simple Leave management application in Angular.",
    githubUrl: "https://github.com/ramHruday/leave-manager",
    tags: ["Angular"],
  },
  {
    label: "Flipper Bot",
    img: "/images/frameworks/flask.webp",
    desc: "A pneumatic powered, miniature aluminum-chassis war robot for a college fest.",
    tags: ["War robo", "Puematic piston"],
  },
  {
    label: "Spam detection - CNN and SVM",
    img: "/images/frameworks/flask.webp",
    desc: "A ML code which detects spam emails with 96.4% accuracy",
    githubUrl: "https://github.com/ramHruday/CNN_SVM_spamVsHam",
    tags: ["Machine learning", "Python"],
  },
  {
    label: "Code snippets",
    img: "/images/frameworks/flask.webp",
    desc: "My Code solutions for Google code jam, hackerrank",
    githubUrl: "https://github.com/ramHruday/Competitive-Solutions",
    tags: ["Javascript", "HTML"],
  },
];
