import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  margin-bottom: 31px;
`;
const Title = styled.div`
  font-weight: bold;
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 16px;
  color: #4a4a4a;
`;
const Menu = styled.div``;
const Link = styled.a`
  display: block;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-bottom: 12px;
  text-decoration: none;
`;
const All = styled.a`
  font-weight: bold;
  line-height: 16px;
  font-size: 12px;
  text-decoration: none;
  color: #4a4a4a;
`;

export default props => (
  <Nav key={props.id}>
    <Title>{props.title}</Title>
    <Menu>
      {props.links.map(link => (
        <Link key={link.id} href={link.href}>
          {link.text}
        </Link>
      ))}
      <All href={props.all.href}>{props.all.text}</All>
    </Menu>
  </Nav>
);
