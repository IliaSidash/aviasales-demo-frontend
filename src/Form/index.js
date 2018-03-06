import React from 'react';
import styled from 'styled-components';

import InputCity from './InputCity';
import InputDate from './InputDate';
import Select from './Select';
import Submit from './Submit';

const Form = styled.form``;

const InputsBox = styled.div`
  border-radius: 6px;
  margin: 0 -1px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const SearchForm = () => (
  <Form>
    <InputsBox>
      <InputCity value="Москва" air="MOW" arrows />
      <InputCity />
      <InputDate />
      <Select />
    </InputsBox>
    <Submit />
  </Form>
);

export default SearchForm;
