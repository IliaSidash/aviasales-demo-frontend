import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Downshift from 'downshift';

const Input = styled.input`
  font-style: normal;
  font-weight: normal;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
  padding: 18px;
  border: none;
  color: #4a4a4a;
  width: 100%;

  :placeholder {
    color: #a0b0b9;
  }
  @media screen and (min-width: 768px) {
    border-top-right-radius: 4px;
  }
  @media screen and (min-width: 1200px) {
    border-top-right-radius: 0px;
    margin-bottom: 0;
  }
`;

const Submenu = styled.div`
  position: absolute;
  top: 101%;
  width: 100%;
  z-index: 2;
  background: #fff;
`;

const City = styled.div`
  padding: 15px;
  :nth-child(2n + 2) {
    background: #f4f4f4;
  }
`;

const Autocomplete = ({ cities, placeholder }) => (
  <Downshift
    render={({
 getInputProps, getItemProps, isOpen, inputValue,
}) => (
  <div>
    <Input {...getInputProps({ placeholder })} />
    {isOpen ? (
      <Submenu>
        {cities
              .filter(city => !inputValue || city.toLowerCase().includes(inputValue.toLowerCase()))
              .map(item => (
                <City {...getItemProps({ item })} key={item}>
                  {item}
                </City>
              ))}
      </Submenu>
        ) : null}
  </div>
    )}
  />
);

Autocomplete.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Autocomplete;
