import React from 'react';

import Checkbox from './Checkbox';

const baggageType = {
  0: 'Багаж и ручная кладь',
  1: 'Без багажа',
};

class Stops extends React.Component {
  state = {
    allChecked: true,
    checkboxes: [
      {
        id: 2,
        baggage: 0,
        checked: true,
      },
      {
        id: 3,
        baggage: 1,
        checked: true,
      },
    ],
  };

  updateStatus = (index, allChecked) => {
    const { checkboxes } = this.state;

    if (allChecked) {
      for (let i = 0; i < checkboxes.length; i += 1) {
        checkboxes[i].checked = !this.state.allChecked;
      }

      this.setState({
        allChecked: !this.state.allChecked,
        checkboxes,
      });
    } else {
      checkboxes[index].checked = !checkboxes[index].checked;

      if (
        checkboxes.filter(checkbox => checkbox.checked).length < this.state.checkboxes.length &&
        this.state.allChecked
      ) {
        this.setState({
          allChecked: false,
        });
      } else if (
        checkboxes.filter(checkbox => checkbox.checked).length === this.state.checkboxes.length
      ) {
        this.setState({
          allChecked: true,
        });
      }
      this.setState({
        checkboxes,
      });
    }
  };

  render() {
    return (
      <div>
        <Checkbox text="Все" checked={this.state.allChecked} updateStatus={this.updateStatus} all />
        {this.state.checkboxes.map((checkbox, index) => (
          <Checkbox
            id={checkbox.id}
            index={index}
            text={baggageType[checkbox.baggage]}
            checked={checkbox.checked}
            updateStatus={this.updateStatus}
          />
        ))}
      </div>
    );
  }
}

export default Stops;
