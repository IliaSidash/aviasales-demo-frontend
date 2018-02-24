import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import { Link } from "react-router-dom";

import InputCity from "../../Form/InputCity";
import InputDate from "../../Form/InputDate";
import Select from "../../Form/Select";
import Submit from "../../Form/Submit";

const Form = styled.form`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    border-radius: 4px;
  }
`;

export default () => (
  <Form>
    <InputCity value={"Москва"} air={"MOW"} arrows />
    <InputCity value={"Барселона"} air={"BCN"} />
    <InputDate />
    <Select />
    <Submit />
  </Form>
);
