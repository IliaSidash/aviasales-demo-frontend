import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputCity from '../../Form/InputCity';
import InputDate from '../../Form/InputDate';
import Select from '../../Form/Select';
import Submit from '../../Form/Submit';

import airoport from '../Result/airoports';

const Form = styled.form`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
    border-radius: 4px;
  }
`;

const SearchForm = (props) => {
  const {
    airoportDepart, airoportArrival, departFrom, returnFrom, updateDate,
  } = props;

  return (
    <Form>
      <InputCity value={airoport[airoportDepart].city} air={airoportDepart} arrows />
      <InputCity value={airoport[airoportArrival].city} air={airoportArrival} />
      <InputDate departFrom={departFrom} returnFrom={returnFrom} updateDate={updateDate} />
      <Select customBorder />
      <Submit withoutIcon />
    </Form>
  );
};

SearchForm.propTypes = {
  airoportDepart: PropTypes.string.isRequired,
  airoportArrival: PropTypes.string.isRequired,
  departFrom: PropTypes.number.isRequired,
  returnFrom: PropTypes.number.isRequired,
  updateDate: PropTypes.func.isRequired,
};

export default SearchForm;
