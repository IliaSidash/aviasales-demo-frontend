import React from 'react';

import Checkbox from './Checkbox';
import Close from './Close';

const stopText = {
  0: 'Без пересадок',
  1: '1 пересадка',
  2: '2 пересадки',
  3: '3 пересадки',
};

class Stops extends React.Component {
  state = {
    allChecked: true,
    checkboxes: [
      {
        id: 2,
        stops: 0,
        price: 7712,
        checked: true,
      },
      {
        id: 3,
        stops: 1,
        price: 11150,
        checked: true,
      },
      {
        id: 4,
        stops: 2,
        price: 16821,
        checked: true,
      },
      {
        id: 5,
        stops: 3,
        price: 23986,
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
            text={stopText[checkbox.stops]}
            price={checkbox.price}
            checked={checkbox.checked}
            updateStatus={this.updateStatus}
          />
        ))}
        {!this.state.allChecked && <Close />}
      </div>
    );
  }
}

export default Stops;
