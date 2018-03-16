import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const baggageType = {
  withBaggage: 'Багаж и ручная кладь',
  withoutBaggage: 'Без багажа',
};

const Baggage = (props) => {
  const {
    baggage, checkedAll, onChange, onChangeAll,
  } = props;

  return (
    <React.Fragment>
      <Checkbox text="Все" checked={checkedAll} onChange={() => onChangeAll('baggage')} />

      {baggage.checkboxes.map((checkbox, index) => (
        <Checkbox
          key={checkbox.id}
          text={baggageType[checkbox.baggage]}
          checked={checkbox.checked}
          onChange={() => onChange('baggage', index)}
        />
      ))}
    </React.Fragment>
  );
};

Baggage.propTypes = {
  baggage: PropTypes.arrayOf(PropTypes.shape({
    checkboxes: PropTypes.array,
  })).isRequired,
  checkedAll: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeAll: PropTypes.func.isRequired,
};

export default Baggage;
