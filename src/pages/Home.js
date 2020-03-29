import React from 'react';

import Advantages from '../components/Advantages/Advantages';
import Banner from '../components/Banner';
import Menu from '../components/Menu';

import advantages from '../data/advantagePlace';
import data from '../data/mainPage.json';

import '../components/Banner/banner.scss';

const Home = () => (
  <React.Fragment>
    <div className="wrap">
      <Banner main title={data.mainTitle}>
        <Menu />
      </Banner>
    </div>
    <Advantages
      ourLocations={data.ourLocations}
      services={data.ourGames.services}
      gamesList={data.ourGames}
      advantages={advantages}
    />
  </React.Fragment>
);

export default Home;
