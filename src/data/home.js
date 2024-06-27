import github from "../assets/icons/github.svg";
import twiter from "../assets/icons/twiter.svg";
import linkin from "../assets/icons/linkin.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import taiwland from "../assets/icons/taiwland.svg";
import sass from "../assets/icons/sass.svg";
import git from "../assets/icons/git.svg";
import vscode from "../assets/icons/vscode.svg";
import github2 from "../assets/icons/github2.svg";
import cardImg from "../assets/cardImg.svg";
import cardImg1 from "../assets/cardImg1.png";
import cardImg2 from "../assets/cardImg2.png";
import cardImg3 from "../assets/cardImg3.png"; 
import cardImg4 from "../assets/cardImg4.png";
import typescript from "../assets/icons/typescript.png";

export const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },

  {
    id: 2,
    name: "About",
    path: "/about",
  },

  {
    id: 3,
    name: "Tech Stack",
    path: "/stack",
  },

  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },

  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

export const logoData = [
  {
    img: github,
    path: "https://github.com/vohidovich5557",
  },

  {
    img: twiter,
    path: "/twiter",
  },

  {
    img: linkin,
    path: "https://www.linkedin.com/in/shohjahon-uktamov-048981294/",
  },
];

export const imgData = [
  {
    aos: "fade-right",
    img: html,
  },

  {
    aos: "fade-left",
    img: css,
  },

  {
    aos: "fade-right",
    img: js,
  },

  {
    aos: "fade-left",
    img: react,
  },

  {
    aos: "fade-right",
    img: taiwland,
  },

  {
    aos: "fade-left",
    img: sass,
  },

  {
    aos: "fade-right",
    img: vscode,
  },

  {
    aos: "fade-left",
    img: github2,
  },
  {
    aos: "fade-right",
    img: git,
  },
  {
    aos: "fade-left",
    img: typescript,
  },
];

export const cardData = [
  {
    aos: "fade-up-right",
    id: 1,
    img: cardImg1,
    title: "GiperMart",
    text: "This project is created with react js. In this project I use React Query, React Router and for sliders headless UI. In this e-commerce you can do search and also if you press title of the product it will direct you to the product detail. Inside the product detail we have Cart button this button works for adding this item to the cart.In this project we have also category button if you press this this will show you  category of brands. And inside this brand have many brand products.In the search you can search any product inside the project and if you press any product on the search it will also direct you to the product detail page.",
    stack: "HTML , JavaScript, SASS, React",
    link: "https://giper-mart-kappa.vercel.app/",
    linktext: "Live Preview",
    link2: "https://github.com/vohidovich5557/GiperMart",
    linktext2: "View Code",
    comment1:
      "Loyihada Search qismi React Query orqali tizimlashtirlgan va unda har qanday layiha ichidagi mahsulot topiladi.",
    comment2:
      "Loyihada mahsulotni nomini ustiga bosganda uni mahsulotning detallari joylashgan qisimga olib o`tadi. Va bu amal React Router orqali tizimlashtirilgan.",
    comment3:
      "Loyihada mahsulot detallari qismidagi sariq button stigma bosilgan u mahsulot korzina qismiga qo`shiladi. Va bu amal React Redux oral tizimlashtirilgan.",
    comment4:
      "Korzina qismida mahaulot sonini ko`paytirish va ummumiy narx ko`rish va mahsulot soniga qarab narx oshishi ishga tushirilgan.",
    showMore: "More About",
  },

  {
    aos: "fade-up-left",
    id: 2,
    img: cardImg2,
    title: "ChakraUI",
    text: "This project created with react router react query taiwland css toastfy. In this page you can add tables and delet edit it. ",
    stack: "HTML , JavaScript, SASS, React",
    link: "https://chakraui12.netlify.app/",
    linktext: "Live Preview",
    link2: "https://github.com/vohidovich5557/chakraUI",
    linktext2: "View Code",
    showMore: "More About",
    comment1:
      "React Query da loyihada crad qilish ya`ni get put edit lar ishlatilgan.",
    comment2:
      "Loyihada tables qismida ikkita ro`yhat mavjud ularni birga shax malumoti kiritiladi va uni o`zgartirish va o`chirish ham mumkin.",
    comment3:
      "loyihada Sign in va Sign Up qismlar mavjud unda bir marta kiritilgan email dan qayta foydalanib bolmaydi.",
    comment4:
      "Ro`yhatdan o`tgandan keyin esa user profile page qismi beriladi.",
    showMore: "More About",
  },

  {
    aos: "fade-up-right",
    id: 3,
    img: cardImg3,
    title: "Stock Market Landing Page",
    text: "This project is created by liberary React and also used with Typescript. for Design side we use Tailwand Css and some css. And in this project also we have changing lang. you can chang language by i18next",
    stack: "HTML , JavaScript, TypScript, React",
    link: "https://bukharauzex.vercel.app/",
    linktext: "Live Preview",
    link2: "https://github.com/vohidovich5557/uzex",
    linktext2: "View Code",
    showMore: "More About",
    comment1: 
     "Loyihada Stock Market uchun landing page yaratilgan. Va bu amal React Router orqali tizimlashtirilgan. Undan tashqari bu projectda Typescript ishlatilgan",
     comment2: 
      "Loyihada uchta til mavjud u tillar orqali siz xohlagan tilizni tanlab o`zingizga qulay bo`lgan holda ishlasangiz bo`ladi. Va bu amal React i18next orqali tizimlashtirilgan.",
     comment3: 
      "Loyihada form mavjud va uni to`ldirganingizda u sizning ma`lumotinggizni unga ulangan botga jo`natadi. Va bu amal reactning oziga fetching orqali qilingan.",
     comment4:
      "Loyihada Clients qismi mavjud va uning ustiga bosganingizda uni client uchun bo`lgan ma`lumotlar kelib chiqadi. va bu amal react-router orqali amalga oshirilgan.",
  },

  {
    aos: "fade-up-left",
    id: 4,
    img: cardImg4,
    title: "Realsoft AI",
    text: "This proejct is created by Realsoft AI and in this project i worked in landingPage and also some inner places. and we used aphrodite css and react js for creating full front project.",
    stack: "HTML , JavaScript, AphroditeCss, React",
    link: "https://realsoft.ai/",
    linktext: "Live Preview",
    link2: "",
    linktext2: "View Code",
    showMore: "More About",
    comment1: 
     "Loyida Realsoft AI va bu proejctda landing page yaratildi. Va bu amal React Router orqali tizimlashtirilgan. Undan tashqari bu proejctda React js ishlatilgan.",
     comment2: 
      "Loyihada Tilni tanlash uchun qo`lda yasalgan selector mavjud. Va bu amal hech qanday kutubxonasiz amalga oshirilgan.",
      comment3: 
       "Loyihada undan tashqari responsive qismi mavjud. vau har qanday qurilmaga moslashuvchan bo`ladi. va uning burger qismi bor navigation uchun",
  },

  {
    aos: "fade-up-right",
    id: 5,
    img: cardImg,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "HTML , JavaScript, SASS, React",
    link: "",
    linktext: "Live Preview",
    link2: "",
    linktext2: "View Code",
    showMore: "More About",
  },

  {
    aos: "fade-up-left",
    id: 6,
    img: cardImg,
    title: "Project Tile goes here",
    text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "HTML , JavaScript, SASS, React",
    link: "",
    linktext: "Live Preview",
    link2: "",
    linktext2: "View Code",
    showMore: "More About",
  },
];
