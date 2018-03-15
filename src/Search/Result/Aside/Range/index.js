import React from 'react';
import { Range } from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
import './style.css';

const RangeSlider = (props) => {
  const {
    range, onChange, max, min,
  } = props;

  return (
    <Range
      min={min}
      max={max}
      allowCross={false}
      defaultValue={range}
      onChange={(value) => {
        onChange(value);
      }}
    />
  );
};

RangeSlider.propTypes = {
  updateState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  arrival: PropTypes.bool.isRequired,
};

export default RangeSlider;
