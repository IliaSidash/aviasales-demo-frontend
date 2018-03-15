import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../Ticket/img/arrow.svg';

import Close from './Close';

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
  position: relative;
  :hover {
    cursor: pointer;
    background-color: #f1fcff;
  }
`;

const Submenu = styled.div`
  padding: 0px 16px 18px;
`;

const titles = {
  stops: 'Пересадки',
  time: 'Время прилета и прибытия',
  baggage: 'Багаж',
  changeTime: 'Длительность пересадки',
  travelTime: 'Время в пути',
  companies: 'Авиакомпании',
  airoports: 'аэропорты',
  airoportOfChange: 'аэропорт пересадки',
  agencies: 'агенства',
};

class Filter extends React.Component {
  state = {
    isOpen: this.props.isOpen,
  };

  click = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      children, title, reset, onClickReset,
    } = this.props;
    return (
      <FilterContent>
        <Header onClick={this.click}>
          <Arrow src={arrow} />
          {titles[title]}
          {!reset && <Close onClickReset={e => onClickReset(e, title)} />}
        </Header>
        {this.state.isOpen && <Submenu>{children}</Submenu>}
      </FilterContent>
    );
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
