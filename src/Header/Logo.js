import React from "react";
import styled from "styled-components";

import logo from "./img/logo.svg";

const Logo = styled.div``;

const Img = styled.img`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: 81px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 213px;
  }
`;

const CompanyName = styled.div`
  display: none;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  vertical-align: top;
  margin-left: 12px;
  line-height: 29px;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export default () => (
  <Logo>
    <Img src={logo} alt="aviasales" />
    <CompanyName>aviasales</CompanyName>
  </Logo>
);
