import React from "react";
import styled from "styled-components";

const Slider = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 96px;
  @media screen and (min-width: 1200px) {
    padding: 0 32px;
  }
`;
const Partner = styled.div`
  padding: 0 16px;
  max-width: 149px;
  margin-bottom: 32px;
  @media screen and (min-width: 1200px) {
    max-width: 9999px;
  }
`;
const Img = styled.img``;
const ArrowPrev = styled.div`
  position: absolute;
  box-sizing: border-box;
  border: 3px solid rgba(91, 91, 92, 0.2);
  border-right: none;
  border-top: none;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(45deg);
`;
const ArrowNext = ArrowPrev.extend`
  left: auto;
  right: 0;
  transform: translateY(-50%) rotate(225deg);
`;

const Dots = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
`;

const Dot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #818181;
  border-radius: 50px;
  margin-right: 10px;

  :last-child {
    margin-right: 0px;
  }
`;

const ActiveDot = Dot.extend`
  background: #818181;
`;

export default props => (
  <Slider>
    <ArrowPrev />
    <ArrowNext />
    {props.partners.map(partner => (
      <Partner key={partner.id}>
        <Img src={partner.src} alt={partner.alt} />
      </Partner>
    ))}
    <Dots>
      <ActiveDot />
      <Dot />
      <Dot />
    </Dots>
  </Slider>
);
