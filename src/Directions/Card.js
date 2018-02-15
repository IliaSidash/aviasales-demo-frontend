import React from "react";
import styled from "styled-components";

const Card = styled.ul`
  display: block;
  margin-bottom: 12px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
  height: 136px;
  width: 100%;
  object-fit: cover;
`;

const Row = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;
const City = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;
  margin-bottom: 5px;
  text-overflow: ellipsis;
`;
const Search = styled.a`
  font-size: 14px;
  text-align: right;
  color: #00bae8;
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

export default props => (
  <Card key={props.id}>
    <Img src={props.src} alt="" />
    <Row>
      <City>{props.city}</City>
      <Search>{props.search}</Search>
    </Row>
    <Row>
      <Country>{props.country}</Country>
      <Date>{props.date}</Date>
    </Row>
  </Card>
);
