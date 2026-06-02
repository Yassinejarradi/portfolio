//portfolio

import IMG1 from "../../assets/test1.gif";
import IMG2 from "../../assets/sudoku_owl.mp4";
import IMG3 from "../../assets/image3.png";
import IMG4 from "../../assets/image4.png";
import IMG5 from "../../assets/image5.png";
import IMG6 from "../../assets/image6.png";
import IMG7 from "../../assets/image7.png";
import IMG8 from "../../assets/image8.png";
import IMG9 from "../../assets/image9.png";
import IMG10 from "../../assets/image10.png";
import IMG11 from "../../assets/image11.png";
import IMG12 from "../../assets/image12.png";

//parcours
import Wafasalaf from "../../assets/wafasalaf.png";
//intro
import img from "../../assets/Me.webp";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
//portfolio
export const soloProjects = [
  {
    id: 1,
    title: "Solution CRM pour le commerce électronique",
    img: IMG1,
    description:
      "Optimisez et améliorez la gestion de la relation client pour le commerce électronique.",
    technologies: "Laravel | PHP | MySQL",
    // code: "https://github.com/Cherkani/-PFA-.git",
    // livedemo: "no",
    video: "https://github.com/Cherkani/-PFA-.git",
  },
  {
    id: 1,
    title: "Gestion de la faculté de médecine",
    img: IMG12,
    description:
      "Application mobile et site web pour la gestion d'une faculté de médecine. Les professeurs créent des devoirs que les étudiants complètent.",
    technologies: "React | Java Native | Spring Security",
    code: "https://github.com/Cherkani/tooth_react_springsecurity",
    video: "https://github.com/Cherkani/tooth_react_springsecurity",
  },
  {
    id: 2,
    title: "Projet de recherche et de filtrage de restaurants",
    img: IMG3,
    description:
      "Découvrez et localisez l'endroit idéal pour dîner avec la pile MERN.",
    technologies: "MERN Stack | MongoDB | Express.js | React | Node.js",
    code: "https://github.com/Cherkani/restaurant.git",
    livedemo: "https://restaurant-cherkani.vercel.app/",
    video: "https://github.com/Cherkani/restaurant.git",
  },
  {
    id: 3,
    title: "Profsswap",
    img: IMG2,
    description:
      "Donnez du pouvoir aux échanges de professeurs d'université avec une application mobile.",
    technologies: "React Native | Développement mobile",
    code: "https://github.com/Cherkani/ProfSwap",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/ProfSwap",
  },
  {
    id: 4,
    title: "Système de gestion CRUD pour les machines en salles",
    img: IMG4,
    description:
      "Gérez efficacement les machines en salles avec un système CRUD alimenté par Laravel.",
    technologies: "Laravel | PHP | MySQL",
    code: "https://github.com/Cherkani/laravel-first-project",
    // livedemo: "no",
    // video: "no",
  },
  {
    id: 5,
    title: "Pokédex",
    img: IMG5,
    description:
      "Explorez le monde des Pokémon avec le Pokédex alimenté par React Native.",
    technologies: "React Native | Développement mobile",
    code: "https://github.com/Cherkani/PokeDex-RN-App.git",
    livedemo:
      "https://expo.dev/@aymen108/PokeDex-RN-App?serviceType=classic&distribution=expo-go",
    video: "https://github.com/Cherkani/PokeDex-RN-App.git",
  },
  {
    id: 6,
    title: "Gestion de bibliothèque",
    img: IMG6,
    description:
      "Gestion efficace de la bibliothèque pour des emprunts et retours de livres sans heurts.",
    technologies: "Personnalisé | Système de gestion de bibliothèque",
    code: "https://github.com/Cherkani/JAVA_GESTION_librairie",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/JAVA_GESTION_librairie",
  },
  {
    id: 7,
    title: "Projet d'optimisation du raccourci du dépôt de carburant",
    img: IMG7,
    description:
      "Optimisation des déplacements avec le projet de raccourci du dépôt de carburant alimenté par Python.",
    technologies: "Python | Algorithmes d'optimisation ",
    //  code: "no",
    //  livedemo: "no",
    video: "https://github.com/Cherkani/fuel_short_path_first_project_python",
  },
  {
    id: 8,
    title: "Gestion CRUD des machines avec JSF et EJB",
    img: IMG8,
    description:
      "Conception d'un système de gestion des machines utilisant JavaServer Faces (JSF) et Enterprise JavaBeans (EJB). Ce CRUD se concentre sur l'allocation simplifiée des machines aux employés et inclut un graphique simple pour visualiser les points de données clés.",
    technologies: "JSF | Hibernate | EJB",
    code: "https://github.com/Cherkani/Gestion_Machines_Jsf_EJB",
    // livedemo: "no",
    video: "https://github.com/Cherkani/Gestion_Machines_Jsf_EJB",
  },
  {
    title: "Système de gestion CRUD des étudiants",
    img: IMG9,
    description:
      "Développement d'un système de gestion des étudiants avec Spring Boot, Swagger et React. Comprend la gestion des rôles, des informations sur les étudiants et la gestion des départements. Mise en œuvre des opérations CRUD mobiles avec Volley.",
    technologies: "Spring Boot | Swagger | React | Volley",
    code: "https://github.com/Cherkani/Gestion_etudiant_sringBoot_swagger_mobile_React",
    // livedemo: "no",

    video:
      "https://github.com/Cherkani/Gestion_etudiant_sringBoot_swagger_mobile_React",
  },
  {
    title: "Système de gestion CRUD des hôtels",
    img: IMG10,
    description:
      "Mise en place d'un système de gestion des hôtels avec EJB, JSP, Hibernate et Wildfly. Axé sur le CRUD pour les villes et les hôtels, assurant une manipulation transparente des données. Utilise Wildfly comme serveur d'application.",
    technologies: "EJB | JSP | Hibernate | Wildfly",
    code: "https://github.com/Cherkani/EJB_JSP_Hibernate_widfly_hotel_Gestion",

    // livedemo: "no",

    video: "https://github.com/Cherkani/EJB_JSP_Hibernate_widfly_hotel_Gestion",
  },
  {
    title: "Système de gestion des stocks",
    description:
      "Conception d'un système de gestion des stocks avec Hibernate et JSP comprenant des opérations CRUD. Permet de répertorier les produits, de récupérer les commandes et de gérer les catégories. Met l'accent sur l'établissement de relations entre les commandes.",
    img: IMG11,
    technologies: "Hibernate | JSP",
    code: "https://github.com/Cherkani/Hibernate_JSP_CRUD____Gestion_de_Stock",
    // livedemo: "no",

    video: "https://github.com/Cherkani/Hibernate_JSP_CRUD____Gestion_de_Stock",
  },
];
//skills in data component
export const frontEndrow1 = [
  { skills_name: "HTML", skills_level: "Intermediaire" },
  { skills_name: "CSS", skills_level: "Basique" },
  { skills_name: "JavaScript", skills_level: "Intermediaire" },
];
export const frontEndrow2 = [
  { skills_name: "Bootstrap", skills_level: "Basique" },
  { skills_name: "tailwind", skills_level: "Basique" },
  { skills_name: "React", skills_level: "Intermediaire" },
];
export const backEndrow1 = [
  { skills_name: "Spring Boot", skills_level: "Intermediaire" },
  { skills_name: "Node.js", skills_level: "Basique" },
  { skills_name: "Express.js", skills_level: "Basique" },
];
export const backEndrow2 = [
  { skills_name: "Hibernate", skills_level: "Intermediaire" },
  { skills_name: "Laravel", skills_level: "Intermediaire" },
  { skills_name: "Jsp", skills_level: "Basique" },
];
export const sgbdrow1 = [
  { skills_name: "MySQL", skills_level: "Intermediaire" },
  { skills_name: "MongoDB", skills_level: "Basique" },
  { skills_name: "oracle", skills_level: "Intermediaire" },
];
export const sgbdrow2 = [
  { skills_name: "Sql Server", skills_level: "Basique" },
  { skills_name: "Hbase", skills_level: "Basique" },
];
export const birow1 = [
  { skills_name: "Talend", skills_level: "Intermediaire" },
  { skills_name: "Power Bi", skills_level: "Intermediaire" },
  { skills_name: "Tibco Jasper", skills_level: "Basique" },
];
export const birow2 = [
  { skills_name: "SSIS", skills_level: "Basique" },
  { skills_name: "SSAS", skills_level: "Basique" },
  { skills_name: "SSRS", skills_level: "Basique" },
];
export const plateformtoolsrow1 = [
  { skills_name: "git", skills_level: "Intermediaire" },
  { skills_name: "github", skills_level: "Intermediaire" },
];
export const toolsrow2 = [
  { skills_name: "docker", skills_level: "basique" },
  { skills_name: "insomnia", skills_level: "Intermediaire" },
];
//intro
export const intro = {
  name: "Yassine Jarradi",
  image: img,
  dowload: "Télécharger CV",
  cvPath: "yassine_jarradi_cv.pdf",
  Icon1: FaAward,
  title_card1: "Université",
  text_card1: "ENSAM Casablanca",
  Icon2: VscFolderLibrary,
  title_card2: "Programme",
  text_card2: "Master Professionnel IA & IoT",
  say: "Dire Bonjour",
  description1:
    "- Développeur Full Stack & Technicien IT, spécialisé Laravel. Actuellement en 1ère année de Master Professionnel en Intelligence Artificielle et IoT à l'ENSAM Casablanca.",
  description2:
    "- Expérience avérée dans la digitalisation des processus métier, le développement d'applications web et l'optimisation des serveurs.",
  description3:
    "- Maîtrise de Laravel, MySQL, Tailwind CSS, JavaScript, React et Bootstrap.",
};

