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
`;
const Title = styled.h2`
  ont-weight: 500;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const Link = styled.a`
  display: block;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  text-decoration-line: underline;
  margin-bottom: 8px;
`;

const tickets = [
  {
    title: "Билеты от 499 рублей!",
    icon: "",
    company: pobeda,
    cost: "499",
    daysLeft: "Осталось 45 дней",
    text: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    title: "Узнать подробности",
    icon: icon,
    company: lufthansa,
    cost: "20 680",
    daysLeft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
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
        <Col xs={12}>
          <Title>Спецпредложения на авиабилеты</Title>
        </Col>
      </Row>
      <Row>
        {tickets.map(ticket => (
          <Col xs={12}>
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
        <Col xs={12}>
          <Text>
            <Link href="#">Смотреть все спецпредложения</Link>
            * средняя цена по направлению
          </Text>
        </Col>
      </Row>
    </Grid>
  </Offer>
);
