import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import logo from "./img/logo.svg";

const Logo = styled.div`
  display: ${props => (props.searchPage ? "none" : "block")};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Img = styled.img`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.searchPage ? "40px" : "81px")};
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: ${props => (props.searchPage ? "40px" : "213px")};
  }
`;

const CompanyName = styled.div`
  display: none;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  vertical-align: top;
  margin-left: 12px;
  line-height: 29px;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

class Logotype extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;

    const searchPage = location.pathname === "/search";

    return (
      <Logo searchPage={searchPage}>
        <Img src={logo} alt="aviasales" searchPage={searchPage} />
        <CompanyName>aviasales</CompanyName>
      </Logo>
    );
  }
}

export default withRouter(Logotype);
