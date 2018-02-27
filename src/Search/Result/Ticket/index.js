import React from "react";
import styled from "styled-components";

import airLeft from "./img/air-left.svg";
import airRight from "./img/air-right.svg";
import clock from "./img/clock.svg";
import pin from "./img/pin.svg";
import takeOffPlane from "./img/take-off-plane.svg";
import landingPlane from "./img/landing-plane.svg";
import sharing from "./img/sharing.svg";
import arrow from "./img/arrow.svg";

import Title from "./Title";
import Buy from "./Buy";
import Company from "./Company";

const Ticket = styled.div`
  padding-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
  background-color: #fff;
  margin: 0 -8px 8px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    padding-right: 20px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin: 0 0 20px;
  }
`;

const Price = styled.div`
  box-sizing: border-box;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
  width: 50%;
  text-align: left;
  padding-left: 13px;
  align-self: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Note = styled.button`
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
  border: 1px solid #2196f3;
  border-radius: 15px;
  padding: 4px 11px;
  display: none;
  align-self: center;
  background: transparent;
  text-transform: uppercase;
  margin-right: 13px;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Sharing = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    text-align: right;
  }
`;

const Depart = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 13px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }
`;

const Return = Depart.extend`
  margin-bottom: 0;
`;

const Path = styled.div`
  @media screen and (min-width: 768px) {
    order: 1;
    margin: 0 14px 0 24px;
    flex-grow: 1;
    max-width: 233px;
    border-bottom: ${props => (props.first ? "1px dashed #ddd" : "none")};
  }
`;

const Duration = styled.div`
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
    color: #a0b0b9;
    margin: 0 0 7px;
  }
`;

const Plan = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

const Airoports = styled.div`
  display: none;
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Airoport = styled.div`
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  position: relative;
  padding-top: 26px;
  :last-child {
    text-align: right;
  }
`;

const Dot = styled.div`
  box-sizing: border-box;
  width: 11px;
  height: 11px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: ${props => (props.right ? "auto" : 0)};
  right: ${props => (props.right ? 0 : "auto")};
`;

const Line = styled.div`
  position: absolute;
  top: 5px;
  background: #a0b0b9;
  height: 1px;
  display: none;
  left: 13px;
  right: 13px;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Total = styled.span`
  :before {
    content: "Всего: ";
    display: none;
    @media screen and (min-width: 768px) {
      display: inline;
    }
  }
`;

const Time = styled.div`
  text-align: right;

  @media screen and (min-width: 768px) {
    order: 2;
    line-height: 40px;
    font-size: 28px;
  }
  :first-child {
    text-align: left;
    @media screen and (min-width: 768px) {
      order: 1;
    }
    :after {
      content: "—";
      margin: 0 5px;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

const Pin = styled.img`
  display: none;
  border: 1px solid #a0b0b9;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  padding: 4px 4px 4px 5px;
  cursor: pointer;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const City = styled.div`
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Date = City.extend``;

const Icon = styled.img`
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Stop = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #4a4a4a;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 0 13px 24px;
    width: calc(100% - 209px);
    border-left: 1px solid #dddddd;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  border: none;
  background: #edf5f7;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Arrow = styled.img``;

export default props => (
  <Ticket key={props.id}>
    <Buy />
    <Info>
      <Title title={props.title} />
      <Price>{props.price}</Price>
      <Company company={props.company} />
      <Note>Чартер</Note>
      <Sharing src={sharing} />
      <Depart>
        <Time>
          <Pin src={pin} />
          <Icon src={airRight} />
          {props.depart.out}
          <City>{props.depart.cityFrom}</City>
          <Date>{props.depart.dateFrom}</Date>
        </Time>
        <Time>
          {props.depart.in}
          <City>{props.depart.cityTo}</City>
          <Date>{props.depart.dateTo}</Date>
        </Time>
        <Path first>
          <Duration>
            <Plan src={takeOffPlane} />
            <Icon src={clock} />
            <Total>{props.depart.duration}</Total>
            <Plan src={landingPlane} />
          </Duration>
          <Airoports>
            <Airoport>
              {props.depart.airoportFrom} <Dot />
            </Airoport>
            <Airoport>
              {props.depart.airoportIn} <Dot right />
            </Airoport>
            <Line />
          </Airoports>
        </Path>
        <Stop>{props.depart.stop}</Stop>
      </Depart>
      <Return>
        <Time>
          <Pin src={pin} />
          <Icon src={airLeft} />
          {props.return.out}
          <City>{props.return.cityFrom}</City>
          <Date>{props.return.dateFrom}</Date>
        </Time>
        <Time>
          {props.return.in}
          <City>{props.return.cityTo}</City>
          <Date>{props.return.dateTo}</Date>
        </Time>

        <Path>
          <Duration>
            <Plan src={takeOffPlane} />
            <Icon src={clock} />
            <Total>{props.return.duration}</Total>

            <Plan src={landingPlane} />
          </Duration>
          <Airoports>
            <Airoport>
              {props.return.airoportFrom} <Dot />
            </Airoport>
            <Airoport>
              {props.return.airoportIn} <Dot right />
            </Airoport>
            <Line />
          </Airoports>
        </Path>
        <Stop>{props.return.stop}</Stop>
      </Return>
    </Info>
    <Button>
      <Arrow src={arrow} />
    </Button>
  </Ticket>
);
