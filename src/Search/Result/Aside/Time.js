import React from "react";
import styled from "styled-components";

import air from "./img/air.svg";

const Time = styled.div`
  padding-top: 26px;
`;

const Direction = styled.div`
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin-bottom: 15px;
`;

const Img = styled.img`
  margin: 0 5px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-transform: none;
`;

const Interval = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`;

const Date = Text.extend``;

const Line = styled.div`
  height: 2px;
  background: #00acde;
  border-radius: 2px;
  margin: 7px 8px;
  position: relative;
`;

const Point = styled.div`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
  position: absolute;
  left: ${props => (props.right ? "auto" : "-8px")};
  right: ${props => (props.right ? "-8px" : "auto")};
  top: 50%;
  transform: translatey(-50%);
  cursor: pointer;
`;

function Options(props) {
  const intervals = props.interval;
  const travelTime = props.travelTime;

  console.log(travelTime);

  if (intervals) {
    return (
      <div>
        {intervals.map(interval => (
          <Time>
            <Direction>
              {interval.from.city}
              <Img src={air} /> {interval.to.city}
            </Direction>
            <Text> Вылет из {interval.from.city}: </Text>
            <Interval>
              <Date>{interval.from.start}</Date>
              <Date>{interval.from.end}</Date>
            </Interval>
            <Line>
              <Point />
              <Point right />
            </Line>
          </Time>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {travelTime.map(interval => (
          <Time>
            <Direction>
              {interval.from}
              <Img src={air} /> {interval.to}
            </Direction>
            <Interval>
              <Date>{interval.start}</Date>
              <Date>{interval.end}</Date>
            </Interval>
            <Line>
              <Point />
              <Point right />
            </Line>
          </Time>
        ))}
      </div>
    );
  }
}

export default props => (
  <Options interval={props.interval} travelTime={props.travelTime} />
);
