import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Directions from "../Directions";
import Prices from "../Prices";
import Partners from "../Partners";
import Subscribe from "../Subscribe";
import Offer from "../Offer";
import Help from "../Help";
import MobileApp from "../MobileApp";

const Main = styled.div``;

export default () => (
  <Main>
    <Helmet>
      <title>Aviasales / Главная страница</title>
    </Helmet>
    <Header />
    <Directions />
    <Prices />
    <Partners />
    <Subscribe />
    <Offer />
    <Help />
    <MobileApp />
  </Main>
);
