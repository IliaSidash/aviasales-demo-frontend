import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logo from "./img/logo.svg";
import aero from "./img/aero.svg";
import icon from "./img/date-icon.png";
import arrow from "./img/arrow.svg";

const Logo = styled.img`
  margin-bottom: 47px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Header = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding: 12px 0 66px;
`;

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
    right: 35px;
    transform: translateY(-50%);
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
  width: 50%;
  :first-child {
    width: calc(50% - 2px);
    margin-right: 2px;
  }
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
  width 100%;
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

export default () => (
  <Header>
    <Grid>
      <Row>
        <Col xs={12}>
          <Logo src={logo} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Title>Поиск дешевых авиабилетов</Title>
        </Col>
      </Row>
      <Form action="">
        <Row>
          <Col xs={12}>
            <InputsBox>
              <Row>
                <Col xs={12}>
                  <CustomInput>
                    <Input type="text" value="Москва" />
                    <Airport>MOW</Airport>
                  </CustomInput>
                </Col>
                <Col xs={12}>
                  <Input type="text" value="Город прибытия" />
                </Col>
                <Col xs={12}>
                  <CustomInputDate>
                    <InputDate type="text" value="Туда" />
                  </CustomInputDate>
                  <CustomInputDate>
                    <InputDate type="text" value="Обратно" />
                  </CustomInputDate>
                </Col>
                <Col xs={12}>
                  <CustomSelect>
                    <Select name="" id="">
                      <option value="">1 пассажир, эконом</option>
                    </Select>
                  </CustomSelect>
                </Col>
              </Row>
            </InputsBox>
          </Col>

          <Col xs={12}>
            <Button>Найти билеты</Button>
          </Col>
        </Row>
      </Form>
    </Grid>
  </Header>
);
