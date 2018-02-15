import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logo from "./img/logo.svg";

import Form from "./Form";

const Logo = styled.img`
  margin-bottom: 47px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
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
`;

export default () => (
  <Header>
    <Grid>
      <Row>
        <Col xs={12}>
          <Logo src={logo} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Title>Поиск дешевых авиабилетов</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form />
        </Col>
      </Row>
    </Grid>
  </Header>
);
