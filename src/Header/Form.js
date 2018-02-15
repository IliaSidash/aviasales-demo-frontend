import React from "react";
import styled from "styled-components";

import aero from "./img/aero.svg";
import icon from "./img/date-icon.png";
import arrow from "./img/arrow.svg";

const Form = styled.form``;

const Button = styled.button`
  background: #ff9241;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  color: #fff;
  width: 100%;
  padding: 14px 0 13px;
  cursor: pointer;
  margin-top: 16px;
  position: relative;
  :after {
    content: "";
    position: absolute;
    background: url(${aero})no-repeat center;
    width: 26px;
    height: 21px;
    top: 50%;
    left: 50%;
    transform: translate(91px, -50%);
  }
`;
const InputsBox = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Input = styled.input`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px 16px;
  margin-bottom: 2px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  :focus {
    color: #4a4a4a;
  }
`;
const CustomInput = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${arrow})no-repeat center;
    width: 16px;
    height: 18px;
  }
`;

const Airport = styled.span`
  position: absolute;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-transforme: uppercase;
  right: 43px;
  top: 50%;
  transform: translateY(-50%);
  color: #a0b0b9;
`;

const CustomInputDate = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 2px;
  width: calc(50% - 1px);
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
`;

const InputDate = styled.input`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px 16px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  :focus {
    color: #4a4a4a;
  }
`;
const CustomSelect = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    right: 16px;
    top: 50%;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #000000 transparent transparent transparent;
  }
`;

const Select = styled.select`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px 16px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  appearance: none;
  :focus {
    color: #4a4a4a;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Form action="">
    <InputsBox>
      <CustomInput>
        <Input type="text" value="Москва" />
        <Airport>MOW</Airport>
      </CustomInput>
      <Input type="text" value="Город прибытия" />
      <InputGroup>
        <CustomInputDate>
          <InputDate type="text" value="Туда" />
        </CustomInputDate>
        <CustomInputDate>
          <InputDate type="text" value="Обратно" />
        </CustomInputDate>
      </InputGroup>
      <CustomSelect>
        <Select name="" id="">
          <option value="">1 пассажир, эконом</option>
        </Select>
      </CustomSelect>
    </InputsBox>
    <Button>Найти билеты</Button>
  </Form>
);
