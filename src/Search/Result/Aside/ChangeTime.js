import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import Range from './Range/';

const TimeContent = styled.div`
  padding-top: 26px;
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
  };

  updateState = (value) => {
    this.setState({
      depart: value,
    });
  };

  render() {
    return (
      <TimeContent>
        <Interval>
          <Date>от {formatDate(this.state.depart[0])}</Date>
          <Date>до {formatDate(this.state.depart[1])}</Date>
        </Interval>
        <Range value={this.state.depart} updateState={this.updateState} />
      </TimeContent>
    );
  }
}

export default Time;
