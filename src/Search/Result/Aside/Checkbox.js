import React from "react";
import styled from "styled-components";

import checked from "./img/checked.svg";

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
  border-color: ${props => (props.checked ? "#00ACE2" : "#a0b0b9")};
  background-color: ${props => (props.checked ? "#E1F8FF" : "#ffffff")};
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 6px;
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${checked}) no-repeat center;
    width: 18px;
    height: 18px;
    opacity: ${props => (props.checked ? "1" : "0")};
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

export default class Checkbox extends React.Component {
  state = {
    checked: false
  };

  click = e => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  render() {
    const checkbox = this.props.checkbox;
    return (
      <Label key={checkbox.id}>
        <Input type="checkbox" />
        <CustomCheckbox onClick={this.click} checked={this.state.checked} />
        <Text>{checkbox.text} </Text>
        <Price> {checkbox.price}</Price>
      </Label>
    );
  }
}
