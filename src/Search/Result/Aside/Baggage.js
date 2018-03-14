import React from 'react';
import Checkbox from './Checkbox';

const baggageType = {
  withBaggage: 'Багаж и ручная кладь',
  withoutBaggage: 'Без багажа',
};

const Baggage = (props) => {
  const {
    baggage, checkedAll, onChange, onChangeAll, component,
  } = props;

  return (
    <React.Fragment>
      <Checkbox text="Все" checked={checkedAll} onChange={() => onChangeAll(component)} />
      {baggage.checkboxes.map((checkbox, index) => (
        <Checkbox
          text={baggageType[checkbox.baggage]}
          checked={checkbox.checked}
          onChange={() => onChange(component, index)}
        />
      ))}
    </React.Fragment>
  );
};

export default Baggage;
