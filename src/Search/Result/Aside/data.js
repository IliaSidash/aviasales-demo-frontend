const filters = [
  {
    id: 1,
    name: 'Пересадки',
    checkboxes: [
      {
        id: 1,
        text: 'Все',
        price: '',
      },
      {
        id: 2,
        text: 'Без пересадок',
        price: '7 712 ₽',
      },
      {
        id: 3,
        text: '1 пересадка',
        price: '11 150 ₽',
      },
      {
        id: 4,
        text: '2 пересадки',
        price: '16 821 ₽',
      },
      {
        id: 5,
        text: '3 пересадки',
        price: '23 986 ₽',
      },
    ],
  },
  {
    id: 2,
    name: 'ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ',
    intervals: [
      {
        id: 1,
        from: {
          city: 'Москва',
          start: 1519412700000,
          end: 1519497900000,
        },
        to: {
          city: 'Барселона',
          start: 1519423500000,
          end: 1519635000000,
        },
      },
      {
        id: 2,
        from: {
          city: 'Барселона',
          start: 1520038800000,
          end: 1520102700000,
        },
        to: {
          city: 'Москва',
          start: 1520071200000,
          end: 1520225700000,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Багаж',
  },
  {
    id: 4,
    name: 'Длительность пересадки',
  },
  {
    id: 5,
    name: 'Время в пути',
    travelTime: [
      {
        id: 1,
        from: 'Москва',
        to: 'Барселона',
        start: 'от 04ч 20м',
        end: 'до 48ч 50м',
      },
      {
        id: 2,
        from: 'Барселона',
        to: 'Москва',
        start: 'от 04ч 10м',
        end: 'до 41ч 20м',
      },
    ],
  },
  {
    id: 6,
    name: 'Авиакомпании',
    text: 'Все',
    price: '',
    alliances: [
      {
        id: 1,
        text: 'Все',
        price: '',
      },
      {
        id: 2,
        text: 'Star Alliance',
        price: '11 150 ₽',
      },
      {
        id: 3,
        text: 'OneWorld',
        price: '12 370 ₽',
      },
      {
        id: 4,
        text: 'SkyTeam',
        price: '16 290 ₽',
      },
    ],
    companies: [
      {
        id: 1,
        text: 'Все',
        price: '',
      },
      {
        id: 2,
        text: 'Aegean Airlines',
        price: '20 357 ₽',
      },
      {
        id: 3,
        text: 'Air Algerie',
        price: '29 105 ₽',
      },
      {
        id: 4,
        text: 'Air Europa',
        price: '22 202 ₽',
      },
      {
        id: 5,
        text: 'Air France',
        price: '17 050 ₽',
      },
      {
        id: 6,
        text: 'Air Moldova',
        price: '22 613 ₽',
      },
      {
        id: 7,
        text: 'Alitalia',
        price: '22 717 ₽',
      },
      {
        id: 8,
        text: 'Alitalia CityLiner',
        price: '20 271 ₽',
      },
      {
        id: 9,
        text: 'Belle Air',
        price: '18 371 ₽',
      },
      {
        id: 10,
        text: 'British Airways',
        price: '23 839 ₽',
      },
      {
        id: 11,
        text: 'Brussels Airlines',
        price: '11 150 ₽',
      },
      {
        id: 12,
        text: 'Bulgaria Air',
        price: '20 114 ₽',
      },
    ],
  },
  {
    id: 7,
    name: 'аэропорты',
  },
  {
    id: 8,
    name: 'аэропорт пересадки',
    count: 71,
  },
  {
    id: 9,
    name: 'агенства',
    count: 26,
  },
];

export default filters;
