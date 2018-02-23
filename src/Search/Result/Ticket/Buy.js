import React from "react";
import styled from "styled-components";

import carryon from "./img/carryon.svg";
import baggage from "./img/baggage.svg";

const Buy = styled.div`
  box-sizing: border-box;
  max-width: 209px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Baggage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const Icon = styled.img`
  margin-right: 4px;
`;

const Text = styled.div`
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  color: #9ab0b9;
`;

const Option = styled.div`
  min-width: 50%;
  text-align: center;
  padding: 5px 0 7px;
  background: ${props => (props.active ? "#F8FBFB" : "none")};
  border: ${props => (props.active ? "1px solid #dddddd" : "none")};
  border-left: none;
  border-top: none;
  position: relative;
  cursor: pointer;
`;

const TicketsLeft = styled.div`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
  margin-bottom: 6px;
`;

const Button = styled.button`
  background: #ff6d00;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  line-height: 18px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 6px 44px 4px;
  display: block;
  margin: 0 auto 8px;
  cursor: pointer;
`;

const Price = styled.span`
  display: block;
  line-height: 18px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  margin-top: 2px;
`;

const Link = styled.a`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
  display: block;
  margin-bottom: 16px;
`;

const Offer = styled.div`
  color: #59bce5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 23px 0 18px;
  margin-bottom: 9px;
`;

const Store = styled.a`
  line-height: 18px;
  font-size: 12px;
  margin-bottom: 4px;
  width: 50%;
`;
const Coast = styled.a`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: right;
  width: 50%;
`;

const More = styled.a`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #59bce5;
  display: block;
`;

export default () => (
  <Buy>
    <Baggage>
      <Option active>
        <Icon src={carryon} />
        <Icon src={baggage} />
        <Text>Нет багажа</Text>
      </Option>
      <Option>
        <Icon src={carryon} />
        <Icon src={baggage} />
        <Text>- 136 ₽</Text>
      </Option>
    </Baggage>
    <TicketsLeft>Осталось 4 билета</TicketsLeft>
    <Button>
      Купить <Price>за 7 712 ₽</Price>
    </Button>
    <Link>на Clickavia</Link>
    <Offer>
      <Store>Clickavia</Store>
      <Coast>8 302 ₽</Coast>
      <Store>Aviakassa</Store>
      <Coast>8 376 ₽</Coast>
    </Offer>
    <More>+ Еще 3 предложения</More>
  </Buy>
);
