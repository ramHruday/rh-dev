export interface IProjects {
  label: string;
  url?: string;
  githubUrl?: string;
  img: string;
  desc: string;
}

export const Projects: IProjects[] = [
  {
    label: "B-App",
    img: "/images/frameworks/react.png",
    desc: "A Full-stack web application for store inventory portal for a family-owned business",
    githubUrl: "https://github.com/ramHruday/bApp",
    url: "https://bapp-surya.herokuapp.com/",
  },
  {
    label: "Project Drone",
    img: "/images/frameworks/angular.png",
    desc: "Simulation of drone movement and object detection using ROS, Gazebo, YOLO, OpenCV.",
    githubUrl: "https://github.com/ramHruday/project-drone",
  },
  {
    label: "Yettey",
    img: "/images/frameworks/bckbone.png",
    desc: "Yettey lets you create blogs on a particular technical article,then you publish it and earn. Deployed on Google firebase and Google firestore",
    githubUrl: "https://github.com/ramHruday/YetteY",
    url: "https://yettey-app.web.app/write",
  },
  {
    label: "Truffle Starter",
    img: "/images/frameworks/vue.png",
    desc: "This is a truffle project for validating Mutation generation tool called MuSC, Contains 20 solidity files targetting all the edge cases of solidty vulnerabilities",
  },
  {
    label: "Pulsa",
    img: "/images/frameworks/flask.png",
    desc: "Google assistant-driven form filling app scheduled daily based on Gitlab/bitbucket commit API.",
    githubUrl: "https://github.com/ramHruday/pulsa",
  },
  {
    label: "Leave manager",
    img: "/images/frameworks/flask.png",
    desc: "Simple Leave management application in Angular.",
    githubUrl: "https://github.com/ramHruday/leave-manager",
  },
  {
    label: "Flipper Bot",
    img: "/images/frameworks/flask.png",
    desc: "A pneumatic powered, miniature aluminum-chassis war robot for a college fest.",
  },
  {
    label: "Spam detection - CNN and SVM",
    img: "/images/frameworks/flask.png",
    desc: "A ML code which detects spam emails with 96.4% accuracy",
    githubUrl: "https://github.com/ramHruday/CNN_SVM_spamVsHam",
  },
  {
    label: "Code snippets",
    img: "/images/frameworks/flask.png",
    desc: "My Code solutions for Google code jam, hackerrank",
    githubUrl: "https://github.com/ramHruday/Competitive-Solutions",
  },
];
