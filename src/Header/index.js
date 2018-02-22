import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import Logo from "./Logo";
import Form from "./Form";

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

const Header = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding: 12px 0 66px;
  @media screen and (min-width: 768px) {
    padding-bottom: 122px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 254px;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Logo />
      <Title>Поиск дешевых авиабилетов</Title>
      <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
      <Row center="xs">
        <Col xs={12} md={10}>
          <Form />
        </Col>
      </Row>
    </Grid>
  </Header>
);
