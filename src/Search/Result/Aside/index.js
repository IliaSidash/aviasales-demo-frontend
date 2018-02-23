import React from "react";
import styled from "styled-components";

import arrow from "../Ticket/img/arrow.svg";
import close from "./img/close.svg";

import filters from "./data";

import Checkbox from "./Checkbox";
import Time from "./Time";

const Aside = styled.aside`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const Filter = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  padding: 17px 16px 18px;
  border-bottom: 1px solid #ddd;
`;

const Arrow = styled.img`
  margin-right: 6px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-transform: none;
  margin: 12px 0 24px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-transform: none;
  margin: 16px 0 17px;
`;

const Reset = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 52px;
  font-size: 12px;
  color: #00bde4;
  position: relative;
  padding-left: 16px;
`;

const Close = styled.img`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background: #dadada;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

class Filters extends React.Component {
  state = {
    isOpen: false
  };

  click = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const filter = this.props.filter;

    if (filter.checkboxes) {
      return (
        <Filter key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          {filter.checkboxes.map(checkbox => <Checkbox checkbox={checkbox} />)}
        </Filter>
      );
    } else if (filter.intervals) {
      return (
        <Filter key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Time interval={filter.intervals} />
        </Filter>
      );
    } else if (filter.travelTime) {
      return (
        <Filter key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Time travelTime={filter.travelTime} />
        </Filter>
      );
    } else if (filter.companies) {
      return (
        <Filter key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Checkbox checkbox={filter} />
          <Text>
            Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную
          </Text>
          <Title>Альянсы</Title>
          {filter.alliances.map(alliance => <Checkbox checkbox={alliance} />)}
          <Title>Авиакомпании</Title>
          {filter.companies.map(company => <Checkbox checkbox={company} />)}
        </Filter>
      );
    } else {
      return (
        <Filter key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
        </Filter>
      );
    }
  }
}

export default () => (
  <Aside>
    {filters.map(filter => <Filters filter={filter} />)}
    <Reset>
      СБРОСИТЬ ВСЕ ФИЛЬТРЫ
      <Close src={close} />
    </Reset>
    <Close src={close} />
  </Aside>
);
