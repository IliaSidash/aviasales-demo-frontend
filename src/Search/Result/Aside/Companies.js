import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Companies = (props) => {
  const {
    alliances, companies, checkedAll, onChangeAll, onChange,
  } = props;

  return (
    <div>
      <Checkbox text="Несколько авиакомпаний" />
      <Text>
        Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
      </Text>
      <Title>Альянсы</Title>
      <Checkbox text="Все" checked={checkedAll[0]} onChange={() => onChangeAll('alliances')} />
      {alliances.checkboxes.map((checkbox, index) => (
        <Checkbox
          text={checkbox.text}
          checked={checkbox.checked}
          price={checkbox.price}
          onChange={() => onChange('alliances', index)}
        />
      ))}
      <Title>Авиакомпании</Title>
      <Checkbox text="Все" checked={checkedAll[1]} onChange={() => onChangeAll('companies')} />
      {companies.checkboxes.map((checkbox, index) => (
        <Checkbox
          text={checkbox.text}
          checked={checkbox.checked}
          price={checkbox.price}
          onChange={() => onChange('companies', index)}
        />
      ))}
    </div>
  );
};

Companies.propTypes = {
  alliances: PropTypes.arrayOf(PropTypes.shape({
    checkboxes: PropTypes.array,
  })).isRequired,
  companies: PropTypes.arrayOf(PropTypes.shape({
    checkboxes: PropTypes.array,
  })).isRequired,
  checkedAll: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeAll: PropTypes.func.isRequired,
};

export default Companies;
