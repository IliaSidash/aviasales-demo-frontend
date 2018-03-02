import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => types[props.type].bgColor};
  padding: 7px 0 7px 13px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Smile = styled.span`
  margin-left: 8px;
`;

const types = {
  cheapest: {
    text: "Самый дешевый",
    emoji: "🤑",
    bgColor: "#83D40B"
  },
  fastest: {
    text: "Самый быстрый",
    emoji: "⚡️",
    bgColor: "#AF7542"
  },
  best: {
    text: "Лучший билет",
    emoji: "😍",
    bgColor: "#C279D1"
  }
};

export default function(props) {
  const type = props.type;

  if (type) {
    return (
      <Title type={type}>
        {types[type].text} <Smile>{types[type].emoji}</Smile>
      </Title>
    );
  }

  return null;
}
