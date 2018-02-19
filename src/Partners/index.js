import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import aeroflot from "./img/aeroflot.png";
import sseven from "./img/sseven.png";
import oneTwo from "./img/one-two-trip.png";
import korean from "./img/korean-air.png";
import eliva from "./img/elivaline.png";

import Slider from "./Slider";

const Partners = styled.div`
  display: none;
  padding: 24px 0 32px;
  background: #ffffff;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    padding: 22px 0 28px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 24px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 15px;
  }
`;

const partners = [
  {
    id: 1,
    src: aeroflot,
    alt: "aeroflot"
  },
  {
    id: 2,
    src: sseven,
    alt: "sseven"
  },
  {
    id: 3,
    src: oneTwo,
    alt: "one two trtip"
  },
  {
    id: 4,
    src: korean,
    alt: "korean air"
  },
  {
    id: 5,
    src: eliva,
    alt: "elivaline"
  }
];

export default () => (
  <Partners>
    <Grid>
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
      <Row center="md">
        <Col md={12} xl={10}>
          <Slider partners={partners} />
        </Col>
      </Row>
    </Grid>
  </Partners>
);
