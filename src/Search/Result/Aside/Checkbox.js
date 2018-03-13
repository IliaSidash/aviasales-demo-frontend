import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import isChecked from './img/checked.svg';

const Label = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const CustomCheckbox = styled.span`
  width: 18px;
  height: 18px;
  border: 1px;
  border-style: solid;
  border-color: ${props => (props.checked ? '#00ACE2' : '#a0b0b9')};
  background-color: ${props => (props.checked ? '#E1F8FF' : '#ffffff')};
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 6px;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${isChecked}) no-repeat center;
    width: 18px;
    height: 18px;
    opacity: ${props => (props.checked ? '1' : '0')};
  }
  :hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
  text-transform: none;
  font-style: normal;
  font-weight: normal;
`;

const Price = styled.span`
  flex-grow: 1;
  text-align: right;
  line-height: 36px;
  font-size: 12px;
  color: #a0b0b9;
  font-style: normal;
  font-weight: normal;
`;

const Checkbox = (props) => {
  const {
    index, id, text, price, checked, onChange,
  } = props;
  return (
    <Label
      key={id}
      onClick={() => {
        onChange(index);
      }}
    >
      <CustomCheckbox checked={checked} />
      <Text>{text}</Text>
      {price && (
        <Price>
          <FormattedNumber
            value={price}
            style={['currency']}
            currency="RUB"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </Price>
      )}
    </Label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
