import React from "react";
import styled from "styled-components";

import icon from "./img/date-icon.png";

const CustomInput = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 1px 2px;
  width: calc(50% - 2px);

  :after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${icon})no-repeat center;
    width: 17px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: calc(25% - 2px);
  }
  @media screen and (min-width: 1200px) {
    width: calc(34% / 2 - 2px);
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  display: block;
  :focus {
    color: #4a4a4a;
  }
`;

export default function(props) {
  return (
    <CustomInput>
      <Input type="text" value={props.value} />
    </CustomInput>
  );
}
