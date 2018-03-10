import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header/';
import Result from './Result/';

class Search extends React.Component {
  state = {
    depart: {
      from: 1519412700000,
      to: 1519423500000,
      stops: [],
      airoportDepart: 'VKO',
      airoportArrival: 'BCN',
    },
    return: {
      from: 1520055300000,
      to: 1520079000000,
      stops: [],
      airoportDepart: 'BCN',
      airoportArrival: 'SVO',
    },
  };

  updateDate = (departFrom, returnFrom) => {
    this.setState({
      depart: {
        ...this.state.depart,
        from: departFrom,
        to: departFrom + 172800000,
      },
      return: {
        ...this.state.return,
        from: returnFrom,
        to: returnFrom + 172800000,
      },
    });
  };

  render() {
    const { airoportDepart, airoportArrival } = this.state.depart;
    const departFrom = this.state.depart.from;
    const departTo = this.state.depart.to;
    const returnFrom = this.state.return.from;
    const returnTo = this.state.return.to;

    return (
      <div>
        <Helmet>
          <title>Результаты поиска</title>
        </Helmet>
        <Header
          airoportDepart={airoportDepart}
          airoportArrival={airoportArrival}
          departFrom={departFrom}
          returnFrom={returnFrom}
          updateDate={this.updateDate}
        />
        <Result
          airoportDepart={airoportDepart}
          airoportArrival={airoportArrival}
          departFrom={departFrom}
          departTo={departTo}
          returnFrom={returnFrom}
          returnTo={returnTo}
        />
      </div>
    );
  }
}

export default Search;
