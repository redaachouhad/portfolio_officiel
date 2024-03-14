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
