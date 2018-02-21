import React from "react";
import styled from "styled-components";

import airLeft from "./img/air-left.svg";
import airRight from "./img/air-right.svg";
import clock from "./img/clock.svg";

const Ticket = styled.div`
  padding-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  background-color: #fff;
  margin: 0 -8px 8px;
`;

const Title = styled.h2`
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => props.titleBgColor};
  padding: 7px 0 7px 13px;
  width: 100%;
  display: ${props => props.display};
`;

const Smile = styled.span`
  margin-left: 8px;
`;

const Price = styled.button`
  box-sizing: border-box;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #ff9241;
  width: 50%;
  text-align: left;
  padding-left: 13px;
`;

const Logo = styled.a`
  box-sizing: border-box;
  width: 50%;
  text-align: right;
  margin: 12px 0 10px;
  padding-right: 13px;
`;

const Img = styled.img`
  width: 99px;
  height: 36px;
`;

const Depart = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 13px;
  margin-bottom: 10px;
`;

const Return = Depart.extend`
  margin-bottom: 0;
`;

const Duration = styled.div`
  margin-left: 16px;
`;

const Time = styled.div`
  :first-child {
    :after {
      content: "—";
      margin: 0 5px;
    }
  }
`;
const Icon = styled.img`
  margin-right: 8px;
`;

const Stop = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #4a4a4a;
`;

export default props => (
  <Ticket>
    <Title titleBgColor={props.titleBgColor} display={props.display}>
      {props.titleText} <Smile>{props.emoji}</Smile>
    </Title>
    <Price>{props.price}</Price>
    <Logo>
      <Img src={props.logoSrc} />
    </Logo>
    <Depart>
      <Time>
        <Icon src={airRight} />
        {props.departOut}
      </Time>
      <Time>{props.departIn}</Time>
      <Duration>
        <Icon src={clock} />
        {props.departDuration}
      </Duration>
      <Stop>{props.departStop}</Stop>
    </Depart>

    <Return>
      <Time>
        <Icon src={airLeft} />
        {props.returnOut}
      </Time>
      <Time>{props.returnIn}</Time>
      <Duration>
        <Icon src={clock} />
        {props.returnDuration}
      </Duration>
      <Stop>{props.returnStop}</Stop>
    </Return>
  </Ticket>
);
