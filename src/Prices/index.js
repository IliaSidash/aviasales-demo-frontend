import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import icon from "./img/calen.svg";
import Card from "./Card";

import ru from "./img/flag-ru.svg";
import am from "./img/flag-am.svg";
import md from "./img/flag-md.svg";

const Prices = styled.section`
  padding: 60px 0 40px;
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
        from: "Из Москвы",
        coast: "от 4 813"
      },
      {
        from: "Из Санкт-Петербурга",
        coast: "от 7 857"
      },
      {
        from: "Из Новосибирска",
        coast: "от 15 127"
      },
      {
        from: "Из Екатеринбурга",
        coast: "от 9 275"
      },
      {
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
        from: "Из Москвы",
        coast: "от 6 758"
      },
      {
        from: "Из Санкт-Петербурга",
        coast: "от 9 932"
      },
      {
        from: "Из Сочи",
        coast: "от 11 951"
      },
      {
        from: "Из Краснодара",
        coast: "от 11 741"
      },
      {
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
        from: "Из Москвы",
        coast: "от 8 319"
      },
      {
        from: "Из Санкт-Петербурга",
        coast: "от 10 800"
      },
      {
        from: "Из Краснодара",
        coast: "от 12 098"
      },
      {
        from: "Из Сургута",
        coast: "от 16 277"
      },
      {
        from: "Из Нового Уренгоя",
        coast: "от 15 987"
      }
    ]
  }
];

export default () => (
  <Prices>
    <Grid>
      <Row>
        <Col xs={12}>
          <Icon>
            <img src={icon} alt="" />
          </Icon>
        </Col>
        <Col xs={12}>
          <Title>Лучшие цены на авиабилеты за последний месяц</Title>
        </Col>
      </Row>
      <Row>
        {data.map(i => (
          <Col xs={12} key={i.id}>
            <Card
              src={i.src}
              city={i.city}
              country={i.country}
              prices={i.prices}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <Text>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Offer>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </Offer>
        </Col>
      </Row>
    </Grid>
  </Prices>
);
