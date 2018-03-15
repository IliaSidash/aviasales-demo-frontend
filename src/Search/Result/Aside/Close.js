import React from 'react';
import styled from 'styled-components';

import close from './img/close.svg';

const Close = styled.img`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background: #dadada;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

const CloseFilter = props => <Close onClick={props.onClickReset} src={close} />;
export default CloseFilter;
