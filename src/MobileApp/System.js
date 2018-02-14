import React from "react";
import styled from "styled-components";

const System = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
const Img = styled.img`
  margin-right: 8px;
`;
const Text = styled.span`
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
`;

export default props => (
  <System>
    <Img src={props.img} />
    <Text>{props.text}</Text>
  </System>
);
