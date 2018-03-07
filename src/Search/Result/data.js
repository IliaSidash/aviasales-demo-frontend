import rossiya from './img/rossiya.png';
import fly from './img/fly.png';
import nordwind from './img/nordwind.png';
import nordwindAirlines from './img/nordwind-airlines.png';
import redwings from './img/redwings.png';
import redwingsLogo from './img/redwings-logo.png';
import rossiyaLogo from './img/rossiya-logo.png';
import airlines from './img/airlines.png';

export default [
  {
    id: 1,
    type: 'cheapest',
    price: 7712,
    companies: [
      {
        logoSrc: rossiya,
        alt: 'rossiya',
      },
    ],
    depart: {
      out: 1519412700000,
      in: 1519423500000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520055300000,
      in: 1520079000000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 2,
    type: 'fastest',
    price: 9269,
    companies: [
      {
        logoSrc: fly,
        alt: 'fly',
      },
    ],
    depart: {
      out: 1519413300000,
      in: 1519423800000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520055900000,
      in: 1520079300000,
      stops: ['CDG'],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 3,
    type: 'best',
    price: 8029,
    companies: [
      {
        logoSrc: nordwind,
        alt: 'nordwind',
      },
    ],
    depart: {
      out: 1519431300000,
      in: 1519441800000,
      stops: ['CDG', 'CDG'],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520073900000,
      in: 1520097300000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 4,
    price: 8164,
    companies: [
      {
        logoSrc: nordwindAirlines,
        alt: 'nordwind airlines',
      },
    ],
    depart: {
      out: 1519431300000,
      in: 1519441800000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520073900000,
      in: 1520097300000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 5,
    price: 8240,
    companies: [
      {
        logoSrc: redwings,
        alt: 'red wings',
      },
    ],
    depart: {
      out: 1519455600000,
      in: 1519464600000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520074800000,
      in: 1520097000000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 6,
    price: 9108,
    companies: [
      {
        id: 1,
        logoSrc: redwingsLogo,
        alt: 'red wings',
      },
      {
        id: 2,
        logoSrc: rossiyaLogo,
        alt: 'rossiya',
      },
    ],
    depart: {
      out: 1519430700000,
      in: 1519441500000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520074800000,
      in: 1520097000000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  {
    id: 7,
    price: 9485,
    companies: [
      {
        id: 1,
        logoSrc: rossiyaLogo,
        alt: 'rossiya',
      },
      {
        id: 2,
        logoSrc: airlines,
        alt: 'airlines',
      },
    ],
    depart: {
      out: 1519430700000,
      in: 1519441500000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      out: 1520076000000,
      in: 1520098500000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
];
