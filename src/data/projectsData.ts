export interface Project {
  label: string;
  desc: string;
  img?: string;
  tags: string[];
  category?: string; // New field for high-level grouping
  url?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    label: "IoT Telemetry Pipeline",
    desc: "Built PyFlink pipelines to consume IoT telemetry from RabbitMQ, processed real-time with fault tolerance, and committed atomically to Delta Lake on ADLS.",
    tags: ["PyFlink", "RabbitMQ", "Delta Lake", "Azure"],
    category: "Data Engineering",
  },
  {
    label: "CAN Bus Data SDK",
    desc: "Developed an SDK to transmit CAN bus data from CAT engines to Azure Lakehouse, enabling predictive maintenance for oilfield equipment.",
    tags: ["IoT", "Azure", "Python", "Edge Computing"],
    category: "IoT & Robotics",
  },
  {
    label: "Financial Data Lakehouse",
    desc: "Managed Delta Lake tables within ADLS gen2, implemented financial data modeling, and optimized data warehouse integrity.",
    tags: ["Azure", "Delta Lake", "Data Modeling", "Finance"],
    category: "Data Engineering",
  },
  {
    label: "Patent Data Analytics",
    desc: "Built analytics pipelines to process startup data from open-source patent APIs and delivered insights for academic research.",
    tags: ["Python", "APIs", "Data Analytics"],
    category: "Data Engineering",
  },
  {
    label: "Art Comparison Index",
    desc: "Created a scalable TensorFlow-based image similarity index for artworks, supporting research and classification of art data.",
    tags: ["TensorFlow", "Image Processing", "MongoDB"],
    category: "Machine Learning",
  },
  {
    label: "Artwork Dashboard",
    desc: "Full-stack dashboard application to search and visualize artworks stored in MongoDB cloud, leveraging React frontend and backend APIs.",
    tags: ["React", "MongoDB", "Full Stack"],
    category: "Full Stack",
  },
  {
    label: "Startup Website Scraper",
    desc: "Developed a Python Wayback Machine scraper to analyze startup websites before and after acquisition for digital marketing research.",
    tags: ["Python", "Selenium", "Web Scraping"],
    category: "Data Engineering",
  },
  {
    label: "3D IoT Platform",
    desc: "Developed a 3D IoT platform for hydraulic fracturing trucks and pumps using React Three.js, WebSockets, and Azure Blob Storage.",
    tags: ["React", "Three.js", "WebGL", "Azure"],
    category: "IoT & Robotics",
  },
  {
    label: "Reusable Component Library",
    desc: "Built 100+ reusable UI components in a React NX monorepo with unit tests, improving productivity across teams.",
    tags: ["React", "NX", "UI Components", "TypeScript"],
    category: "Frontend",
  },
  {
    label: "Full-stack Roadmap Feature",
    desc: "Implemented a roadmap feature with React frontend and Java Spring Boot APIs, collaborating with teams on Git strategy to reduce deployment time.",
    tags: ["React", "Spring Boot", "Java", "Full Stack"],
    category: "Full Stack",
  },
  {
    label: "Project Art",
    desc: "A collection of similar art works collected from Saffron.",
    img: "/images/others/art.jpg",
    githubUrl: "https://github.com/ramHruday/artcomp",
    url: "https://dass1921.github.io/artcomp/",
    tags: ["React", "Js", "Mongo DB", "TensorFlow"],
    category: "Frontend",
  },
  {
    label: "Project 360",
    desc: "A 360 View of the Propetro Services Frac Station",
    img: "/images/others/propetro.jpg",
    githubUrl: "https://github.com/ramHruday/project360",
    url: "https://propetro360.github.io/Site360/",
    tags: ["React", "TypeScript", "Three.js", "WebGL"],
    category: "Frontend",
  },

  {
    label: "Yettey",
    img: "/images/others/yettey.jpg",
    desc: "Built as Hackathon project using Firebase Hosting, authentication and Rich text editor. Yettey lets you create blogs then you publish it and earn.",
    githubUrl: "https://github.com/ramHruday/YetteY",
    url: "https://yettey-app.web.app/write",
    tags: ["React", "TypeScript", "Firebase", "Firestore", "Ant-design"],
    category: "Full Stack",
  },
  {
    label: "Project Drone",
    url: "https://texastechuniversity-my.sharepoint.com/:p:/g/personal/rbandaru_ttu_edu/Ec6AYz7hyH5Ftlh7OG6HekUBQ37igkQpuGlHusJYooTwsQ?e=fdhmbA",
    img: "/images/others/pdrone.jpg",
    desc: "Simulation of drone battery utilization with object detection using ROS, Gazebo, YOLO, OpenCV.",
    githubUrl: "https://github.com/ramHruday/project-drone",
    tags: ["ROS", "Gazebo", "YOLO", "OpenCV", "C++"],
    category: "IoT & Robotics",
  },
  {
    label: "Truffle Starter",

    desc: "This is a truffle project for validating Mutation generation tool called MuSC, Contains 20 solidity files targetting all the edge cases of solidty vulnerabilities",
    tags: ["Solidity", "Blockchain"],
    githubUrl: "https://github.com/ramHruday/truffle-starter",
    category: "Blockchain",
  },

  {
    label: "B-App",
    desc: "A Full-stack web application for store inventory portal for a family-owned business",
    githubUrl: "https://github.com/ramHruday/bApp",
    url: "https://bapp-surya.herokuapp.com/",
    tags: ["React", "JavaScript", "Flask", "Python", "Bootstrap"],
    category: "Full Stack",
  },
  {
    label: "Pulsa",

    desc: "Google assistant-driven form filling app scheduled daily based on Gitlab/bitbucket commit API.",
    githubUrl: "https://github.com/ramHruday/pulsa",
    tags: ["Python", "Javascript", "Google assistant"],
    category: "Other",
  },
  {
    label: "Leave manager",

    desc: "Simple Leave management application in Angular",
    githubUrl: "https://github.com/ramHruday/leave-manager",
    tags: ["Angular", "ANT design"],
    category: "Frontend",
  },
  {
    label: "Flipper Bot",

    desc: "A pneumatic powered, miniature aluminum-chassis war robot for a college fest.",
    tags: ["War robo", "Puematic piston"],
    category: "IoT & Robotics",
  },
  {
    label: "Spam detection - CNN and SVM",

    desc: "A ML code which detects spam emails with 96.4% accuracy",
    githubUrl: "https://github.com/ramHruday/CNN_SVM_spamVsHam",
    tags: ["Machine learning", "Python"],
    category: "Machine Learning",
  },
  {
    label: "Code snippets",
    desc: "My Code solutions for Google code jam, hackerrank",
    githubUrl: "https://github.com/ramHruday/Competitive-Solutions",
    tags: ["Javascript", "HTML"],
    category: "Other",
  },
];
