import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import icon from "./img/calen.svg";
import Card from "./Card";

import ru from "./img/ru.png";
import am from "./img/am.png";
import md from "./img/md.png";

const Prices = styled.section`
  padding: 60px 0 40px;
  @media screen and (min-width: 768px) {
    padding: 32px 0 60px;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 20px;
  width: 60px;
  height: 60px;
  background: #e2f8ff;
  border-radius: 50px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 40px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

const Text = styled.p`
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  margin: 40px 0 24px;
`;

const Offer = styled.p`
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
`;

const data = [
  {
    id: 1,
    src: ru,
    city: "Симферополь (Крым)",
    country: "Крым",
    prices: [
      {
        id: 1,
        from: "Из Москвы",
        coast: "от 4 813"
      },
      {
        id: 2,
        from: "Из Санкт-Петербурга",
        coast: "от 7 857"
      },
      {
        id: 3,
        from: "Из Новосибирска",
        coast: "от 15 127"
      },
      {
        id: 4,
        from: "Из Екатеринбурга",
        coast: "от 9 275"
      },
      {
        id: 5,
        from: "Из Челябинска",
        coast: "от 9 148"
      }
    ]
  },
  {
    id: 2,
    src: am,
    city: "Ереван",
    country: "Армения",
    prices: [
      {
        id: 1,
        from: "Из Москвы",
        coast: "от 6 758"
      },
      {
        id: 2,
        from: "Из Санкт-Петербурга",
        coast: "от 9 932"
      },
      {
        id: 3,
        from: "Из Сочи",
        coast: "от 11 951"
      },
      {
        id: 4,
        from: "Из Краснодара",
        coast: "от 11 741"
      },
      {
        id: 5,
        from: "Из Ростова-на-Дону",
        coast: "от 11 956"
      }
    ]
  },
  {
    id: 3,
    src: md,
    city: "Кишинёв",
    country: "Молдавия",
    prices: [
      {
        id: 1,
        from: "Из Москвы",
        coast: "от 8 319"
      },
      {
        id: 2,
        from: "Из Санкт-Петербурга",
        coast: "от 10 800"
      },
      {
        id: 3,
        from: "Из Краснодара",
        coast: "от 12 098"
      },
      {
        id: 4,
        from: "Из Сургута",
        coast: "от 16 277"
      },
      {
        id: 5,
        from: "Из Нового Уренгоя",
        coast: "от 15 987"
      }
    ]
  }
];

export default () => (
  <Prices>
    <Grid>
      <Icon>
        <img src={icon} alt="" />
      </Icon>
      <Title>Лучшие цены на авиабилеты за последний месяц</Title>
      <Row center="md">
        <Col xs={12} md={10}>
          {data.map(i => (
            <Card
              key={i.id}
              src={i.src}
              city={i.city}
              country={i.country}
              prices={i.prices}
            />
          ))}
        </Col>
      </Row>
      <Row center="md">
        <Col xs={12} md={10}>
          <Text>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </Text>
        </Col>
      </Row>
      <Offer>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </Offer>
    </Grid>
  </Prices>
);
