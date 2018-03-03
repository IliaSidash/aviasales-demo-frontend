import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Result from "./Result";

export default () => (
  <div>
    <Helmet>
      <title>Результаты поиска</title>
    </Helmet>
    <Header />
    <Result />
  </div>
);
