import React, { Component } from 'react';

import Advantages from '../components/Advantages/Advantages';

import '../components/Banner/banner.scss';
import Banner from '../components/Banner/Banner';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <Banner title={'Територрия реальных игр'} />
          <Advantages />
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
