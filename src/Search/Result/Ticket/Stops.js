import React from "react";
import styled from "styled-components";

const stop = {
  ru: "Прямой"
};

const Stops = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #4a4a4a;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default props => {
  const stops = props.stops;

  if (stops.length > 0) {
    return <Stops>{stops.join(", ")}</Stops>;
  }

  return <Stops>{stop["ru"]}</Stops>;
};
