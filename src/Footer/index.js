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
import wp from "./img/windows-phone.png";

import Menu from "./Menu";
import Social from "./Social";
import DownloadApp from "./DownloadApp";

const Footer = styled.footer`
  padding: 32px 0 24px;
`;
const Top = styled.div``;
const BottomMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  li {
    display: block;
    line-height: 16px;
    font-size: 12px;
    color: #5b5b5c;
    margin: 0 20px 8px 0;
    :last-child {
      margin-right: 0;
    }
  }
`;
const Hr = styled.div`
  height: 1px;
  border-bottom: 1px solid #e0e6e8;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

const Title = styled.div`
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #5b5b5c;
  margin: 12px 0 16px;
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
      { href: "#", link: "Россия" },
      { href: "#", link: "Таиланд" },
      { href: "#", link: "Черногория" },
      { href: "#", link: "Кипр" },
      { href: "#", link: "Болгария" },
      { href: "#", link: "Грузия" }
    ],
    all: { href: "#", link: "Все страны →" }
  },
  {
    id: 2,
    title: "ГОРОДА",
    links: [
      { href: "#", link: "Москва" },
      { href: "#", link: "Санкт-Петербург" },
      { href: "#", link: "Симферополь" },
      { href: "#", link: "Адлер" },
      { href: "#", link: "Екатеринбург" },
      { href: "#", link: "Лондон" }
    ],
    all: { href: "#", link: "Все города →" }
  },
  {
    id: 3,
    title: "АВИАКОМПАНИИ",
    links: [
      { href: "#", link: "Air Berlin" },
      { href: "#", link: "Air France" },
      { href: "#", link: "Alitalia" },
      { href: "#", link: "Air Baltic" },
      { href: "#", link: "Emirates" },
      { href: "#", link: "KLM" }
    ],
    all: { href: "#", link: "Все авиакомпании →" }
  },
  {
    id: 4,
    title: "АЭРОПОРТЫ",
    links: [
      { href: "#", link: "Шереметьево" },
      { href: "#", link: "Курумоч" },
      { href: "#", link: "Домодедово" },
      { href: "#", link: "Толмачево" },
      { href: "#", link: "Владивосток" },
      { href: "#", link: "Гамбург" }
    ],
    all: { href: "#", link: "Все аэропорты →" }
  },
  {
    id: 5,
    title: "НАПРАВЛЕНИЯ",
    links: [
      { href: "#", link: "MOW – SIP" },
      { href: "#", link: "MOW – AER" },
      { href: "#", link: "MOW – TIV" },
      { href: "#", link: "MOW – MRV" },
      { href: "#", link: "LED – MOW" },
      { href: "#", link: "MOW – BKK" }
    ],
    all: { href: "", link: "" }
  },
  {
    id: 6,
    title: "СЕРВИСЫ",
    links: [
      { href: "#", link: "Горящие авиабилеты" },
      { href: "#", link: "Календарь низких цен" },
      { href: "#", link: "Карта низких цен" },
      { href: "#", link: "Спецпредложения" },
      { href: "#", link: "Таблица цен" },
      { href: "#", link: "Блог" },
      { href: "#", link: "Помощь" }
    ],
    all: { href: "", link: "" }
  }
];

const bottomMenu = [
  {
    href: "#",
    link: "О компании"
  },
  {
    href: "#",
    link: "Партнёрская программа"
  },
  {
    href: "#",
    link: "Реклама"
  },
  {
    href: "#",
    link: "Вакансии"
  },
  {
    href: "#",
    link: "Помощь"
  },
  {
    href: "#",
    link: "Правила"
  },
  {
    href: "#",
    link: "White Label авиабилеты"
  }
];

const socials = [
  {
    href: "#",
    img: vk,
    link: "Вконтакте"
  },
  {
    href: "#",
    img: face,
    link: "Фейсбук"
  },
  {
    href: "#",
    img: inst,
    link: "Инстаграм"
  },
  {
    href: "#",
    img: twit,
    link: "Твиттер"
  },
  {
    href: "#",
    img: viber,
    link: "Вайбер"
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
    img: wp,
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
          <BottomMenu>
            {bottomMenu.map(link => <li href={link.href}>{link.link}</li>)}
          </BottomMenu>
        </Col>
      </Row>
      <Row>
        {socials.map(social => (
          <Col xs={4}>
            <Social href={social.href} img={social.img} link={social.link} />
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
