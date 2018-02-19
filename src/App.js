import React from "react";

import Header from "./Header";
import Directions from "./Directions";
import Prices from "./Prices";
import Partners from "./Partners";
import Subscribe from "./Subscribe";
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
      <Partners />
      <Subscribe />
      <Offer />
      <Help />
      <MobileApp />
      <Footer />
    </div>
  );
};
