import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import compas from "./img/compas.svg";
import edit from "./img/edit.svg";
import anywhere from "./img/anywhere.svg";
import history from "./img/history.svg";
import nightLive from "./img/night-live.svg";
import relax from "./img/relax.svg";
import shoping from "./img/shoping.svg";
import sun from "./img/sun.svg";

import Card from "./Card";

const Derections = styled.section`
  text-align: center;
  padding: 40px 0 28px;
`;

const Img = styled.img`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
  a {
    display: block;
    color: #00ace2;
    text-decoration: none;
    :after {
    }
  }
  img {
    margin-left: 5px;
  }
`;

const Icon = styled.div`
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-derection: column;
  justify-content: center;
  margin-bottom: 21px;
  }
`;

const IconText = styled.a`
  text-align: center;
  text-transform: uppercase;
  color: #00ace2;
  line-height: 20px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid transparent;
  margin-bottom: 21px;
  padding: 0 9px;
  :hover {
    color: #5c5c5c;
    border-color: #00ace2;
  }
`;

export default () => (
  <Derections>
    <Grid>
      <Row>
        <Col xs={12}>
          <Img src={compas} />
        </Col>
        <Col xs={12}>
          <Title>
            Популярные направления перелетов из города
            <a href="#">
              Москва
              <img src={edit} alt="edit" />
            </a>
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Icon>
            <img src={anywhere} alt="anywhere" />
          </Icon>
          <IconText href="#">Куда угодно</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <img src={sun} alt="sun" />
          </Icon>
          <IconText href="#">Солнце и море</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <img src={shoping} alt="shoping" />
          </Icon>
          <IconText href="#">Шопинг, Город</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <img src={history} alt="history" />
          </Icon>
          <IconText href="#">Культура и история</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <img src={nightLive} alt="night-live" />
          </Icon>
          <IconText href="#">Ночная жизнь</IconText>
        </Col>
        <Col xs={4}>
          <Icon>
            <img src={relax} alt="relax" />
          </Icon>
          <IconText href="#">Отдых с детьми</IconText>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card />
        </Col>
      </Row>
    </Grid>
  </Derections>
);
