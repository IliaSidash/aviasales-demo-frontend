import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import aero from './img/aero.svg';

const ButtonContent = styled(Link)`
  box-sizing: border-box;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  color: #fff;
  width: ${props => (props.withoutIcon ? 'auto' : '100%')};
  padding: ${props => (props.withoutIcon ? '16px 29px' : '14px 0 13px')};
  cursor: pointer;
  position: relative;
  max-width: 308px;
  text-decoration: none;
  display: block;
  margin: 16px auto 0;
  white-space: nowrap;
  :after {
    content: '';
    position: absolute;
    background: url(${aero}) no-repeat center;
    width: 26px;
    height: 21px;
    top: 50%;
    left: 50%;
    transform: translate(91px, -50%);
    display: ${props => (props.withoutIcon ? 'none' : 'block')};
    @media screen and (min-width: 768px) {
      left: auto;
      right: 24px;
      transform: translateY(-50%);
    }
  }
  @media screen and (min-width: 768px) {
    font-style: normal;
    line-height: normal;
    font-size: ${props => (props.withoutIcon ? '20px' : '28px')};
    text-align: ${props => (props.withoutIcon ? 'center' : 'left')};
    padding: ${props => (props.withoutIcon ? '16px 24px' : '14px 0 13px 45px')};
    font-weight: bold;
    margin-top: 32px;
    margin-top: ${props => (props.withoutIcon ? '0' : '32px')};
    width: ${props => (props.withoutIcon ? 'calc(25% - 2px)' : 'auto')};
    max-width: ${props => (props.withoutIcon ? '185px' : 'auto')};
    border-radius: ${props => (props.withoutIcon ? '0' : '4px')};
    border-bottom-right-radius: 4px;
  }
  @media screen and (min-width: 992px) {
    max-width: ${props => (props.withoutIcon ? '238px' : 'auto')};
  }
  @media screen and (min-width: 1200px) {
    border-radius: 4px;
    margin-top: ${props => (props.withoutIcon ? '0' : '48px')};
    margin-left: ${props => (props.withoutIcon ? '8px' : 'auto')};
    padding: ${props => (props.withoutIcon ? '16px 25px' : '14px 0 13px 45px')};
    max-width: ${props => (props.withoutIcon ? '185px' : 'auto')};
  }
`;

const Button = ({ withoutIcon }) => (
  <ButtonContent to="/search" withoutIcon={withoutIcon}>
    Найти билеты
  </ButtonContent>
);

Button.propTypes = {
  withoutIcon: PropTypes.bool.isRequired,
};

export default Button;
