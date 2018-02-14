import React from "react";
import styled from "styled-components";

import Header from "./Header/index";
import Directions from "./Directions/index";
import Prices from "./Prices/index";
import Offer from "./Offer/index";
import Help from "./Help/index";
import MobileApp from "./MobileApp/index";
import Footer from "./Footer/index";

export default () => {
  return (
    <div>
      <Header />
      <Directions />
      <Prices />
      <Offer />
      <Help />
      <MobileApp />
      <Footer />
    </div>
  );
};
