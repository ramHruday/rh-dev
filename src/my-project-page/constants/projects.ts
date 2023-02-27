export interface IProjects {
  label: string;
  url?: string;
  githubUrl?: string;
  img?: string;
  desc: string;
  tags?: string[];
}

export const Projects: IProjects[] = [
  {
    label: "Project Art",
    desc: "A collection of similar art works collected from Saffron.",
    img: "/images/others/art.jpg",
    githubUrl: "https://github.com/ramHruday/artcomp",
    url: "https://dass1921.github.io/artcomp/",
    tags: ["React", "Js", "Mongo DB", "TensorFlow"],
  },
  {
    label: "Project 360",
    desc: "A 360 View of the Propetro Services Frac Station",
    img: "/images/others/propetro.jpg",
    githubUrl: "https://github.com/ramHruday/project360",
    url: "https://propetro360.github.io/Site360/",
    tags: ["React", "TypeScript", "Three.js", "WebGL"],
  },

  {
    label: "Yettey",
    img: "/images/others/yettey.jpg",
    desc: "Built as Hackathon project using Firebase Hosting, authentication and Rich text editor. Yettey lets you create blogs then you publish it and earn.",
    githubUrl: "https://github.com/ramHruday/YetteY",
    url: "https://yettey-app.web.app/write",
    tags: ["React", "TypeScript", "Firebase", "Firestore", "Ant-design"],
  },
  {
    label: "Project Drone",
    url: "https://texastechuniversity-my.sharepoint.com/:p:/g/personal/rbandaru_ttu_edu/Ec6AYz7hyH5Ftlh7OG6HekUBQ37igkQpuGlHusJYooTwsQ?e=fdhmbA",
    img: "/images/others/pdrone.jpg",
    desc: "Simulation of drone battery utilization with object detection using ROS, Gazebo, YOLO, OpenCV.",
    githubUrl: "https://github.com/ramHruday/project-drone",
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV", "C++"],
  },
  {
    label: "Truffle Starter",

    desc: "This is a truffle project for validating Mutation generation tool called MuSC, Contains 20 solidity files targetting all the edge cases of solidty vulnerabilities",
    tags: ["Solidity", "Blockchain"],
    githubUrl: "https://github.com/ramHruday/truffle-starter",
  },

  {
    label: "B-App",
    desc: "A Full-stack web application for store inventory portal for a family-owned business",
    githubUrl: "https://github.com/ramHruday/bApp",
    url: "https://bapp-surya.herokuapp.com/",
    tags: ["React", "JavaScript", "Flask", "Python", "Bootstrap"],
  },
  {
    label: "Pulsa",

    desc: "Google assistant-driven form filling app scheduled daily based on Gitlab/bitbucket commit API.",
    githubUrl: "https://github.com/ramHruday/pulsa",
    tags: ["Python", "Javascript", "Google assistant"],
  },
  {
    label: "Leave manager",

    desc: "Simple Leave management application in Angular",
    githubUrl: "https://github.com/ramHruday/leave-manager",
    tags: ["Angular", "ANT design"],
  },
  {
    label: "Flipper Bot",

    desc: "A pneumatic powered, miniature aluminum-chassis war robot for a college fest.",
    tags: ["War robo", "Puematic piston"],
  },
  {
    label: "Spam detection - CNN and SVM",

    desc: "A ML code which detects spam emails with 96.4% accuracy",
    githubUrl: "https://github.com/ramHruday/CNN_SVM_spamVsHam",
    tags: ["Machine learning", "Python"],
  },
  {
    label: "Code snippets",
    desc: "My Code solutions for Google code jam, hackerrank",
    githubUrl: "https://github.com/ramHruday/Competitive-Solutions",
    tags: ["Javascript", "HTML"],
  },
];
