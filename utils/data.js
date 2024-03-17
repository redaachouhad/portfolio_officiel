import cpge from "./../public/images/cpge.jpg";
import ensimag_logo from "./../public/images/ensimag_logo.png";
import logoHighSchool from "./../public/images/logoHighSchool.jpg";

// Data for menu
export const itemMenu = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Education",
    url: "#education",
  },
  {
    title: "Skills",
    url: "#skills",
  },
  {
    title: "Experiences",
    url: "#experiences",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact Me",
    url: "#contactMe",
  },
];

// Data for education

export const dataEducation = [
  {
    nameOfSchool: "Hight School Sidi Lhaj Said",
    place: "Agadir, Morocco",
    date: "2017-2018",
    description:
      "I immersed myself in the world of Science and Mathematics for my Baccalaureate. This transformative period was marked by deep dives into algebra, calculus, physics, and chemistry. It was a time of growth, curiosity, and laying the foundation for my academic path ahead.",
    diplomas: ["Baccalaureate in Mathematical Sciences A."],
    imageUrl: logoHighSchool.src,
  },
  {
    nameOfSchool: "CPGE Reda Slaoui",
    place: "Agadir, Morocco",
    date: "2018-2020",
    description:
      " I navigated the rigorous world of preparatory classes, starting with MPSI field (Mathematics, Physics, and Engineering Sciences) in the first year and transitioning to MP field (Mathematics and Physics) in the second year. These years were intense, challenging, and immensely rewarding, shaping my analytical thinking and preparing me for future academic pursuits.",
    diplomas: [],
    imageUrl: cpge.src,
  },
  {
    nameOfSchool: "Grenoble INP ENSIMAG x University Grenoble Alpes (UGA)",
    place: "Grenoble, France",
    date: "2020-2023",
    description:
      " I had the privilege of being a student at ENSIMAG (the National School of Computer Science and Applied Mathematics of Grenoble) and UGA (University Grenoble Alpes). These three years were a period of immense growth and learning, where I immersed myself in the world of computer science and applied mathematics. ENSIMAG's rigorous programs challenged me to think critically, solve complex problems, and develop practical skills in areas such as software engineering, algorithms, and data analysis. My time at ENSIMAG not only expanded my knowledge but also provided valuable hands-on experience through projects and collaborations with peers.",
    diplomas: [
      "Bachelor's Degree in Engineering Science (2020-2021).",
      "Master MOSIG from UGA ( Master of Science in Informatics at Grenoble ): Data Science & Artificial Intelligence (2022-2023).",
      "Engineering Diploma from ENSIMAG (2020-2023)",
      "Certificate: Test of English for International Communication (TOEIC), Level B2, TOIEC Score: 790/990 (2023-2025)",
    ],
    imageUrl: ensimag_logo.src,
  },
];

// Data of Skills:
import logoBoostrap from "./../public/images/boostrap.webp";
import logoCss from "./../public/images/css_logo.webp";
import logoExpress from "./../public/images/expressjs.webp";
import logoFirebase from "./../public/images/firebase.png";
import logoFramerMotion from "./../public/images/framer motion.jpg";
import logoGit from "./../public/images/git.webp";
import logoGithub from "./../public/images/github.webp";
import logoGPU from "./../public/images/gpu.webp";
import logoHtml from "./../public/images/html_logo.webp";
import logoJavaScript from "./../public/images/js.webp";
import logoMaterialUi from "./../public/images/material_ui.webp";
import logoMongoDb from "./../public/images/mongodb.webp";
import logoMySql from "./../public/images/mysql2.webp";
import logoNextAuth from "./../public/images/nextauth.png";
import logoNextjs from "./../public/images/nextjs.png";
import logoNodeJs from "./../public/images/nodejs.webp";
import logoPostgresql from "./../public/images/postgresql.webp";
import logoPostman from "./../public/images/postman.webp";
import logoPython from "./../public/images/python.webp";
import logoPytorch from "./../public/images/pytorch.webp";
import logoReact from "./../public/images/react.webp";
import logoRedux from "./../public/images/redux.png";
import logoVercel from "./../public/images/vercel.webp";
import logoVscode from "./../public/images/vs_code.webp";
export const dataSkills = [
  {
    title: "Frontend",
    items: [
      { imageSrc: logoHtml, name: "HTML" },
      { imageSrc: logoCss, name: "CSS" },
      { imageSrc: logoJavaScript, name: "JavaScript" },
      { imageSrc: logoBoostrap, name: "Boostrap" },
      { imageSrc: logoReact, name: "React.js" },
      { imageSrc: logoNextjs, name: "Next.js" },
      { imageSrc: logoNextAuth, name: "NextAuth.js" },
      { imageSrc: logoRedux, name: "Redux" },
      { imageSrc: logoFramerMotion, name: "Framer Motion" },
      { imageSrc: logoMaterialUi, name: "Material UI" },
    ],
  },
  {
    title: "Backend",
    items: [
      { imageSrc: logoNodeJs, name: "Node.js" },
      { imageSrc: logoExpress, name: "Express.js" },
      { imageSrc: logoMongoDb, name: "MongoDb" },
      { imageSrc: logoPostgresql, name: "Postgresql" },
      { imageSrc: logoMySql, name: "MySQL" },
      { imageSrc: logoFirebase, name: "Firebase" },
    ],
  },
  {
    title: "Data Science",
    items: [
      { imageSrc: logoPython, name: "Python" },
      { imageSrc: logoPytorch, name: "Pytorch" },
      { imageSrc: logoGPU, name: "GPU" },
    ],
  },
  {
    title: "Others",
    items: [
      { imageSrc: logoGit, name: "Git" },
      { imageSrc: logoGithub, name: "Github" },
      { imageSrc: logoPostman, name: "Postman" },
      { imageSrc: logoVscode, name: "VS Code" },
      { imageSrc: logoVercel, name: "Vercel" },
    ],
  },
];

