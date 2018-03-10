import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import air from './img/air.svg';
import airoports from '../airoports';

import Range from './Range/';

const TimeContent = styled.div`
  padding-top: 26px;
`;

const Direction = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin-bottom: 15px;
`;

const Img = styled.img`
  margin: 0 5px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-transform: none;
  margin-top: 12px;
`;

const Interval = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`;

const Date = Text.extend`
  margin-top: 0;
`;

function formatDate(milliseconds) {
  return format(milliseconds, 'HHч mmм', {
    locale: ruLocale,
  });
}

class Time extends React.Component {
  state = {
    depart: [0, 68340000],
    // arrival: [0, 68340000],
  };

  updateState = (value) => {
    this.setState({
      depart: value,
    });
  };

  render() {
    const { airoportDepart, airoportArrival } = this.props;

    return (
      <TimeContent>
        <Direction>
          {airoports[airoportDepart].city}
          <Img src={air} />
          {airoports[airoportArrival].city}
        </Direction>
        <Interval>
          <Date>от {formatDate(this.state.depart[0])}</Date>
          <Date>до {formatDate(this.state.depart[1])}</Date>
        </Interval>
        <Range value={this.state.depart} updateState={this.updateState} />
      </TimeContent>
    );
  }
}

Time.propTypes = {
  airoportArrival: PropTypes.string.isRequired,
  airoportDepart: PropTypes.string.isRequired,
};

export default Time;
