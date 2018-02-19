import React from "react";
import styled from "styled-components";

const Filter = styled.div`
  margin: 0 auto 21px;
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-bottom: 56px;
  }
`;

const Icon = styled.div`
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-derection: column;
  justify-content: center;
  margin-bottom: 12px;
  }
`;

const Picture = styled.img``;

const IconText = styled.a`
  box-sizing: border-box;
  text-transform: uppercase;
  color: #00ace2;
  line-height: 20px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid transparent;
  padding: 0 9px;
  position: relative;
  max-width: 89px;
  margin: 0 auto;
  display: block;
  :after {
    content: "";
    position: absolute;
    width: 60px;
    height: 1px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  :hover {
    color: #5c5c5c;
    :after {
      background: #00ace2;
    }
  }
`;

export default props => (
  <Filter>
    <Icon>
      <Picture src={props.src} alt={props.alt} />
    </Icon>
    <IconText href={props.href}>{props.text}</IconText>
  </Filter>
);
