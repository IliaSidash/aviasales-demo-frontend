import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import "./style.css";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import { withClickOutside } from "react-clickoutside";
import { FormattedNumber } from "react-intl";

import icon from "./img/date-icon.png";

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

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

const CustomInput = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 1px 2px;
  width: calc(50% - 2px);
  :first-child {
    ${Input} {
      @media screen and (min-width: 768px) {
        border-bottom-left-radius: 4px;
      }
      @media screen and (min-width: 1200px) {
        border-bottom-left-radius: 0px;
      }
    }
  }
  :after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${icon}) no-repeat center;
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
    width: calc(38% - 2px);
  }
`;

const CustomPicker = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 2;
`;

const CustomPickerWithOutside = withClickOutside()(CustomPicker);

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

const Price = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 10px;
  color: ${props => (props.cheap ? "#00C455" : "#a0b0b9")};
  position: absolute;
  width: 100%;
  bottom: 6px;
  left: 50%;
  transform: translatex(-50%);
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

const prices = {
  24: {
    price: 43606,
    cheap: false
  },
  25: {
    price: 43606,
    cheap: false
  },
  26: {
    price: 41920,
    cheap: true
  },
  27: {
    price: 42140,
    cheap: true
  },
  28: {
    price: 42130,
    cheap: true
  }
};

function formatDate(inputString) {
  if (inputString) {
    return format(inputString, "DD MMMM, dd", {
      locale: ruLocale
    });
  }
}

function renderDay(day) {
  const date = day.getDate();

  return (
    <div>
      {date}
      {prices[date] && (
        <Price cheap={prices[date].cheap}>
          <FormattedNumber
            value={prices[date].price}
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </Price>
      )}
    </div>
  );
}

export default class Picker extends React.Component {
  state = {
    from: undefined,
    to: undefined,
    isDateToOpen: false,
    isDateFromOpen: false
  };

  showDateFrom = () => {
    this.setState({ isDateFromOpen: true });
  };

  showDateTo = () => {
    this.setState({ isDateToOpen: true });
  };

  hideDate = () => {
    this.setState({ isDateFromOpen: false, isDateToOpen: false });
  };

  handleFromChange = (from, { disabled, selected }) => {
    if (!disabled) {
      this.setState({ from, isDateFromOpen: false, isDateToOpen: true });
    }
    if (selected) {
      this.setState({ from: undefined });
    }
  };

  handleToChange = (to, { disabled, selected }) => {
    if (!disabled) {
      this.setState({ to, isDateToOpen: false });
    }
    if (selected) {
      this.setState({ to: undefined });
    }
  };

  render() {
    const { isDateToOpen, isDateFromOpen, from, to } = this.state;
    const modifiers = { start: from, end: to };

    return (
      <InputsBox>
        <CustomInput>
          <Input
            placeholder={"Туда"}
            onClick={this.showDateFrom}
            value={formatDate(from)}
          />
          {isDateFromOpen && (
            <CustomPickerWithOutside onClickOutside={this.hideDate}>
              <DayPicker
                onDayClick={this.handleFromChange}
                locale="ru"
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                disabledDays={{ before: new Date() }}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                renderDay={renderDay}
              />
              <Option>
                <Switch />
                <Text>Показать цены в одну сторону </Text>
              </Option>
            </CustomPickerWithOutside>
          )}
        </CustomInput>
        <CustomInput>
          <Input
            placeholder={"Обратно"}
            onClick={this.showDateTo}
            value={formatDate(to)}
          />
          {isDateToOpen && (
            <CustomPickerWithOutside onClickOutside={this.hideDate}>
              <DayPicker
                onDayClick={this.handleToChange}
                locale="ru"
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                disabledDays={[{ before: new Date() }, { before: from }]}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                renderDay={renderDay}
              />
              <Option>
                <Switch />
                <Text>Показать цены в одну сторону </Text>
              </Option>
            </CustomPickerWithOutside>
          )}
        </CustomInput>
      </InputsBox>
    );
  }
}
