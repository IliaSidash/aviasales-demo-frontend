import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import vk from "./img/vk.png";
import face from "./img/face.png";
import inst from "./img/inst.png";
import twit from "./img/twit.png";
import viber from "./img/viber.png";
import apple from "./img/apple.png";
import play from "./img/play.png";
import windowsPhone from "./img/windows-phone.png";

import Menu from "./Menu";
import Nav from "./Nav";
import Social from "./Social";
import DownloadApp from "./DownloadApp";

const Footer = styled.footer`
  padding: 32px 0 24px;
`;

const Hr = styled.div`
  height: 1px;
  border-bottom: 1px solid #e0e6e8;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #5b5b5c;
  margin: 12px 0 16px;
  font-weight: normal;
`;

const Copyright = styled.div`
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  text-align: center;
  margin-top: 16px;
`;

const menu = [
  {
    id: 1,
    title: "СТРАНЫ",
    links: [
      { href: "#", text: "Россия" },
      { href: "#", text: "Таиланд" },
      { href: "#", text: "Черногория" },
      { href: "#", text: "Кипр" },
      { href: "#", text: "Болгария" },
      { href: "#", text: "Грузия" }
    ],
    all: { href: "#", text: "Все страны →" }
  },
  {
    id: 2,
    title: "ГОРОДА",
    links: [
      { href: "#", text: "Москва" },
      { href: "#", text: "Санкт-Петербург" },
      { href: "#", text: "Симферополь" },
      { href: "#", text: "Адлер" },
      { href: "#", text: "Екатеринбург" },
      { href: "#", text: "Лондон" }
    ],
    all: { href: "#", text: "Все города →" }
  },
  {
    id: 3,
    title: "АВИАКОМПАНИИ",
    links: [
      { href: "#", text: "Air Berlin" },
      { href: "#", text: "Air France" },
      { href: "#", text: "Alitalia" },
      { href: "#", text: "Air Baltic" },
      { href: "#", text: "Emirates" },
      { href: "#", text: "KLM" }
    ],
    all: { href: "#", text: "Все авиакомпании →" }
  },
  {
    id: 4,
    title: "АЭРОПОРТЫ",
    links: [
      { href: "#", text: "Шереметьево" },
      { href: "#", text: "Курумоч" },
      { href: "#", text: "Домодедово" },
      { href: "#", text: "Толмачево" },
      { href: "#", text: "Владивосток" },
      { href: "#", text: "Гамбург" }
    ],
    all: { href: "#", text: "Все аэропорты →" }
  },
  {
    id: 5,
    title: "НАПРАВЛЕНИЯ",
    links: [
      { href: "#", text: "MOW – SIP" },
      { href: "#", text: "MOW – AER" },
      { href: "#", text: "MOW – TIV" },
      { href: "#", text: "MOW – MRV" },
      { href: "#", text: "LED – MOW" },
      { href: "#", text: "MOW – BKK" }
    ],
    all: { href: "", text: "" }
  },
  {
    id: 6,
    title: "СЕРВИСЫ",
    links: [
      { href: "#", text: "Горящие авиабилеты" },
      { href: "#", text: "Календарь низких цен" },
      { href: "#", text: "Карта низких цен" },
      { href: "#", text: "Спецпредложения" },
      { href: "#", text: "Таблица цен" },
      { href: "#", text: "Блог" },
      { href: "#", text: "Помощь" }
    ],
    all: { href: "", text: "" }
  }
];

const socials = [
  {
    href: "#",
    img: vk,
    text: "Вконтакте"
  },
  {
    href: "#",
    img: face,
    text: "Фейсбук"
  },
  {
    href: "#",
    img: inst,
    text: "Инстаграм"
  },
  {
    href: "#",
    img: twit,
    text: "Твиттер"
  },
  {
    href: "#",
    img: viber,
    text: "Вайбер"
  }
];

const apps = [
  {
    id: 1,
    href: "#",
    img: apple,
    text: "Скачайте в",
    store: "App Store"
  },
  {
    id: 2,
    href: "#",
    img: play,
    text: "Скачайте в",
    store: "Google Play"
  },
  {
    id: 3,
    href: "#",
    img: windowsPhone,
    text: "",
    store: "Windows Phone"
  }
];

export default () => (
  <Footer>
    <Grid>
      <Row>
        {menu.map(i => (
          <Col xs={6}>
            <Menu key={i.id} title={i.title} links={i.links} all={i.all} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <Hr />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Nav />
        </Col>
      </Row>
      <Row>
        {socials.map(social => (
          <Col xs={4}>
            <Social href={social.href} img={social.img} text={social.text} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <Title>Поиск и бронирование отелей</Title>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12}>
          {apps.map(app => (
            <DownloadApp
              key={app.id}
              href={app.href}
              img={app.img}
              text={app.text}
              store={app.store}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
