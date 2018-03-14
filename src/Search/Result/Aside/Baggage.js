import React from 'react';
import { set } from 'lodash/fp';
import Checkbox from './Checkbox';

const baggageType = {
  withBaggage: 'Багаж и ручная кладь',
  withoutBaggage: 'Без багажа',
};

class Baggage extends React.Component {
  state = {
    checkedAll: true,
    checkboxes: [
      {
        id: 1,
        baggage: 'withBaggage',
        checked: true,
      },
      {
        id: 2,
        baggage: 'withoutBaggage',
        checked: true,
      },
    ],
  };

  handleClickAll = () => {
    this.setState(prevState => ({
      checkedAll: !prevState.checkedAll,
    }));
  };

  handleClickChechbox = (index) => {
    // const { checkboxes } = this.state;
    // checkboxes[index].checked = !checkboxes[index].checked;

    this.setState(prevState => ({
      // checkedAll: checkboxes.filter(checkbox => checkbox.checked).length === checkboxes.length,
      checkboxes: set(
        `prevState.checkboxes[${index}].checked`,
        !prevState.checkboxes[index].checked,
        prevState.checkboxes,
      ),
    }));
  };

  render() {
    const { checkboxes, checkedAll } = this.state;
    return (
      <React.Fragment>
        <Checkbox
          text="Все"
          checked={checkedAll}
          onChange={this.handleClickAll}
          component="baggage"
        />
        {checkboxes.map((checkbox, index) => (
          <Checkbox
            index={index}
            text={baggageType[checkbox.baggage]}
            checked={checkbox.checked}
            onChange={() => this.handleClickChechbox(index)}
            all
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Baggage;
