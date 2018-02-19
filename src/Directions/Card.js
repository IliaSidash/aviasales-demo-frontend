import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
  height: 136px;
  width: 100%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 212px;
  }
`;

const City = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 145px;
  @media screen and (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
    margin-bottom: 2px;
    max-width: 999px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 180px;
  }
`;
const Search = styled.a`
  font-size: 14px;
  text-align: right;
  color: #00bae8;
  @media screen and (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;
const Country = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  text-transform: uppercase;
`;
const Date = styled.div`
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const Location = styled.div`
  padding-left: 16px;
  position: relative;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding-left: 72px;
  }
`;
const Info = styled.div`
  padding-right: 16px;
  margin-left: auto;
`;
const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  display: none;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Direction = styled.div``;

export default props => (
  <Card>
    <Img src={props.src} alt={props.alt} />
    <Location>
      <Flag src={props.flag} alt={props.alt} />
      <City>{props.city}</City>
      <Country>{props.country}</Country>
    </Location>
    <Info>
      <Search>{props.search}</Search>
      <Date>{props.date}</Date>
    </Info>
  </Card>
);
