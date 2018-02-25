import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./style.css";
import moment from "moment";
import { parseDate } from "react-day-picker/moment";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

import icon from "./img/date-icon.png";

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
const Option = styled.div`
  margin: 15px 0 16px 24px;
  display: flex;
  align-items: center;
`;

const Switch = styled.div`
  width: 40px;
  height: 24px;
  background: #bccdd6;
  border-radius: 100px;
  position: relative;
  margin-right: 16px;
  cursor: pointer;
  :before {
    content: "";
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #4a4a4a;
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

function formatDate(inputString) {
  return format(inputString, "DD MMMM, dd", {
    locale: ruLocale
  });
}

function CustomOverlay({ classNames, selectedDay, children }) {
  return (
    <div className={classNames.overlayWrapper}>
      <div className={classNames.overlay}>
        {children}
        <Option>
          <Switch />
          <Text>Показать цены в одну сторону </Text>
        </Option>
      </div>
    </div>
  );
}

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

    return (
      <InputsBox>
        <CustomInput>
          <DayPickerInput
            overlayComponent={CustomOverlay}
            onDayChange={this.handleFromChange}
            value={from}
            placeholder="Туда"
            formatDate={formatDate}
            parseDate={parseDate}
            // showOverlay
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
            overlayComponent={CustomOverlay}
            ref={el => (this.to = el)}
            value={to}
            placeholder="От туда"
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
