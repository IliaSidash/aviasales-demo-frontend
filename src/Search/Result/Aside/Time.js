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
  return format(milliseconds, 'HH:mm, DD MMM', {
    locale: ruLocale,
  });
}

class Time extends React.Component {
  state = {
    depart: [this.props.depart, this.props.depart + 86340000],
    arrival: [this.props.arrival, this.props.arrival + 86340000],
  };

  componentWillReceiveProps() {
    this.setState({
      depart: [this.props.depart, this.props.depart + 86340000],
      arrival: [this.props.arrival, this.props.arrival + 86340000],
    });
  }

  updateState = (value, arrival) => {
    if (arrival) {
      this.setState({
        arrival: value,
      });
    } else {
      this.setState({
        depart: value,
      });
    }
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
        <Text> Вылет из {airoports[airoportDepart].city}: </Text>
        <Interval>
          <Date>с {formatDate(this.state.depart[0])}</Date>
          <Date>до {formatDate(this.state.depart[1])}</Date>
        </Interval>
        <Range value={this.state.depart} updateState={this.updateState} />

        <Text> Прибытие в {airoports[airoportArrival].city}: </Text>
        <Interval>
          <Date>с {formatDate(this.state.arrival[0])}</Date>
          <Date>до {formatDate(this.state.arrival[1])}</Date>
        </Interval>
        <Range value={this.state.arrival} updateState={this.updateState} arrival />
      </TimeContent>
    );
  }
}

Time.propTypes = {
  arrival: PropTypes.number.isRequired,
  depart: PropTypes.number.isRequired,
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
};

export default Time;
