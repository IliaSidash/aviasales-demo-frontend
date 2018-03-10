import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import close from './img/close.svg';

// import filters from './data';

const AsideContent = styled.aside`
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

const filters = [
  {
    id: 1,
    checkboxes: true,
    isOpen: true,
  },
  {
    id: 2,
    intervals: true,
    isOpen: false,
  },
  {
    id: 3,
    baggage: true,
    isOpen: false,
  },
  {
    id: 4,
    changeTime: true,
    isOpen: false,
  },
  {
    id: 5,
    travelTime: true,
    isOpen: false,
  },
  {
    id: 6,
    companies: true,
    isOpen: false,
  },
  {
    id: 7,
    airoports: true,
    isOpen: false,
  },
  {
    id: 8,
    airoportOfChange: true,
    isOpen: false,
  },
  {
    id: 9,
    agencies: true,
    isOpen: false,
  },
];

const Aside = (props) => {
  const {
    airoportDepart, airoportArrival, departFrom, returnFrom, departTo, returnTo,
  } = props;

  return (
    <AsideContent>
      {filters.map(filter => (
        <Filter
          key={filter.id}
          filter={filter}
          airoportDepart={airoportDepart}
          airoportArrival={airoportArrival}
          departFrom={departFrom}
          returnFrom={returnFrom}
          departTo={departTo}
          returnTo={returnTo}
        />
      ))}
      <Reset>
        СБРОСИТЬ ВСЕ ФИЛЬТРЫ
        <Close src={close} />
      </Reset>
    </AsideContent>
  );
};

Aside.propTypes = {
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
  departFrom: PropTypes.number.isRequired,
  departTo: PropTypes.number.isRequired,
  returnFrom: PropTypes.number.isRequired,
  returnTo: PropTypes.number.isRequired,
};

export default Aside;
