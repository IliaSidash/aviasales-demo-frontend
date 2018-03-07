import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import bgLine from './img/background-line.png';
import facebook from './img/facebook.png';
import rss from './img/rss.png';
import twitter from './img/twitter.png';
import vk from './img/vk.png';

import Social from './Social';

const Subscribe = styled.section`
  padding: 32px 0 61px;
  background: #fff url(${bgLine}) repeat-x center top;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    padding: 39px 0 24px;
  }
`;
const Title = styled.h2`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 4px;
  @media screen and (min-width: 1200px) {
    text-align: left;
  }
`;
const Subtitle = styled.h3`
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-bottom: 20px;
  font-weight: normal;
  @media screen and (min-width: 1200px) {
    text-align: left;
    margin-bottom: 0;
  }
`;
const Form = styled.form`
  box-sizing: border-box;
  max-width: 330px;
  margin: 0 auto;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  display: inline-block;
  @media screen and (min-width: 1200px) {
    position: relative;
    top: -10px;
    text-align: left;
  }
`;
const Input = styled.input`
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  padding: 7px 9px 7px 13px;
  max-width: 167px;
`;
const Button = styled.button`
  background: #ff8e41;
  border-radius: 2px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  border: none;
  color: #ffffff;
  padding: 8px 20px 7px;
  cursor: pointer;
`;

const socials = [
  {
    id: 1,
    href: '#',
    icon: twitter,
  },
  {
    id: 2,
    href: '#',
    icon: facebook,
  },
  {
    id: 3,
    href: '#',
    icon: vk,
  },
  {
    id: 4,
    href: '#',
    icon: rss,
  },
];

export default () => (
  <Subscribe>
    <Grid>
      <Row center="xs" start="xl" middle="xl">
        <Col xs={6} xlOffset={1} xl={5}>
          <Title>Хотите знать всё о скидках на авиабилеты?</Title>
          <Subtitle>
            Вы можете подписаться на нашу рассылку через соцсети или по электронной почте
          </Subtitle>
        </Col>
        <Col xs={12} xl={6}>
          <Social socials={socials} />
          <Form>
            <Input placeholder="Ваш email" />
            <Button>Подписаться </Button>
          </Form>
        </Col>
      </Row>
    </Grid>
  </Subscribe>
);