//  Data Experiences

import logoQaProcess from "./../public/images/qaprocess.webp";
import logoUm6p from "./../public/images/um6p_logo.jpg";

export const dataExperiences = [
  {
    nameOfSchool: "Assistant Engineer Internship: Full Stack Developer",
    place: "QA Process, Paris, France.",
    date: "June - August 2022",
    description:
      "During my internship at QA PROCESS, my primary goal was to actively contribute to crucial projects, specifically focusing on the implementation of a website for a social association dedicated to immigrant and refugee minors without official documents or parents in France. This involved tasks such as setting up web hosting on AWS, participating in custom web development using PHP, CSS, JavaScript, HTML, and SQL, and ensuring the quality and reliability of the website through test automation using tools like JMeter. The objective was to support the mission of the association and enhance the online presence to better serve the needs of immigrant and refugee minors without official documentation or parental support in France.",
    diplomas: ["HTML", "CSS", "JavaScript", "SQL (MariaDB)", "PHP", "AWS EC2"],
    imageUrl: logoQaProcess.src,
  },
  {
    nameOfSchool: "Research Internship: Data Scientist (Computer Vision)",
    place: "UM6P, Benguerir, Morocco",
    date: "March - September 2023",
    description:
      "The main goal of this internship is to implement the '3D-Recpy' framework for the development and deployment of Deep Learning models in 3D reconstruction. This involves using deep learning techniques, including Transformers and Convolutional Neural Networks (CNNs), to generate three-dimensional voxel representations of objects from two-dimensional images. The framework comprises four primary blocks (preprocess, encoder, decoder, and postprocess) to facilitate different stages of the 3D reconstruction process. The internship also includes a comprehensive evaluation of the framework's performance using various metrics, contributing to the advancement of 3D reconstruction techniques.",
    diplomas: [
      "Python",
      "Pytorch",
      "Pytorch-Lightening",
      "GPU",
      "Deep Learning",
      "Transformers",
      "Convolutional Neural Network.",
    ],
    imageUrl: logoUm6p.src,
  },
];

//

import project1 from "./../public/images/taskEaseProject.jpeg";

export const dataProjects = [
  {
    image: project1,
    tech: [
      "Html",
      "Css",
      "tailwindCss",
      "Javascript",
      "React.js",
      "Next.js",
      "NextAuth.js",
      "Redux",
      "react-beautiful-dnd",
      "react Icon",
      "Mongoose",
      "MongoDb",
      "Firebase",
    ],
    title: "TaskEase App",
    description:
      "Taskease is a Next.js web application designed for efficient task management, akin to Trello. Users can categorize tasks into three boards: Todo, In Progress, and Done, facilitating clear progress tracking. Key features include easy task creation with detailed descriptions, due dates, and more, as well as a drag-and-drop interface for seamless task movement between boards. ",
    seeCode: "",
    liveDemo: "https://taskease-app-reda-achouhads-projects.vercel.app",
  },
];
