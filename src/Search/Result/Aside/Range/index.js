import React from 'react';
import { Range } from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
import './style.css';

class RangeSlider extends React.Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <Range
        min={this.state.value[0]}
        max={this.state.value[1]}
        allowCross={false}
        defaultValue={this.state.value}
        onChange={(value) => {
          this.props.updateState(value, this.props.arrival);
        }}
      />
    );
  }
}

RangeSlider.propTypes = {
  updateState: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  arrival: PropTypes.bool.isRequired,
};

export default RangeSlider;
