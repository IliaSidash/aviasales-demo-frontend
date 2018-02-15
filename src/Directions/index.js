import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import compas from "./img/compas.svg";
import edit from "./img/edit.svg";
import anywhere from "./img/anywhere.svg";
import history from "./img/history.svg";
import nightLive from "./img/night-live.svg";
import relax from "./img/relax.svg";
import shoping from "./img/shoping.svg";
import sun from "./img/sun.svg";
import krasnodar from "./img/krasnodar.png";
import sochi from "./img/sochi.png";
import piter from "./img/piter.png";
import minvody from "./img/minvody.png";
import simferopol from "./img/simferopol.png";
import barcelona from "./img/barcelona.png";

import Card from "./Card";

const Derections = styled.section`
  text-align: center;
  padding: 40px 0 28px;
`;

const Img = styled.img`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

const TitleLink = styled.a`
  display: block;
  color: #00ace2;
  text-decoration: none;
`;

const Edit = styled.img`
  margin-left: 5px;
`;

const Icon = styled.div`
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-derection: column;
  justify-content: center;
  margin-bottom: 21px;
  }
`;

const Picture = styled.img``;

const IconText = styled.a`
  text-align: center;
  text-transform: uppercase;
  color: #00ace2;
  line-height: 20px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid transparent;
  margin-bottom: 21px;
  padding: 0 9px;
  :hover {
    color: #5c5c5c;
    border-color: #00ace2;
  }
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
  <Derections>
    <Grid>
      <Row>
        <Col xs={12}>
          <Img src={compas} />
        </Col>
        <Col xs={12}>
          <Title>
            Популярные направления перелетов из города
            <TitleLink href="#">
              Москва
              <Edit src={edit} alt="edit" />
            </TitleLink>
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Icon>
            <Picture src={anywhere} alt="anywhere" />
          </Icon>
          <IconText href="#">Куда угодно</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <Picture src={sun} alt="sun" />
          </Icon>
          <IconText href="#">Солнце и море</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <Picture src={shoping} alt="shoping" />
          </Icon>
          <IconText href="#">Шопинг, Город</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <Picture src={history} alt="history" />
          </Icon>
          <IconText href="#">Культура и история</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <Picture src={nightLive} alt="night-live" />
          </Icon>
          <IconText href="#">Ночная жизнь</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <Picture src={relax} alt="relax" />
          </Icon>
          <IconText href="#">Отдых с детьми</IconText>
        </Col>
      </Row>
      <Row>
        {cards.map(card => (
          <Col xs={12}>
            <Card
              key={card.id}
              src={card.src}
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
