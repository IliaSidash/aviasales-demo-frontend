import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import aero from "./img/aero.svg";

const Button = styled(Link)`
  box-sizing: border-box;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  color: #fff;
  width: ${props => (props.searchPage ? "auto" : "100%")};
  padding: ${props => (props.searchPage ? "16px 29px" : "14px 0 13px")};
  cursor: pointer;
  position: relative;
  max-width: 308px;
  text-decoration: none;
  display: block;
  margin: 16px auto 0;
  white-space: nowrap;
  :after {
    content: "";
    position: absolute;
    background: url(${aero})no-repeat center;
    width: 26px;
    height: 21px;
    top: 50%;
    left: 50%;
    transform: translate(91px, -50%);
    display: ${props => (props.searchPage ? "none" : "block")};
    @media screen and (min-width: 768px) {
      left: auto;
      right: 24px;
      transform: translateY(-50%);
    }
  }
  @media screen and (min-width: 768px) {
    font-style: normal;
    line-height: normal;
    font-size: ${props => (props.searchPage ? "20px" : "28px")};
    text-align: ${props => (props.searchPage ? "center" : "left")};
    padding: ${props => (props.searchPage ? "16px 24px" : "14px 0 13px 45px")};
    font-weight: bold;
    margin-top: 32px;
    margin-top: ${props => (props.searchPage ? "0" : "32px")};
    width: ${props => (props.searchPage ? "calc(25% - 2px)" : "auto")};
    max-width: ${props => (props.searchPage ? "185px" : "auto")};
  }
  @media screen and (min-width: 992px) {
    max-width: ${props => (props.searchPage ? "238px" : "auto")};
  }
  @media screen and (min-width: 1200px) {
    margin-top: ${props => (props.searchPage ? "0" : "48px")};
    margin-left: ${props => (props.searchPage ? "8px" : "auto")};
    padding: ${props => (props.searchPage ? "16px 25px" : "14px 0 13px 45px")};
    max-width: ${props => (props.searchPage ? "185px" : "auto")};
  }
`;

class Submit extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;
    const searchPage = location.pathname === "/search";

    return (
      <Button to="/search" searchPage={searchPage}>
        Найти билеты
      </Button>
    );
  }
}

export default withRouter(Submit);