export const skills = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    title: "postgre",
    tag: "sgbd",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969096.png",
    title: "oracle",
    tag: "sgbd",
  },

  {
    icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    title: "HTML",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    title: "CSS",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    title: "JavaScript",
    tag: "frontend",
  },

  {
    icon: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
    title: "React js",
    tag: "frontend",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/29/29540.png",
    title: "Jsp",
    tag: "frontend",
  },
  {
    icon: "https://img.icons8.com/color/512/bootstrap.png",
    title: "Bootstrap",
    tag: "frontend",
  },
  {
    icon: "https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default",
    title: "tailwind",
    tag: "frontend",
  },

  // {
  // 	icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  // 	title: "TypeScript",
  // 	tag: "backend",
  // },
  // {
  // 	icon: "https://img.icons8.com/color/512/chakra-ui.png",
  // 	title: "Chakra-UI",
  // 	tag: "frontend",
  // },
  {
    icon: "https://img.icons8.com/fluency/512/node-js.png",
    title: "Node.js",
    tag: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/express-js.png",
    title: "Express.js",
    tag: "backend",
  },
  // {
  // 	icon: "https://img.icons8.com/color/512/nextjs.png",
  // 	title: "Next.js",
  // 	tag: "frontend",
  // },
  // {
  // 	icon: "https://www.svgrepo.com/show/452093/redux.svg",
  // 	title: "redux",
  // 	tag: "backend",
  // },
  {
    icon: "https://vmware.gallerycdn.vsassets.io/extensions/vmware/vscode-boot-dev-pack/0.2.1/1675235820676/Microsoft.VisualStudio.Services.Icons.Default",
    title: "Spring Boot",
    tag: "backend",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/hibernate-icon-982x1024-rzyrglfw.png",
    title: "Hibernate",
    tag: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/mongodb.png",
    title: "MongoDB",
    tag: "backend",
  },
  {
    icon: "https://img.icons8.com/fluency/240w/mysql-logo.png",
    title: "MySql",
    tag: "backend",
  },

  // {
  // 	icon: "https://img.icons8.com/?size=512&id=33039&format=png",
  // 	title: "AWS",
  // 	tag: "backend",
  // },

  {
    icon: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
    title: "Laravel",
    tag: "backend",
  },

  {
    icon: "https://cdn-icons-png.flaticon.com/512/760/760457.png",
    title: "React native",
    tag: "mobile",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java",
    tag: "mobile",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png",
    title: "android studio",
    tag: "mobile",
  },

  // {
  // 	icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png",
  // 	title: "Replit",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png",
  // 	title: "Sandbox",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/color/512/firebase.png",
  // 	title: "Firebase",
  // 	tag: "platform",
  // },
  // {
  // 	icon: "https://img.icons8.com/ios-filled/512/codepen.png",
  // 	title: "CodePen",
  // 	tag: "platform",
  // },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java",
    tag: "programmingLanguages",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    title: "Python",
    tag: "programmingLanguages",
  },
  //   {
  //     icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
  //     title: "C",
  //     tag: "programmingLanguages",
  //   },

  {
    icon: "https://img.icons8.com/ios-glyphs/512/github.png",
    title: "Github",
    tag: "platform",
  },
  {
    icon: "https://i.ibb.co/61nck0S/download-removebg-preview.png",
    title: "VS Code",
    tag: "platform",
  },
  {
    icon: "https://img.icons8.com/color/512/git.png",
    title: "Git",
    tag: "platform",
  },
  {
    icon: "https://static-00.iconduck.com/assets.00/insomnia-icon-2048x2048-kz1gm1sv.png",
    title: "Insomnia",
    tag: "platform",
  },
  {
    icon: "https://cdn.icon-icons.com/icons2/2407/PNG/512/docker_icon_146192.png",
    title: "docker",
    tag: "platform",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png",
    title: "Visual Studio",
    tag: "platform",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/TalendLogoCoral.png",
    title: "Talend",
    tag: "BI",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/640px-New_Power_BI_Logo.svg.png",
    title: "Power Bi",
    tag: "BI",
  },

  {
    icon: "https://yt3.ggpht.com/-dJy8QDMV7gk/AAAAAAAAAAI/AAAAAAAAAAA/gG3Y66l9HNI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    title: "Tibco Jasper",
    tag: "BI",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/256/5968/5968364.png",
    title: "Sql Server",
    tag: "BI",
  },
  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSIS",
    tag: "BI",
  },
  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSAS",
    tag: "BI",
  },
  {
    icon: "https://styles.redditmedia.com/t5_2ty9d/styles/communityIcon_79lgkerrg9j51.png",
    title: "SSRS",
    tag: "BI",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png",
    title: "Vite js",
    tag: "frontend",
  },
];
//parcoours
export const ducument =
  "https://drive.google.com/file/d/1ONrX8RES6v6v83ZnVZyfzO-pO3bECp30/view";
export const experiences = [
  {
    id: 0,
    image: Wafasalaf,
    role: "Stagiaire en Intelligence d'Affaires",
    company: "Wafasalaf",
    date: "Juillet 2023 - Août 2023",
    desc: "Mené des réunions avec les parties prenantes pour comprendre les besoins métier en matière de solutions BI. Utilisé des outils ETL pour extraire, transformer et charger des données provenant de sources diverses dans la base de données. Collaboré avec l'équipe pour identifier les indicateurs clés de performance (KPI) et créer des visualisations pour un suivi efficace. Développé des tableaux de bord interactifs Power BI, permettant aux parties prenantes de prendre des décisions basées sur les données.",
    skills: [
      "Talend Open Studio",
      "Microsoft Power BI",
      "Python (langage de programmation)",
      "MySQL",
    ],
    doc: "https://drive.google.com/file/d/1ONrX8RES6v6v83ZnVZyfzO-pO3bECp30/view",
  },
];
