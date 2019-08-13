import React from 'react';

import Advantages from '../components/Advantages/Advantages';

import '../components/Banner/banner.scss';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu';


const Home = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner title="Територрия реальных игр'">
        <Menu />
      </Banner>
    </div>
    <Advantages />
  </React.Fragment>
);

export default Home;
