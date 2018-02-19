import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: block;
  padding-bottom: 24px;
  border-bottom: 1px dashed #afbec6;
  margin-bottom: 24px;
  :last-child {
    @media screen and (min-width: 1200px) {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    display: inline-block;
    border-right: 1px dashed #afbec6;
    margin-bottom: 0;
    border-bottom: none;
    padding: 0px 34px 0 0;
    margin-right: 34px;
    box-sizing: border-box;
    width: 31%;
  }
`;

const City = styled.div`
  text-transform: none;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  margin-bottom: 2px;
  white-space: nowrap;
`;

const Direction = styled.div`
  display: flex;
`;
const Country = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Table = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const From = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
`;

const Coast = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: #00bae8;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
  align-self: center;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;

export default props => (
  <Card key={props.id}>
    <Direction>
      <Img src={props.src} alt="" />
      <Country>
        <City>{props.city}</City>
        {props.country}
      </Country>
    </Direction>
    {props.prices.map(price => (
      <Table key={price.id}>
        <From>{price.from}</From>
        <Coast>{price.coast} ₽</Coast>
      </Table>
    ))}
  </Card>
);
