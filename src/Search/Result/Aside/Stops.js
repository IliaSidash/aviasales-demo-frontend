import React from 'react';

import Checkbox from './Checkbox';
import Close from './Close';

const stopText = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

const Stops = (props) => {
  const { checkboxes } = props.stops;

  return (
    <React.Fragment>
      <Checkbox text="Все" />
      {/* {!this.state.allChecked && <Close />} */}

      {checkboxes.map(checkbox => (
        <Checkbox
          text={stopText[checkbox.stops]}
          checked={checkbox.checked}
          // updateStatus={this.updateStatus}
          all
        />
      ))}
    </React.Fragment>
  );
};

export default Stops;
