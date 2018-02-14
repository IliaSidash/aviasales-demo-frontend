import React from "react";
import styled from "styled-components";
import krasnodar from "./img/krasnodar.png";
import sochi from "./img/sochi.png";
import piter from "./img/piter.png";
import minvody from "./img/minvody.png";
import simferopol from "./img/simferopol.png";
import barcelona from "./img/barcelona.png";

const Card = styled.ul`
  margin: 0;
  padding: 0;
  li {
    display: block;
    margin-bottom: 12px;
    box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
  }
  img {
    max-width: 100%;
    margin-bottom: 16px;
    height: 136px;
    width: 100%;
    object-fit: cover;
  }
`;

const Row = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;
const City = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin-bottom: 5px;
  text-overflow: ellipsis;
`;
const Search = styled.a`
  font-size: 14px;
  text-align: right;
  color: #00bae8;
`;
const Country = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  text-transform: uppercase;
`;
const Date = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const cards = [
  {
    id: 1,
    src: krasnodar,
    city: "Краснодар",
    search: "Найти от 1 212 ₽",
    country: "Россия",
    date: "18 марта"
  },
  {
    id: 2,
    src: sochi,
    city: "Сочи (Адлер)",
    search: "Найти от 1 334 ₽",
    country: "Россия",
    date: "27 марта"
  },
  {
    id: 3,
    src: piter,
    city: "Санкт-Петербург",
    search: "Найти от 1 508 ₽",
    country: "Россия",
    date: "19 февраля"
  },
  {
    id: 4,
    src: minvody,
    city: "Минеральне Воды",
    search: "Найти от 2 074 ₽",
    country: "Россия",
    date: "13 марта"
  },
  {
    id: 5,
    src: simferopol,
    city: "Симферополь (Крым)",
    search: "Найти от 2 407 ₽",
    country: "Россия",
    date: "13 марта"
  },
  {
    id: 6,
    src: barcelona,
    city: "Барселона",
    search: "Найти от 4 247 ₽",
    country: "Испания",
    date: "24 марта"
  }
];

export default () => (
  <Card>
    {cards.map(card => (
      <li key={card.id}>
        <img src={card.src} alt="" />
        <Row>
          <City>{card.city}</City>
          <Search>{card.search}</Search>
        </Row>
        <Row>
          <Country>{card.country}</Country>
          <Date>{card.date}</Date>
        </Row>
      </li>
    ))}
  </Card>
);
