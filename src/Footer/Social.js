import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-decoration: none;
  margin-bottom: 12px;
  width: 33.3%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  margin-right: 4px;
`;

export default props => (
  <Link key={props.id} href={props.href}>
    <Img src={props.img} /> {props.text}
  </Link>
);
