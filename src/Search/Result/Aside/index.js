import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import close from './img/close.svg';

import filters from './data';

const Aside = styled.aside`
  position: relative;
  background: #ffffff;
  border-radius: 4px;
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
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

export default () => (
  <Aside>
    {filters.map(filter => <Filter filter={filter} />)}
    <Reset>
      СБРОСИТЬ ВСЕ ФИЛЬТРЫ
      <Close src={close} />
    </Reset>
    <Close src={close} />
  </Aside>
);
