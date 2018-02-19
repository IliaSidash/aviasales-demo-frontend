import React from "react";
import styled from "styled-components";

import aero from "./img/aero.svg";
import icon from "./img/date-icon.png";
import arrows from "./img/arrows.svg";
import arrowDown from "./img/arrow-down.svg";

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
  max-width: 308px;
  :after {
    content: "";
    position: absolute;
    background: url(${aero})no-repeat center;
    width: 26px;
    height: 21px;
    top: 50%;
    left: 50%;
    transform: translate(91px, -50%);
    @media screen and (min-width: 768px) {
      left: auto;
      right: 24px;
      transform: translateY(-50%);
    }
  }
  @media screen and (min-width: 768px) {
    font-style: normal;
    line-height: normal;
    font-size: 28px;
    text-align: left;
    padding-left: 45px;
    font-weight: bold;
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;
const InputsBox = styled.div`
  overflow: hidden;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  margin-bottom: 2px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  :focus {
    color: #4a4a4a;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
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
    background: url(${arrows})no-repeat center;
    width: 16px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - 1px);
  }
  @media screen and (min-width: 1200px) {
    max-width: 196px;
    width: 100%;
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
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const InputDate = styled.input`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  :focus {
    color: #4a4a4a;
  }
  @media screen and (min-width: 1200px) {
    max-width: 180px;
    width: 100%;
  }
`;
const CustomSelect = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: calc(50% - 1px);
  }
  @media screen and (min-width: 1200px) {
    max-width: 212px;
    width: 100%;
  }
`;

const Select = styled.select`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
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
  @media screen and (min-width: 768px) {
    width: calc(50% - 1px);
  }
  @media screen and (min-width: 1200px) {
    max-width: 195px;
    width: 100%;
  }
`;

const InputDateGroup = InputGroup.extend`
  @media screen and (min-width: 1200px) {
    max-width: 362px;
    width: 100%;
  }
`;

const ArrowDown = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export default () => (
  <Form action="">
    <InputsBox>
      <CustomInput>
        <Input type="text" value="Москва" />
        <Airport>MOW</Airport>
      </CustomInput>
      <InputGroup>
        <Input type="text" value="Город прибытия" />
      </InputGroup>
      <InputDateGroup>
        <CustomInputDate>
          <InputDate type="text" value="Туда" />
        </CustomInputDate>
        <CustomInputDate>
          <InputDate type="text" value="Обратно" />
        </CustomInputDate>
      </InputDateGroup>
      <CustomSelect>
        <Select name="" id="">
          <option value="">1 пассажир, эконом</option>
        </Select>
        <ArrowDown src={arrowDown} />
      </CustomSelect>
    </InputsBox>
    <Button>Найти билеты</Button>
    <ArrowDown />
  </Form>
);
