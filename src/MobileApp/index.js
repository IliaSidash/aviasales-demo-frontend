import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import System from "./System";

import stars from "./img/stars.svg";
import android from "./img/android.png";
import windows from "./img/windows.png";
import apple from "./img/apple.png";
import phone from "./img/phone.png";

const MobileApp = styled.section`
  padding: 24px 0 0;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 46px 0 0;
    margin-top: 10px;
  }
  @media screen and (min-width: 1200px) {
    padding: 66px 0 0;
    margin-top: 0;
  }
  }
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 19px;
  @media screen and (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
    margin-bottom: 16px;
  }
`;
const Rating = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 56px;
  :before {
    content: "";
    display: inline-block;
    background: url(${stars});
    width: 70px;
    height: 10px;
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 40px;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 162px;
  @media screen and (min-width: 768px) {
    width: 234px;
  }
  @media screen and (min-width: 1200px) {
    left: 100px;
  }
`;

const Picture = styled.div`
  position: relative;
  padding-bottom: 25px;
  @media screen and (min-width: 1200px) {
    padding-bottom: 43px;
  }
`;
const systems = [
  {
    id: 1,
    img: apple,
    text: "iPhone или iPad"
  },
  {
    id: 2,
    img: android,
    text: "Android"
  },
  {
    id: 3,
    img: windows,
    text: "Windows Phone"
  }
];

export default () => (
  <MobileApp>
    <Grid>
      <Row start="md">
        <Col xs={12} mdOffset={4} md={8}>
          <Title>Скачай мобильное приложение Aviasales.ru</Title>
          <Rating>Более 103 000 оценок</Rating>
        </Col>
      </Row>
      <Row>
        <Col xsOffset={6} xs={6} mdOffset={4} md={8}>
          {systems.map(system => (
            <System key={system.id} img={system.img} text={system.text} />
          ))}
        </Col>
      </Row>
      <Picture>
        <Img src={phone} />
      </Picture>
    </Grid>
  </MobileApp>
);
