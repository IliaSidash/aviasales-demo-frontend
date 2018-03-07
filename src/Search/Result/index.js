import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import tickets from './data';
import settings from './img/settings.svg';

import Ticket from './Ticket/';
import Aside from './Aside/';

const Result = styled.div`
  background-color: #eaeaea;
  padding: 8px 0 16px;
  @media screen and (min-width: 1200px) {
    padding-top: 56px;
  }
`;
const Settings = styled.button`
  background: #23a9f6;
  border-radius: 10px;
  border: none;
  padding: 15px 24px;
  margin: 16px auto;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const Icon = styled.img``;

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
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ButtonFilter = ButtonUp.extend`
  padding: 10px 24px 11px;
  font-size: 16px;
  text-transform: none;
  margin: 12px auto 0;
  opacity: 1;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  border: none;
  color: #ffffff;
  background: #00acde;
  border-radius: 4px;
  display: none;
  padding: 18px 0 19px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default () => (
  <Result>
    <Grid>
      <Row>
        <Col xs={0} xl={3}>
          <Aside />
        </Col>
        <Col xs={12} xl={8}>
          <Settings>
            <Icon src={settings} />
          </Settings>
          <ButtonUp>Наверх</ButtonUp>
          {tickets.map(ticket => (
            <Ticket
              id={ticket.id}
              type={ticket.type}
              price={ticket.price}
              companies={ticket.companies}
              depart={ticket.depart}
              return={ticket.return}
            />
          ))}
          <ButtonFilter>Фильтровать</ButtonFilter>
          <Button>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</Button>
        </Col>
      </Row>
    </Grid>
  </Result>
);
