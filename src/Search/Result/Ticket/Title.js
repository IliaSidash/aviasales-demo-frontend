import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => props.bgColor};
  padding: 7px 0 7px 13px;
  width: 100%;
  display: ${props => props.display};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Smile = styled.span`
  margin-left: 8px;
`;

export default function(props) {
  if (props.title) {
    return (
      <Title bgColor={props.title.bgColor}>
        {props.title.text} <Smile>{props.title.emoji}</Smile>
      </Title>
    );
  } else {
    return null;
  }
}
