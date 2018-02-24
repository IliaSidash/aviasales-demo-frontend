import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./style.css";
import moment from "moment";
import { formatDate, parseDate } from "react-day-picker/moment";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

import icon from "./img/date-icon.png";

// const format = require("date-fns/format");

const CustomInput = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 1px 2px;
  width: calc(50% - 2px);

  :after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${icon})no-repeat center;
    width: 17px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: calc(50% - 2px);
  }
  @media screen and (min-width: 1200px) {
  }
`;

const InputsBox = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    width: calc(34% - 2px);
  }
`;

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

export default class DayPicker extends React.Component {
  state = {
    from: undefined,
    to: undefined
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };
  focusTo() {
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }
  showFromMonth = () => {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  };
  handleFromChange = from => {
    this.setState({ from }, () => {
      if (!this.state.to) {
        this.focusTo();
      }
    });
  };
  handleToChange = to => {
    this.setState({ to }, this.showFromMonth);
  };
  render() {
    const props = this.props;
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    const formatFrom = format(from, "DD MMMM, dd", {
      locale: ruLocale
    });

    return (
      <InputsBox>
        <CustomInput>
          <DayPickerInput
            onDayChange={this.handleFromChange}
            value={from}
            placeholder="Туда"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 1,
              locale: "ru",
              months: MONTHS,
              weekdaysLong: WEEKDAYS_LONG,
              weekdaysShort: WEEKDAYS_SHORT,
              firstDayOfWeek: 1
            }}
          />
        </CustomInput>
        <CustomInput>
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="От туда"
            // format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
              locale: "ru",
              months: MONTHS,
              weekdaysLong: WEEKDAYS_LONG,
              weekdaysShort: WEEKDAYS_SHORT,
              firstDayOfWeek: 1
            }}
            onDayChange={this.handleToChange}
          />
        </CustomInput>
      </InputsBox>
    );
  }
}
