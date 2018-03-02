import React from "react";
import styled from "styled-components";

const Logo = styled.a`
  box-sizing: border-box;
  width: 50%;
  text-align: right;
  margin: 12px 0 10px;
  padding-right: 13px;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-right: auto;
  }
`;

const Img = styled.img`
  width: 99px;
  height: 36px;
`;

const SmallImg = styled.img`
  width: 28px;
  height: 28px;
  padding: 4px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;

export default function(props) {
  const companies = props.companies;

  if (companies.length > 1) {
    return (
      <Logo>
        {companies.map(company => (
          <SmallImg key={company.id} src={company.logoSrc} alt={company.alt} />
        ))}
      </Logo>
    );
  }

  return (
    <Logo>
      <Img src={companies[0].logoSrc} alt={companies[0].alt} />
    </Logo>
  );
}
