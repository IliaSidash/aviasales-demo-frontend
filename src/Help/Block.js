import React from "react";
import styled from "styled-components";

const Block = styled.div`
  margin-bottom: 16px;
`;
const Title = styled.div`
  display: flex;
  margin-bottom: 22px;
  img {
    margin-right: 10px;
  }
  h3 {
    font-weight: bold;
    line-height: 18px;
    font-size: 13px;
    color: #4a4a4a;
  }
`;
const Text = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
`;

const Link = styled.a`
  line-height: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #00ace2;
`;

export default props => (
  <Block>
    <Title>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
    </Title>
    <Text>
      {props.text} <Link href="#">Подробнее</Link>
    </Text>
  </Block>
);
