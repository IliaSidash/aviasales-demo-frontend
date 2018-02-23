import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import InputCity from "./InputCity";
import InputDate from "./InputDate";
import Select from "./Select";
import Submit from "./Submit";

const Form = styled.form``;

const InputsBox = styled.div`
  overflow: hidden;
  border-radius: 6px;
  margin: 0 -1px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

class SearchForm extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <Form>
        <InputsBox>
          <InputCity value={"Москва"} air={"MOW"} arrows />
          <InputCity />
          <InputDate value={"Туда"} />
          <InputDate value={"Обратно"} />
          <Select />
        </InputsBox>
        <Submit />
      </Form>
    );
  }
}

export default withRouter(SearchForm);
