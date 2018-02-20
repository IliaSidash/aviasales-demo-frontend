import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import tickets from "./data";

import Ticket from "./Ticket";

const Result = styled.div`
  background-color: #eaeaea;
  padding: 8px 0 16px;
`;

const ButtonUp = styled.button`
  background: #00ace2;
  opacity: 0.5;
  border-radius: 100px;
  border: none;
  color: #fff;
  font-weight: 900;
  line-height: normal;
  font-size: 14px;
  text-transform: uppercase;
  padding: 6px 16px 5px;
  margin: 0 auto 16px;
  display: block;
  cursor: pointer;
`;

const ButtonFilter = ButtonUp.extend`
  padding: 10px 24px 11px;
  font-size: 16px;
  text-transform: none;
  margin: 12px auto 0;
  opacity: 1;
`;

export default () => (
  <Result>
    <Grid>
      <ButtonUp>Наверх</ButtonUp>
      {tickets.map(ticket => (
        <Ticket
          key={ticket.id}
          titleText={ticket.title.text}
          titleBgColor={ticket.title.bgColor}
          emoji={ticket.title.emoji}
          price={ticket.price}
          logoSrc={ticket.logoSrc}
          departOut={ticket.depart.out}
          departIn={ticket.depart.in}
          departDuration={ticket.depart.duration}
          departStop={ticket.depart.stop}
          returnOut={ticket.return.out}
          returnIn={ticket.return.in}
          returnDuration={ticket.return.duration}
          returnStop={ticket.return.stop}
        />
      ))}
    </Grid>
    <ButtonFilter>Фильтровать</ButtonFilter>
  </Result>
);
