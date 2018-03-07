import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const stop = {
  ru: 'Прямой',
};

const StopsContent = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #4a4a4a;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Stops = (props) => {
  const { stops } = props;

  if (stops.length > 0) {
    return <StopsContent>{stops.join(', ')}</StopsContent>;
  }

  return <StopsContent>{stop.ru}</StopsContent>;
};

Stops.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stops;
