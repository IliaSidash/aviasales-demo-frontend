import React from "react";
import styled from "styled-components";

const Socials = styled.div`
  display: block;
  justify-content: center;
  margin-bottom: 24px;
  @media screen and (min-width: 1200px) {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 0px;
  }
`;
const Icon = styled.a`
  display: inline-block;
  position: relative;
  width: 36px;
  height: 36px;
  background: #9b9b9b;
  border-radius: 50px;
  margin-right: 6px;
  :last-child {
    margin-right: 0;
  }
`;
const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default props => (
  <Socials>
    {props.socials.map(social => (
      <Icon key={social.id} href={social.href}>
        <Img src={social.icon} />
      </Icon>
    ))}
  </Socials>
);
