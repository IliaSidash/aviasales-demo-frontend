import React from 'react';
import Checkbox from './Checkbox';

const stops = [
  { text: 'Без пересадок' },
  { text: '1 пересадка' },
  { text: '2 пересадки' },
  { text: '3 пересадки' },
];

const CheckboxGroup = () => <div>{stops.map(stop => <Checkbox text={stop.text} />)}</div>;

export default CheckboxGroup;
