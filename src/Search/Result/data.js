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
    price: 7712,
    company: {
      logoSrc: rossiya,
      alt: "rossiya"
    },
    depart: {
      out: 1519412700000,
      in: 1519423500000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520055300000,
      in: 1520079000000,
      stop: "Прямой",
      cityFrom: "Барселона",
      cityTo: "Москва",
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
    price: 9269,
    company: {
      logoSrc: fly,
      alt: "fly"
    },
    depart: {
      out: 1519413300000,
      in: 1519423800000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520055900000,
      in: 1520079300000,
      stop: "CDG",
      cityFrom: "Барселона",
      cityTo: "Москва",
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
    price: 8029,
    company: {
      logoSrc: nordwind,
      alt: "nordwind"
    },
    depart: {
      out: 1519431300000,
      in: 1519441800000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520073900000,
      in: 1520097300000,
      stop: "CDG",
      cityFrom: "Барселона",
      cityTo: "Москва",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 4,
    price: 8164,
    company: {
      logoSrc: nordwindAirlines,
      alt: "nordwind airlines"
    },
    depart: {
      out: 1519431300000,
      in: 1519441800000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520073900000,
      in: 1520097300000,
      stop: "Прямой",
      cityFrom: "Барселона",
      cityTo: "Москва",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 5,
    price: 8240,
    company: {
      logoSrc: redwings,
      alt: "red wings"
    },
    depart: {
      out: 1519455600000,
      in: 1519464600000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520074800000,
      in: 1520097000000,
      stop: "Прямой",
      cityFrom: "Барселона",
      cityTo: "Москва",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 6,
    price: 9108,
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
      out: 1519430700000,
      in: 1519441500000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520074800000,
      in: 1520097000000,
      stop: "Прямой",
      cityFrom: "Барселона",
      cityTo: "Москва",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  },
  {
    id: 7,
    price: 9485,
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
      out: 1519430700000,
      in: 1519441500000,
      stop: "Прямой",
      cityFrom: "Москва",
      cityTo: "Барселона",
      airoportFrom: "VKO",
      airoportIn: "BCN"
    },
    return: {
      out: 1520076000000,
      in: 1520098500000,
      stop: "Прямой",
      cityFrom: "Барселона",
      cityTo: "Москва",
      airoportFrom: "BCN",
      airoportIn: "VKO"
    }
  }
];
