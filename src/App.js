import React from "react";

import Header from "./Header/index";
import Directions from "./Directions";
import Prices from "./Prices";
import Offer from "./Offer";
import Help from "./Help";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

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
