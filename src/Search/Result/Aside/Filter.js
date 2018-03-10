import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../Ticket/img/arrow.svg';

import Stops from './Stops';

import Time from './Time';
import TravelTime from './TravelTime';
import ChangeTime from './ChangeTime';
import Baggage from './Baggage';
import Companies from './Companies';

const FilterContent = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;

  border-bottom: 1px solid #ddd;
`;

const Arrow = styled.img`
  margin-right: 6px;
`;

const Header = styled.div`
  padding: 17px 16px 18px;
  :hover {
    cursor: pointer;
    background-color: #f1fcff;
  }
`;

const Submenu = styled.div`
  padding: 0px 16px 18px;
`;

const titles = {
  checkboxes: { title: 'Пересадки' },
  intervals: { title: 'ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ' },
  baggage: { title: 'Багаж' },
  changeTime: { title: 'Длительность пересадки' },
  travelTime: { title: 'Время в пути' },
  companies: { title: 'Авиакомпании' },
  airoports: { title: 'аэропорты' },
  airoportOfChange: { title: 'аэропорт пересадки' },
  agencies: { title: 'агенства' },
};

class Filter extends React.Component {
  state = {
    isOpen: this.props.filter.isOpen,
  };

  click = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      filter,
      airoportDepart,
      airoportArrival,
      departFrom,
      returnFrom,
      departTo,
      returnTo,
    } = this.props;

    if (filter.checkboxes) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.checkboxes.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Stops />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.intervals) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.intervals.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Time
                airoportDepart={airoportDepart}
                airoportArrival={airoportArrival}
                depart={departFrom}
                arrival={departTo}
              />
              <Time
                airoportDepart={airoportArrival}
                airoportArrival={airoportDepart}
                depart={returnFrom}
                arrival={returnTo}
              />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.baggage) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.baggage.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Baggage />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.changeTime) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.changeTime.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <ChangeTime airoportDepart={airoportDepart} airoportArrival={airoportArrival} />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.travelTime) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.travelTime.title}
          </Header>

          {this.state.isOpen && (
            <Submenu>
              <TravelTime airoportDepart={airoportDepart} airoportArrival={airoportArrival} />
              <TravelTime airoportDepart={airoportArrival} airoportArrival={airoportDepart} />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.companies) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.companies.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Companies />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.airoports) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.airoports.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Companies />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.airoportOfChange) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.airoportOfChange.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Companies />
            </Submenu>
          )}
        </FilterContent>
      );
    } else if (filter.agencies) {
      return (
        <FilterContent key={filter.id}>
          <Header onClick={this.click}>
            <Arrow src={arrow} />
            {titles.agencies.title}
          </Header>
          {this.state.isOpen && (
            <Submenu>
              <Companies />
            </Submenu>
          )}
        </FilterContent>
      );
    }
    return null;
  }
}

Filter.propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.number,
    checkboxes: PropTypes.string,
    isOpen: PropTypes.bool,
  }).isRequired,
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
  departFrom: PropTypes.number.isRequired,
  departTo: PropTypes.number.isRequired,
  returnFrom: PropTypes.number.isRequired,
  returnTo: PropTypes.number.isRequired,
};

export default Filter;
