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
  padding: 24px 0 25px;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 19px;
`;
const Raiting = styled.div`
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
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: -10px;
`;

const systems = [
  {
    img: apple,
    text: "iPhone или iPad"
  },
  {
    img: android,
    text: "Android"
  },
  {
    img: windows,
    text: "Windows Phone"
  }
];

export default () => (
  <MobileApp>
    <Grid>
      <Row>
        <Col xs={12}>
          <Title>Скачай мобильное приложение Aviasales.ru</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Raiting>Более 103 000 оценок</Raiting>
        </Col>
      </Row>
      <Row>
        <Col xsOffset={6} xs={6}>
          {systems.map(system => (
            <System img={system.img} text={system.text} />
          ))}
        </Col>
      </Row>
      <Img src={phone} />
    </Grid>
  </MobileApp>
);
