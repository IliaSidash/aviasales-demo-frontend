import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import arrowDown from "./img/arrow-down.svg";

const CustomSelect = styled.div`
  position: relative;
  margin: 0 1px 0px;
  width: calc(100% - 2px);
  @media screen and (min-width: 768px) {
    width: ${props =>
      props.searchPage ? "calc(25% - 2px)" : "calc(50% - 2px)"};
  }
  @media screen and (min-width: 1200px) {
    width: calc(22% - 2px);
  }
`;

const Select = styled.div`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  border: none;
  width: 100%;
  appearance: none;
  color: #4a4a4a;
  text-align: left;
  background: #fff;
  cursor: pointer;
  white-space: nowrap;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (min-width: 768px) {
    border-top-right-radius: ${props => (props.searchPage ? "0" : "none")};
    border-bottom-right-radius: ${props => (props.searchPage ? "0" : "none")};
    border-bottom-left-radius: 0px;
  }
  @media screen and (min-width: 1200px) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Type = styled.span`
  color: #a0b0b9;
`;

const ArrowDown = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

class SelectPasagers extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;
    const searchPage = location.pathname === "/search";

    return (
      <CustomSelect searchPage={searchPage}>
        <Select searchPage={searchPage}>
          1 пассажир, <Type>эконом</Type>
        </Select>
        <ArrowDown src={arrowDown} />
      </CustomSelect>
    );
  }
}

export default withRouter(SelectPasagers);
