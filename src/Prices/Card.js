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
`;

const Col = styled.div``;

export default props => (
  <Card>
    <Row>
      <Img src={props.src} alt="" />
      <Col>
        <City>{props.city}</City>
        <Country>{props.country}</Country>
      </Col>
    </Row>
    {props.prices.map(price => (
      <Table>
        <From>{price.from}</From>
        <Coast>{price.coast} ₽</Coast>
      </Table>
    ))}
  </Card>
);
