import planing from "./assets/images/planing.svg";
import math from "./assets/images/math.svg";
import finance from "./assets/images/finance.svg";
import computer from "./assets/images/computer.svg";
import basketball from "./assets/images/basketball.svg";
import speaker from "./assets/images/speaker.svg";
import ai from "./assets/images/ai.svg";
import chemistry from "./assets/images/chemistry.svg";

let courseItemsData = [
  {
    id: 1,
    picture: planing,
    title: "برنامه ریزی",
    price: "2/300/000",
  },
  {
    id: 2,
    picture: math,
    title: "ریاضی",
    price: "4/700/000",
  },
  {
    id: 3,
    picture: computer,
    title: "کامپیوتر",
    price: "10/560/000",
  },
  {
    id: 4,
    picture: finance,
    title: "حسابداری",
    price: "4/300/000",
  },
  {
    id: 5,
    picture: basketball,
    title: "ورزش بسکتبال",
    price: "300/000",
  },
  {
    id: 6,
    picture: speaker,
    title: "سخنران حرفه ای",
    price: "1/300/000",
  },
  {
    id: 7,
    picture: chemistry,
    title: "شیمی",
    price: "7/000/000",
  },
  {
    id: 8,
    picture: ai,
    title: "هوش مصنوعی",
    price: "850/000",
  },
];

let teachersData = [
  {
    id: 1,
    picture: "https://i.imgur.com/bpxkOOf.jpeg",
    teacher: " هیهاوند",
  },
  {
    id: 2,
    picture: "https://i.imgur.com/4Udi60u.jpeg",
    teacher: " حسین زاده",
  },
  {
    id: 3,
    picture: "https://i.imgur.com/pvZDesx.jpeg",
    teacher: " شیرازی",
  },
  {
    id: 4,
    picture: "https://i.imgur.com/qsyo0fI.jpeg",
    teacher: " رضایی",
  },
  {
    id: 5,
    picture: "https://i.imgur.com/O8KoPVw.jpeg",
    teacher: " جعفری نیا",
  },
  {
    id: 6,
    picture: "https://i.imgur.com/Y0XK4Az.jpeg",
    teacher: " یزدانی",
  },
  {
    id: 7,
    picture: "https://i.imgur.com/kWUWcD4.jpeg",
    teacher: "محمدی",
  },
  {
    id: 8,
    picture: "https://i.imgur.com/evZp3SD.jpeg",
    teacher: " بهرامی",
  },
  {
    id: 9,
    picture: "https://i.imgur.com/Qk86vOR.jpeg",
    teacher: "تقی زاده",
  },
];

export { teachersData, courseItemsData };
