import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import compas from './img/compas.svg';
import edit from './img/edit.svg';
import anywhere from './img/anywhere.svg';
import history from './img/history.svg';
import nightLive from './img/night-live.svg';
import relax from './img/relax.svg';
import shoping from './img/shoping.svg';
import sun from './img/sun.svg';
import krasnodar from './img/krasnodar.png';
import sochi from './img/sochi.png';
import piter from './img/piter.png';
import minvody from './img/minvody.png';
import simferopol from './img/simferopol.png';
import barcelona from './img/barcelona.png';
import rus from './img/ru.png';
import spa from './img/is.png';

import Filter from './Filter';
import Card from './Card';

const Derections = styled.section`
  text-align: center;
  padding: 40px 0 28px;
  @media screen and (min-width: 768px) {
    padding: 56px 0 25px;
  }
`;

const Img = styled.img`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 437px;
    font-size: 24px;
    margin: 0 auto 56px;
    line-height: 36px;
  }
`;

const Link = styled.a`
  display: block;
  color: #00ace2;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-left: 7px;
  }
`;

const Edit = styled.img`
  margin-left: 5px;
`;

const filters = [
  {
    id: 1,
    src: anywhere,
    alt: 'anywhere',
    href: '#',
    text: 'Куда угодно',
  },
  {
    id: 2,
    src: sun,
    alt: 'sun',
    href: '#',
    text: 'Солнце и море',
  },
  {
    id: 3,
    src: shoping,
    alt: 'shoping',
    href: '#',
    text: 'ШОПИНГ, ГОРОД',
  },
  {
    id: 4,
    src: history,
    alt: 'history',
    href: '#',
    text: 'КУЛЬТУРА И ИСТОРИЯ',
  },
  {
    id: 5,
    src: nightLive,
    alt: 'night-live',
    href: '#',
    text: 'НОЧНАЯ ЖИЗНЬ',
  },
  {
    id: 6,
    src: relax,
    alt: 'relax',
    href: '#',
    text: 'ОТДЫХ С ДЕТЬМИ',
  },
];

const cards = [
  {
    id: 1,
    src: krasnodar,
    flag: rus,
    alt: 'russia',
    city: 'Краснодар',
    search: 'Найти от 1 212 ₽',
    country: 'Россия',
    date: '18 марта',
  },
  {
    id: 2,
    src: sochi,
    flag: rus,
    city: 'Сочи (Адлер)',
    search: 'Найти от 1 334 ₽',
    country: 'Россия',
    date: '27 марта',
  },
  {
    id: 3,
    src: piter,
    flag: rus,
    alt: 'russia',
    city: 'Санкт-Петербург',
    search: 'Найти от 1 508 ₽',
    country: 'Россия',
    date: '19 февраля',
  },
  {
    id: 4,
    src: minvody,
    flag: rus,
    alt: 'russia',
    city: 'Минеральне Воды',
    search: 'Найти от 2 074 ₽',
    country: 'Россия',
    date: '13 марта',
  },
  {
    id: 5,
    src: simferopol,
    flag: rus,
    alt: 'russia',
    city: 'Симферополь (Крым)',
    search: 'Найти от 2 407 ₽',
    country: 'Россия',
    date: '13 марта',
  },
  {
    id: 6,
    src: barcelona,
    flag: spa,
    alt: 'spain',
    city: 'Барселона',
    search: 'Найти от 4 247 ₽',
    country: 'Испания',
    date: '24 марта',
  },
];

export default () => (
  <Derections>
    <Grid>
      <Img src={compas} />
      <Title>
        Популярные направления перелетов из города
        <Link href="./">
          Москва
          <Edit src={edit} alt="edit" />
        </Link>
      </Title>
      {filters.map(filter => (
        <Filter
          key={filter.id}
          src={filter.src}
          alt={filter.src}
          href={filter.href}
          text={filter.text}
        />
      ))}
      <Row center="md">
        {cards.map(card => (
          <Col key={card.id} xs={12} md={10} xl={5}>
            <Card
              src={card.src}
              flag={card.flag}
              alt={card.alt}
              city={card.city}
              search={card.search}
              country={card.country}
              date={card.date}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  </Derections>
);
