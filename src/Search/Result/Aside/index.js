import React from 'react';
import styled from 'styled-components';
import { set } from 'lodash/fp';

import PropTypes from 'prop-types';
import Filter from './Filter';
import close from './img/close.svg';
import CheckboxGroup from './CheckboxGroup';

import Stops from './Stops';
import Time from './Time';
import Baggage from './Baggage';

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

const filters = {
  stops: {
    isOpen: true,
    checkboxes: [
      {
        id: 1,
        stops: 0,
        price: 7712,
        checked: true,
      },
      {
        id: 2,
        stops: 1,
        price: 11150,
        checked: true,
      },
      {
        id: 3,
        stops: 2,
        price: 16821,
        checked: true,
      },
      {
        id: 4,
        stops: 3,
        price: 23986,
        checked: true,
      },
    ],
  },
  time: {
    isOpen: true,
    flightThere: {
      range: [1519412700000, 1519423500000],
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    flightBack: {
      range: [1520055300000, 1520079000000],
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  },
  baggage: {
    isOpen: true,
    checkedAll: true,
    checkboxes: [
      {
        id: 1,
        baggage: 'withBaggage',
        checked: true,
      },
      {
        id: 2,
        baggage: 'withoutBaggage',
        checked: true,
      },
    ],
  },
};

class Aside extends React.Component {
  state = {
    filters: {
      stops: {
        isOpen: true,
        checkboxes: [
          {
            id: 1,
            stops: 0,
            price: 7712,
            checked: true,
          },
          {
            id: 2,
            stops: 1,
            price: 11150,
            checked: true,
          },
          {
            id: 3,
            stops: 2,
            price: 16821,
            checked: true,
          },
          {
            id: 4,
            stops: 3,
            price: 23986,
            checked: true,
          },
        ],
      },
      time: {
        isOpen: true,
        flightThere: {
          range: [1519412700000, 1519423500000],
          stops: [],
          airoportDepart: 'VKO',
          airoportArrival: 'BCN',
        },
        flightBack: {
          range: [1520055300000, 1520079000000],
          stops: [],
          airoportDepart: 'BCN',
          airoportArrival: 'SVO',
        },
      },
      baggage: {
        isOpen: true,
        checkedAll: true,
        checkboxes: [
          {
            id: 1,
            baggage: 'withBaggage',
            checked: true,
          },
          {
            id: 2,
            baggage: 'withoutBaggage',
            checked: true,
          },
        ],
      },
    },
  };

  handleClickCheckboxAll = (component) => {
    this.setState(prevState => ({
      filters: set(
        `${component}.checkedAll`,
        !prevState.filters[component].checkedAll,
        prevState.filters,
      ),
    }));
  };

  handleClickCheckbox = (component, index) => {
    this.setState(prevState => ({
      filters: set(
        `${component}.checkboxes[${index}].checked`,
        !prevState.filters[component].checkboxes[index].checked,
        prevState.filters,
      ),
    }));
  };

  render() {
    const { stops, time, baggage } = this.state.filters;
    return (
      <AsideContent>
        <Filter title="checkboxes" isOpen>
          <Stops stops={stops} />
        </Filter>
        <Filter title="time" isOpen={time.isOpen}>
          <Time time={time} />
        </Filter>
        <Filter title="baggage" isOpen>
          <Baggage
            baggage={baggage}
            checkedAll={baggage.checkedAll}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
            component="baggage"
          />
        </Filter>
        <Reset>
          СБРОСИТЬ ВСЕ ФИЛЬТРЫ
          <Close src={close} />
        </Reset>
      </AsideContent>
    );
  }
}

Aside.propTypes = {
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
  departFrom: PropTypes.number.isRequired,
  departTo: PropTypes.number.isRequired,
  returnFrom: PropTypes.number.isRequired,
  returnTo: PropTypes.number.isRequired,
};

export default Aside;
