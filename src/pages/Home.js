import React from 'react';

import Banner from '../components/Banner/Banner';
import Advantages from '../components/Advantages/Advantages';
import ScrollProvider from '../components/ScrollProvider';

const Home = () => (
  <React.Fragment>
    <div className="wrap">
      <ScrollProvider>
        <Banner />
      </ScrollProvider>
      <Advantages />
    </div>
  </React.Fragment>
);

export default Home;
