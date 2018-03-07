import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const System = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    display: inline-block;
    position: relative;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    margin-right: 20px;
  }
  :last-child {
    @media screen and (min-width: 768px) {
      margin-right: 0;
      border: none;
    }
  }
`;
const Img = styled.img`
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translatey(-50%);
  }
`;
const Text = styled.span`
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 21px 0 26px;
  }
`;

const App = props => (
  <System key={props.id}>
    <Img src={props.img} />
    <Text>{props.text}</Text>
  </System>
);

App.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default App;
