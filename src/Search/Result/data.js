import rossiya from "./img/rossiya.png";
import fly from "./img/fly.png";
import nordwind from "./img/nordwind.png";
import nordwindAirlines from "./img/nordwind-airlines.png";
import redwings from "./img/redwings.png";
import redwingsLogo from "./img/redwings-logo.png";
import rossiyaLogo from "./img/rossiya-logo.png";
import airlines from "./img/airlines.png";

export default [
  {
    id: 1,
    title: {
      text: "Самый дешевый",
      emoji: "🤑",
      bgColor: "#83D40B",
      display: "block"
    },
    price: "7 712 ₽",
    logoSrc: rossiya,
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой"
    },
    return: {
      out: "10:35",
      in: "17:10",
      duration: "4 ч 35 м",
      stop: "Прямой"
    }
  },
  {
    id: 2,
    title: {
      text: "Самый быстрый",
      emoji: "⚡️",
      bgColor: "#AF7542",
      display: "block"
    },
    price: "9 269 ₽",
    logoSrc: fly,
    depart: {
      out: "07:30",
      in: "09:50",
      duration: "4 ч 20 м",
      stop: "Прямой"
    },
    return: {
      out: "11:20",
      in: "17:35",
      duration: "4 ч 15 м",
      stop: "CDG"
    }
  },
  {
    id: 3,
    title: {
      text: "Лучший билет",
      emoji: "😍",
      bgColor: "#C279D1",
      display: "block"
    },
    price: "8 029 ₽",
    logoSrc: nordwind,
    depart: {
      out: "00:15",
      in: "03:10",
      duration: "4 ч 55 м",
      stop: "Прямой"
    },
    return: {
      out: "10:45",
      in: "17:15",
      duration: "4 ч 30 м",
      stop: "CDG"
    }
  },
  {
    id: 4,
    title: {
      text: "",
      emoji: "",
      bgColor: "",
      display: "none"
    },
    price: "8 164 ₽",
    logoSrc: nordwindAirlines,
    depart: {
      out: "00:15",
      in: "03:10",
      duration: "4 ч 55 м",
      stop: "Прямой"
    },
    return: {
      out: "10:45",
      in: "17:15",
      duration: "4 ч 30 м",
      stop: "Прямой"
    }
  },
  {
    id: 5,
    title: {
      text: "",
      emoji: "",
      bgColor: "",
      display: "none"
    },
    price: "8 240 ₽",
    logoSrc: redwings,
    depart: {
      out: "07:00",
      in: "09:30",
      duration: "4 ч 30 м",
      stop: "Прямой"
    },
    return: {
      out: "11:00",
      in: "17:10",
      duration: "4 ч 10 м",
      stop: "Прямой"
    }
  },
  {
    id: 6,
    title: {
      text: "",
      emoji: "",
      bgColor: "",
      display: "none"
    },
    price: "9 108 ₽",
    logoSrc: redwings,
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой"
    },
    return: {
      out: "11:00",
      in: "17:10",
      duration: "4 ч 10 м",
      stop: "Прямой"
    }
  },
  {
    id: 7,
    title: {
      text: "",
      emoji: "",
      bgColor: ""
    },
    price: "9 485 ₽",
    logoSrc: redwings,
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой"
    },
    return: {
      out: "11:20",
      in: "17:35",
      duration: "4 ч 15 м",
      stop: "Прямой"
    }
  }
];
