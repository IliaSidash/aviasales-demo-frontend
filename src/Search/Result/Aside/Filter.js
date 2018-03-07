import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../Ticket/img/arrow.svg';

import Checkbox from './Checkbox';
import Time from './Time';

const FilterContent = styled.div`
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

class Filter extends React.Component {
  state = {
    // isOpen: false,
  };

  click = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { filter } = this.props;

    if (filter.checkboxes) {
      return (
        <FilterContent key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          {filter.checkboxes.map(checkbox => <Checkbox checkbox={checkbox} />)}
        </FilterContent>
      );
    } else if (filter.intervals) {
      return (
        <FilterContent key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Time intervals={filter.intervals} />
        </FilterContent>
      );
    } else if (filter.travelTime) {
      return (
        <FilterContent key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Time travelTime={filter.travelTime} />
        </FilterContent>
      );
    } else if (filter.companies) {
      return (
        <FilterContent key={filter.id}>
          <Arrow src={arrow} />
          {filter.name}
          <Checkbox checkbox={filter} />
          <Text>
            Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая
            выбранную
          </Text>
          <Title>Альянсы</Title>
          {filter.alliances.map(alliance => <Checkbox checkbox={alliance} />)}
          <Title>Авиакомпании</Title>
          {filter.companies.map(company => <Checkbox checkbox={company} />)}
        </FilterContent>
      );
    }
    return (
      <FilterContent key={filter.id}>
        <Arrow src={arrow} />
        {filter.name}
      </FilterContent>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Filter;
