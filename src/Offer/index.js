import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ticket from "./Ticket";
import pobeda from "./img/pobeda.png";
import lufthansa from "./img/lufthansa.png";
import icon from "./img/icon.png";

const Offer = styled.section`
  padding: 16px 0 24px;
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  @media screen and (min-width: 768px) {
    padding: 24px 0;
  }
`;
const Title = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    line-height: 42px;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    text-align: right;
    margin-top: 24px;
  }
`;

const Link = styled.a`
  display: block;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  text-decoration-line: underline;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    float: left;
  }
`;

const tickets = [
  {
    id: 1,
    title: "Билеты от 499 рублей!",
    icon: "",
    company: pobeda,
    cost: "499",
    daysLeft: "Осталось 45 дней",
    text: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    id: 2,
    title: "В Нью-Йорк от 20 680 ₽",
    icon: icon,
    company: lufthansa,
    cost: "20 680",
    daysLeft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    id: 3,
    title: "В Лос-Анджелес от…",
    icon: icon,
    company: lufthansa,
    cost: "20 360",
    daysLeft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

export default () => (
  <Offer>
    <Grid>
      <Row>
        <Col xs={12} xlOffset={1} xl={10}>
          <Title>Спецпредложения на авиабилеты</Title>
        </Col>
      </Row>
      <Row center="xl">
        {tickets.map(ticket => (
          <Col key={ticket.id} xs={12} md={4} xl={3}>
            <Ticket
              title={ticket.title}
              icon={ticket.icon}
              company={ticket.company}
              cost={ticket.cost}
              daysLeft={ticket.daysLeft}
              text={ticket.text}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12} xlOffset={1} xl={10}>
          <Text>
            <Link href="#">Смотреть все спецпредложения</Link>
            * средняя цена по направлению
          </Text>
        </Col>
      </Row>
    </Grid>
  </Offer>
);
