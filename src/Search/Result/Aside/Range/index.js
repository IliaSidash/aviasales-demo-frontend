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
  range: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default RangeSlider;
