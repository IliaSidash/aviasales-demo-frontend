import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-transform: none;
  margin: 12px 0 24px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-transform: none;
  margin: 16px 0 17px;
`;

const alliances = [
  {
    id: 1,
    text: 'Все',
    price: '',
  },
  {
    id: 2,
    text: 'Star Alliance',
    price: '11 150 ₽',
  },
  {
    id: 3,
    text: 'OneWorld',
    price: '12 370 ₽',
  },
  {
    id: 4,
    text: 'SkyTeam',
    price: '16 290 ₽',
  },
];

const companies = [
  {
    id: 1,
    text: 'Все',
    price: '',
  },
  {
    id: 2,
    text: 'Aegean Airlines',
    price: '20 357 ₽',
  },
  {
    id: 3,
    text: 'Air Algerie',
    price: '29 105 ₽',
  },
  {
    id: 4,
    text: 'Air Europa',
    price: '22 202 ₽',
  },
  {
    id: 5,
    text: 'Air France',
    price: '17 050 ₽',
  },
  {
    id: 6,
    text: 'Air Moldova',
    price: '22 613 ₽',
  },
  {
    id: 7,
    text: 'Alitalia',
    price: '22 717 ₽',
  },
  {
    id: 8,
    text: 'Alitalia CityLiner',
    price: '20 271 ₽',
  },
  {
    id: 9,
    text: 'Belle Air',
    price: '18 371 ₽',
  },
  {
    id: 10,
    text: 'British Airways',
    price: '23 839 ₽',
  },
  {
    id: 11,
    text: 'Brussels Airlines',
    price: '11 150 ₽',
  },
  {
    id: 12,
    text: 'Bulgaria Air',
    price: '20 114 ₽',
  },
];

class Companies extends React.Component {
  state = {
    allCompanies: true,
  };

  updateStatus = () => {
    this.setState(prevState => ({
      allCompanies: !prevState.allCompanies,
    }));
  };

  render() {
    return (
      <div>
        <Checkbox checked={this.state.allCompanies} index={0} updateStatus={this.updateStatus} />
        <Text>
          Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
        </Text>
        <Title>Альянсы</Title>
        {alliances.map((alliance, index) => (
          <Checkbox
            index={index}
            id={alliance.id}
            text={alliance.text}
            updateStatus={this.updateStatus}
            price={alliance.price}
          />
        ))}
        <Title>Авиакомпании</Title>
        {companies.map((company, index) => (
          <Checkbox
            index={index}
            id={company.id}
            text={company.text}
            updateStatus={this.updateStatus}
            price={company.price}
          />
        ))}
      </div>
    );
  }
}

export default Companies;
