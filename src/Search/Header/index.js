import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import Logo from '../../Header/Logo';
import arrowBack from './img/arrow-back.svg';

import Form from './Form';

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
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Params = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
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
  @media screen and (min-width: 768px) {
    align-self: auto;
  }
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
        <Logo customLogo />
        <Params>
          <Link href="/" to="/">
            <Arrow src={arrowBack} />
          </Link>
          <Path>
            Москва — Барселона
            <Info>24 фев — 3 март, 1 пассажир</Info>
          </Path>
        </Params>
        <Button>RUB</Button>
      </Head>
      <Form />
    </Grid>
  </Header>
);
