import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: block;
  padding-bottom: 24px;
  border-bottom: 1px dashed #afbec6;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const City = styled.p`
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
  margin-bottom: 2px;
`;
const Country = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Table = styled.ul`
  margin-top: 24px;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    :last-child {
      margin-bottom: 0px;
    }
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

export default props => (
  <Card>
    <Row>
      <div>
        <img src={props.src} alt="" />
      </div>
      <div>
        <City>{props.city}</City>
        <Country>{props.country}</Country>
      </div>
    </Row>
    <Table>
      {props.prices.map(price => (
        <li>
          <From>{price.from}</From>
          <Coast>{price.coast} ₽</Coast>
        </li>
      ))}
    </Table>
  </Card>
);
