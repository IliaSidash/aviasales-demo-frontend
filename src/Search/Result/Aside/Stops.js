import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const stopText = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

const Stops = (props) => {
  const { checkboxes } = props.stops;
  const { checkedAll, onChangeAll, onChange } = props;

  return (
    <React.Fragment>
      <Checkbox text="Все" checked={checkedAll} onChange={() => onChangeAll('stops')} />

      {checkboxes.map((checkbox, index) => (
        <Checkbox
          text={stopText[checkbox.stops]}
          checked={checkbox.checked}
          onChange={() => onChange('stops', index)}
        />
      ))}
    </React.Fragment>
  );
};

Stops.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    checkboxes: PropTypes.array,
  })).isRequired,
  checkedAll: PropTypes.bool.isRequired,
  onChangeAll: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Stops;
