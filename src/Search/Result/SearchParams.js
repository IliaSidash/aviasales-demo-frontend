import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowBack from "./img/arrow-back.svg";

const Params = styled.div`
  padding: 10px 6px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
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
  <Params>
    <Link to="/">
      <Arrow src={arrowBack} />
    </Link>
    <Path>
      Москва — Барселона
      <Info>24 фев — 3 март, 1 пассажир</Info>
    </Path>
    <Button>RUB</Button>
  </Params>
);
