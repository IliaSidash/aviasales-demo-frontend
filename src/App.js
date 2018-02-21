import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Directions from "./Directions";
import Prices from "./Prices";
import Partners from "./Partners";
import Subscribe from "./Subscribe";
import Offer from "./Offer";
import Help from "./Help";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

import Result from "./Search/Result";

const Main = () => (
  <div>
    <Header />
    <Directions />
    <Prices />
    <Partners />
    <Subscribe />
    <Offer />
    <Help />
    <MobileApp />
  </div>
);

const Search = () => <Result />;

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  );
};
