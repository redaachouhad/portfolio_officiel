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
    place: "Agadir, Maroc",
    date: "2017-2018",
    description:
      "I immersed myself in the world of Science and Mathematics for my Baccalaureate. This transformative period was marked by deep dives into algebra, calculus, physics, and chemistry. It was a time of growth, curiosity, and laying the foundation for my academic path ahead.",
    diplomas: ["Baccalaureate in Mathematical Sciences A."],
    imageUrl: logoHighSchool.src,
  },
  {
    nameOfSchool: "CPGE Reda Slaoui",
    place: "Agadir, Maroc",
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
