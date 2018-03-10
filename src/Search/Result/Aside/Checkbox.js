import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import isChecked from './img/checked.svg';

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: none;
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
`;

const Price = styled.span`
  flex-grow: 1;
  text-align: right;
  line-height: 36px;
  font-size: 12px;
  color: #a0b0b9;
`;

const Checkbox = (props) => {
  const {
    all, index, id, text, price, checked, updateStatus,
  } = props;

  if (all) {
    return (
      <Label>
        <Input type="checkbox" />
        <CustomCheckbox
          onClick={(allChecked) => {
            updateStatus(index, allChecked);
          }}
          checked={checked}
        />
        <Text>{text}</Text>
      </Label>
    );
  }
  return (
    <Label key={id}>
      <Input type="checkbox" />
      <CustomCheckbox
        onClick={() => {
          updateStatus(index);
        }}
        checked={checked}
      />
      <Text>{text}</Text>
      <Price> {price}</Price>
    </Label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  updateStatus: PropTypes.func.isRequired,
  all: PropTypes.bool.isRequired,
};

export default Checkbox;
