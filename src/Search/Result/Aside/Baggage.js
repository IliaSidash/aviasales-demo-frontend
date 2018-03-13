import React from 'react';

import Checkbox from './Checkbox';

const baggageType = {
  withBaggage: 'Багаж и ручная кладь',
  withoutBaggage: 'Без багажа',
};

class Stops extends React.Component {
  state = {
    handleCheckedAll: true,
    ckeckboxList: [
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
  handleCheckedAll = () => {};

  handleChecked = (index) => {
    const { ckeckboxList } = this.state;
    ckeckboxList[index].checked = !this.state.ckeckboxList[index].checked;

    this.setState({
      ckeckboxList,
    });
  };

  render() {
    return (
      <div>
        {this.state.ckeckboxList.length > 1 && (
          <Checkbox
            text="Все"
            checked={this.state.handleCheckedAll}
            onChange={this.handleAllChecked}
          />
        )}
        {this.state.ckeckboxList.map((checkbox, index) => (
          <Checkbox
            id={checkbox.id}
            index={index}
            text={baggageType[checkbox.baggage]}
            checked={checkbox.checked}
            onChange={this.handleChecked}
          />
        ))}
      </div>
    );
  }
}

export default Stops;
