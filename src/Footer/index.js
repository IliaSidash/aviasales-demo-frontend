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
  background-color: #fff;
  padding: 32px 0 24px;
  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 45px 0;
  }
`;

const Hr = styled.div`
  height: 1px;
  border-bottom: 1px solid #e0e6e8;
  box-sizing: border-box;
  margin-bottom: 24px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

const Title = styled.h3`
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #5b5b5c;
  margin: 12px 0 16px;
  font-weight: normal;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Copyright = styled.div`
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  text-align: center;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    text-align: left;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
    text-align: right;
  }
`;

const menu = [
  {
    id: 1,
    title: "СТРАНЫ",
    links: [
      { id: 1, href: "#", text: "Россия" },
      { id: 2, href: "#", text: "Таиланд" },
      { id: 3, href: "#", text: "Черногория" },
      { id: 4, href: "#", text: "Кипр" },
      { id: 5, href: "#", text: "Болгария" },
      { id: 6, href: "#", text: "Грузия" }
    ],
    all: { href: "#", text: "Все страны →" }
  },
  {
    id: 2,
    title: "ГОРОДА",
    links: [
      { id: 1, href: "#", text: "Москва" },
      { id: 2, href: "#", text: "Санкт-Петербург" },
      { id: 3, href: "#", text: "Симферополь" },
      { id: 4, href: "#", text: "Адлер" },
      { id: 5, href: "#", text: "Екатеринбург" },
      { id: 6, href: "#", text: "Лондон" }
    ],
    all: { href: "#", text: "Все города →" }
  },
  {
    id: 3,
    title: "АВИАКОМПАНИИ",
    links: [
      { id: 1, href: "#", text: "Air Berlin" },
      { id: 2, href: "#", text: "Air France" },
      { id: 3, href: "#", text: "Alitalia" },
      { id: 4, href: "#", text: "Air Baltic" },
      { id: 5, href: "#", text: "Emirates" },
      { id: 6, href: "#", text: "KLM" }
    ],
    all: { href: "#", text: "Все авиакомпании →" }
  },
  {
    id: 4,
    title: "АЭРОПОРТЫ",
    links: [
      { id: 1, href: "#", text: "Шереметьево" },
      { id: 2, href: "#", text: "Курумоч" },
      { id: 3, href: "#", text: "Домодедово" },
      { id: 4, href: "#", text: "Толмачево" },
      { id: 5, href: "#", text: "Владивосток" },
      { id: 6, href: "#", text: "Гамбург" }
    ],
    all: { href: "#", text: "Все аэропорты →" }
  },
  {
    id: 5,
    title: "НАПРАВЛЕНИЯ",
    links: [
      { id: 1, href: "#", text: "MOW – SIP" },
      { id: 2, href: "#", text: "MOW – AER" },
      { id: 3, href: "#", text: "MOW – TIV" },
      { id: 4, href: "#", text: "MOW – MRV" },
      { id: 5, href: "#", text: "LED – MOW" },
      { id: 6, href: "#", text: "MOW – BKK" }
    ],
    all: { href: "", text: "" }
  },
  {
    id: 6,
    title: "СЕРВИСЫ",
    links: [
      { id: 1, href: "#", text: "Горящие авиабилеты" },
      { id: 2, href: "#", text: "Календарь низких цен" },
      { id: 3, href: "#", text: "Карта низких цен" },
      { id: 4, href: "#", text: "Спецпредложения" },
      { id: 5, href: "#", text: "Таблица цен" },
      { id: 6, href: "#", text: "Блог" },
      { id: 7, href: "#", text: "Помощь" }
    ],
    all: { href: "", text: "" }
  }
];

const socials = [
  {
    id: 1,
    href: "#",
    img: vk,
    text: "Вконтакте"
  },
  {
    id: 2,
    href: "#",
    img: face,
    text: "Фейсбук"
  },
  {
    id: 3,
    href: "#",
    img: inst,
    text: "Инстаграм"
  },
  {
    id: 4,
    href: "#",
    img: twit,
    text: "Твиттер"
  },
  {
    id: 5,
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
          <Col key={i.id} xs={6} md={3} xl={2}>
            <Menu title={i.title} links={i.links} all={i.all} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <Hr />
        </Col>
      </Row>
      <Row end="xl">
        <Col xs={12} xl={7}>
          <Nav />
          <Row start="xl">
            <Col xs={12} md={8}>
              {socials.map(social => (
                <Social
                  key={social.id}
                  href={social.href}
                  img={social.img}
                  text={social.text}
                />
              ))}
              <Title>Поиск и бронирование отелей</Title>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={5}>
          {apps.map(app => (
            <DownloadApp
              key={app.id}
              href={app.href}
              img={app.img}
              text={app.text}
              store={app.store}
            />
          ))}
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
