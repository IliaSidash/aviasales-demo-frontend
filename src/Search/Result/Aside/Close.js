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
`;

const CloseFilter = () => <Close src={close} />;
export default CloseFilter;
