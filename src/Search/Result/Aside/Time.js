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

const Time = (props) => {
  const { directions } = props.time;
  const { onChangeRange, component, id } = props;

  return (
    <React.Fragment>
      {directions.map((direct, index) => (
        <TimeContent key={id}>
          <Direction>
            {airoports[direct.airoportDepart].city}
            <Img src={air} />
            {airoports[direct.airoportArrival].city}
          </Direction>
          <Text> Вылет из {airoports[direct.airoportDepart].city}: </Text>
          <Interval>
            <Date>с {formatDate(direct.range[0])}</Date>
            <Date>до {formatDate(direct.range[1])}</Date>
          </Interval>
          <Range
            onChange={value => onChangeRange(value, component, index)}
            range={direct.range}
            max={direct.max}
            min={direct.min}
          />

          <Text> Прибытие в {airoports[direct.airoportArrival].city}: </Text>
          <Interval>
            <Date>с {formatDate(direct.range[0])}</Date>
            <Date>до {formatDate(direct.range[1])}</Date>
          </Interval>
          <Range
            onChange={value => onChangeRange(value, component)}
            range={direct.range}
            max={direct.max}
            min={direct.min}
          />
        </TimeContent>
      ))}
    </React.Fragment>
  );
};
Time.propTypes = {
  arrival: PropTypes.number.isRequired,
  depart: PropTypes.number.isRequired,
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
};

export default Time;
