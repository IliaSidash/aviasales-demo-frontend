import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import Logo from "../../Header/Logo";
import arrowBack from "./img/arrow-back.svg";

const Header = styled.header`
  padding: 11px 0 8px;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

const Head = styled.div`
  display: flex;
`;

const Params = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.img`
  margin-right: 26px;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  line-height: normal;
  font-size: 14px;
  color: #ffffff;
  padding: 6px 12px 5px;
  margin-left: auto;
  margin-left: auto;
  align-self: center;
`;

const Path = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const Info = styled.div`
  line-height: 16px;
  font-size: 12px;
`;

export default () => (
  <Header>
    <Grid>
      <Head>
        <Logo />
        <Params>
          <Link to="/">
            <Arrow src={arrowBack} />
          </Link>
          <Path>
            Москва — Барселона
            <Info>24 фев — 3 март, 1 пассажир</Info>
          </Path>
        </Params>
        <Button>RUB</Button>
      </Head>
    </Grid>
  </Header>
);
