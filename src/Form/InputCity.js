import React from "react";
import styled from "styled-components";

import arrows from "./img/arrows.svg";

const Input = styled.input`
  font-style: normal;
  font-weight: normal;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  color: #a0b0b9;
  border: none;
  width: 100%;
  :focus {
    color: #4a4a4a;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const Arrows = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 18px;
  cursor: pointer;
  display: ${props => (props.styled ? "inline" : "none")};
`;

const CustomInput = styled.div`
  position: relative;
  margin: 0 1px 2px;
  width: calc(100% - 2px);
  @media screen and (min-width: 768px) {
    margin: 0 1px 2px;
    width: calc(50% - 2px);
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    width: calc(22% - 2px);
  }
`;

const Airport = styled.span`
  position: absolute;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-transforme: uppercase;
  right: ${props => (props.styled ? "43px" : "16px")};
  top: 50%;
  transform: translateY(-50%);
  color: #a0b0b9;
`;

export default class InputCity extends React.Component {
  state = {
    arrowsIsShowed: this.props.arrows
  };

  render() {
    console.log(this.state.arrowsIsShowed);
    if (this.props.value) {
      return (
        <CustomInput>
          <Input value={this.props.value} />
          <Airport styled={this.state.arrowsIsShowed}>
            {this.props.air}{" "}
          </Airport>
          <Arrows src={arrows} styled={this.state.arrowsIsShowed} />
        </CustomInput>
      );
    } else {
      return (
        <CustomInput>
          <Input placeholder="Город прибытия" />
        </CustomInput>
      );
    }
  }
}
