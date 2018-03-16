import React from 'react';
import styled from 'styled-components';
import { set, cloneDeep, isEqual } from 'lodash/fp';

import Filter from './Filter';
import close from './img/close.svg';

import Stops from './Stops';
import Time from './Time';
import Baggage from './Baggage';
import TravelTime from './TravelTime';
import Companies from './Companies';

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
  alliances: {
    checkboxes: [
      {
        id: 1,
        text: 'Star Alliance',
        price: 11150,
        checked: true,
      },
      {
        id: 2,
        text: 'OneWorld',
        price: 12370,
        checked: true,
      },
      {
        id: 3,
        text: 'SkyTeam',
        price: 16290,
        checked: true,
      },
    ],
  },
  companies: {
    checkboxes: [
      {
        id: 2,
        text: 'Aegean Airlines',
        price: 20357,
        checked: true,
      },
      {
        id: 3,
        text: 'Air Algerie',
        price: 29105,
        checked: true,
      },
      {
        id: 4,
        text: 'Air Europa',
        price: 22202,
        checked: true,
      },
      {
        id: 5,
        text: 'Air France',
        price: 17050,
        checked: true,
      },
      {
        id: 6,
        text: 'Air Moldova',
        price: 22613,
        checked: true,
      },
      {
        id: 7,
        text: 'Alitalia',
        price: 22717,
        checked: true,
      },
      {
        id: 8,
        text: 'Alitalia CityLiner',
        price: 20271,
        checked: true,
      },
      {
        id: 9,
        text: 'Belle Air',
        price: 18371,
        checked: true,
      },
      {
        id: 10,
        text: 'British Airways',
        price: 23839,
        checked: true,
      },
      {
        id: 11,
        text: 'Brussels Airlines',
        price: 11150,
        checked: true,
      },
      {
        id: 12,
        text: 'Bulgaria Air',
        price: 20114,
        checked: true,
      },
    ],
  },
};

const setChecked = (checkbox, isChecked) => ({ ...checkbox, checked: isChecked });

const setCheckedAll = (filter, isChecked) =>
  filter.checkboxes.map(checkbox => setChecked(checkbox, isChecked));

const isReset = (filter, text) => isEqual(filter, filters[text]);

const isChekedAll = filter => filter.checkboxes.every(elem => elem.checked);

class Aside extends React.Component {
  state = {
    stops: cloneDeep(filters.stops),
    time: cloneDeep(filters.time),
    baggage: cloneDeep(filters.baggage),
    alliances: cloneDeep(filters.alliances),
    companies: cloneDeep(filters.companies),
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
        setCheckedAll(prevState[filter], !isChekedAll(prevState[filter])),
        [filter].checkboxes,
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
    const {
      stops, time, baggage, travelTime, alliances, companies,
    } = this.state;
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
            checkedAll={isChekedAll(stops)}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
            component="stops"
          />
        </Filter>
        <Filter onClickReset={this.handleClickReset} reset={isReset(time, 'time')} title="time">
          <Time onChangeRange={this.handleChangeRange} time={time} component="time" />
        </Filter>
        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(baggage, 'baggage')}
          title="baggage"
        >
          <Baggage
            baggage={baggage}
            checkedAll={isChekedAll(baggage)}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
            component="baggage"
          />
        </Filter>

        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(travelTime, 'travelTime')}
          title="travelTime"
        >
          <TravelTime directions={time.directions} />
        </Filter>

        <Filter
          onClickReset={this.handleClickReset}
          reset={isReset(alliances, 'alliances')}
          title="companies"
        >
          <Companies
            alliances={alliances}
            companies={companies}
            checkedAll={[isChekedAll(alliances), isChekedAll(companies)]}
            onChange={this.handleClickCheckbox}
            onChangeAll={this.handleClickCheckboxAll}
          />
        </Filter>

        <Reset onClick={this.handleClickResetAll}>
          СБРОСИТЬ ВСЕ ФИЛЬТРЫ
          <Close src={close} />
        </Reset>
      </AsideContent>
    );
  }
}

export default Aside;
