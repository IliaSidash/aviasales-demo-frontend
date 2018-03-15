import React from 'react';

import Checkbox from './Checkbox';

const stopText = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

const Stops = (props) => {
  const { checkboxes, checkedAll } = props.stops;
  const { onChangeAll, onChange, component } = props;
  return (
    <React.Fragment>
      <Checkbox text="Все" checked={checkedAll} onChange={() => onChangeAll(component)} />

      {checkboxes.map((checkbox, index) => (
        <Checkbox
          text={stopText[checkbox.stops]}
          checked={checkbox.checked}
          onChange={() => onChange(component, index)}
        />
      ))}
    </React.Fragment>
  );
};

export default Stops;
