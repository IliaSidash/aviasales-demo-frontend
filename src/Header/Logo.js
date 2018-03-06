import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logo from './img/logo.svg';

const LogoContent = styled.div`
  display: ${props => (props.customLogo ? 'none' : 'block')};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Img = styled.img`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.customLogo ? '40px' : '81px')};
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: ${props => (props.customLogo ? '40px' : '213px')};
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

const Logo = ({ customLogo }) => (
  <LogoContent customLogo={customLogo}>
    <Img src={logo} alt="aviasales" customLogo={customLogo} />
    <CompanyName>aviasales</CompanyName>
  </LogoContent>
);

Logo.propTypes = {
  customLogo: PropTypes.bool.isRequired,
};

export default Logo;
