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
      bgColor: "#83D40B"
    },
    price: "7 712 ₽",
    company: {
      logoSrc: rossiya,
      alt: "rossiya"
    },
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "10:35",
      in: "17:10",
      duration: "4 ч 35 м",
      stop: "Прямой",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 2,
    title: {
      text: "Самый быстрый",
      emoji: "⚡️",
      bgColor: "#AF7542"
    },
    price: "9 269 ₽",
    company: {
      logoSrc: fly,
      alt: "fly"
    },
    depart: {
      out: "07:30",
      in: "09:50",
      duration: "4 ч 20 м",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "11:20",
      in: "17:35",
      duration: "4 ч 15 м",
      stop: "CDG",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 3,
    title: {
      text: "Лучший билет",
      emoji: "😍",
      bgColor: "#C279D1"
    },
    price: "8 029 ₽",
    company: {
      logoSrc: nordwind,
      alt: "nordwind"
    },
    depart: {
      out: "00:15",
      in: "03:10",
      duration: "4 ч 55 м",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "10:45",
      in: "17:15",
      duration: "4 ч 30 м",
      stop: "CDG",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 4,
    price: "8 164 ₽",
    company: {
      logoSrc: nordwindAirlines,
      alt: "nordwind airlines"
    },
    depart: {
      out: "00:15",
      in: "03:10",
      duration: "4 ч 55 м",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "10:45",
      in: "17:15",
      duration: "4 ч 30 м",
      stop: "Прямой",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 5,
    price: "8 240 ₽",
    company: {
      logoSrc: redwings,
      alt: "red wings"
    },
    depart: {
      out: "07:00",
      in: "09:30",
      duration: "4 ч 30 м",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "11:00",
      in: "17:10",
      duration: "4 ч 10 м",
      stop: "Прямой",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 6,
    price: "9 108 ₽",
    company: {
      double: [
        {
          id: 1,
          logoSrc: redwingsLogo,
          alt: "red wings"
        },
        {
          id: 2,
          logoSrc: rossiyaLogo,
          alt: "rossiya"
        }
      ]
    },
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "11:00",
      in: "17:10",
      duration: "4 ч 10 м",
      stop: "Прямой",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 7,
    price: "9 485 ₽",
    company: {
      double: [
        {
          id: 1,
          logoSrc: rossiyaLogo,
          alt: "rossiya"
        },
        {
          id: 2,
          logoSrc: airlines,
          alt: "airlines"
        }
      ]
    },
    depart: {
      out: "00:05",
      in: "03:05",
      duration: "5 ч",
      stop: "Прямой",
      cityFrom: "Москва",
      dateFrom: "24 фев 2018, Сб",
      cityTo: "Барселона",
      dateTo: "24 фев 2018, Сб",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: "11:20",
      in: "17:35",
      duration: "4 ч 15 м",
      stop: "Прямой",
      cityFrom: "Барселона",
      dateFrom: "3 мар 2018, Сб",
      cityTo: "Москва",
      dateTo: "3 мар 2018, Сб",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  }
];
