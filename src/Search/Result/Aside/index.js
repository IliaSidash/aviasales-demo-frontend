import React from 'react';
import styled from 'styled-components';
import { set, cloneDeep, isEqual } from 'lodash/fp';

import PropTypes from 'prop-types';
import Filter from './Filter';
import close from './img/close.svg';

import Stops from './Stops';
import Time from './Time';
import Baggage from './Baggage';
import TravelTime from './TravelTime';

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
  :hover {
    cursor: pointer;
  }
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
    checkedAll: true,
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
    directions: [
      {
        id: 1,
        range: [1519412700000, 1519423500000],
        max: 1519423500000,
        min: 1519412700000,
        stops: [],
        airoportDepart: 'VKO',
        airoportArrival: 'BCN',
      },
      {
        id: 2,
        range: [1520055300000, 1520079000000],
        max: 1520079000000,
        min: 1520055300000,
        stops: [],
        airoportDepart: 'BCN',
        airoportArrival: 'SVO',
      },
    ],
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

const setChecked = (checkbox, isChecked) => ({ ...checkbox, checked: isChecked });

const setCheckedAll = (filter, isChecked) =>
  filter.checkboxes.map(checkbox => setChecked(checkbox, isChecked));

const isReset = (filter, text) => isEqual(filter, filters[text]);

class Aside extends React.Component {
  state = {
    stops: cloneDeep(filters.stops),
    time: cloneDeep(filters.time),
    baggage: cloneDeep(filters.baggage),
  };

  handleChangeRange = (range, filter, index) => {
    this.setState({
      [filter]: set(`directions[${index}].range`, range, this.state[filter]),
    });
  };

  handleClickCheckboxAll = (filter) => {
    this.setState(prevState => ({
      [filter]: set(
        'checkboxes',
        setCheckedAll(prevState[filter], !prevState[filter].checkedAll),
        set('checkedAll', !prevState[filter].checkedAll, prevState[filter]),
      ),
    }));
  };

  handleClickCheckbox = (filter, index) => {
    this.setState(prevState => ({
      [filter]: set(
        `checkboxes[${index}].checked`,
        !prevState[filter].checkboxes[index].checked,
        prevState[filter],
      ),
    }));
  };

  handleClickReset = (e, filter) => {
    e.stopPropagation();
    this.setState({
      [filter]: cloneDeep(filters[filter]),
    });
  };

  handleClickResetAll = () => {
    this.setState({
      stops: cloneDeep(filters.stops),
      time: cloneDeep(filters.time),
      baggage: cloneDeep(filters.baggage),
    });
  };

  render() {
    const { stops, time, baggage } = this.state;
    return (
      <AsideContent>
        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(stops, 'stops')}
          title="stops"
          isOpen
        >
          <Stops
            stops={stops}
            checkedAll={stops.checkedAll}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
            component="stops"
          />
        </Filter>
        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(time, 'time')}
          title="time"
          isOpen
        >
          <Time onChangeRange={this.handleChangeRange} time={time} component="time" />
        </Filter>
        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(baggage, 'baggage')}
          title="baggage"
          isOpen
        >
          <Baggage
            baggage={baggage}
            checkedAll={baggage.checkedAll}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
            component="baggage"
          />
        </Filter>
        <Filter onClickReset={this.handleClickReset} title="travelTime" isOpen>
          <TravelTime directions={time.directions} />
        </Filter>
        <Reset onClick={this.handleClickResetAll}>
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
