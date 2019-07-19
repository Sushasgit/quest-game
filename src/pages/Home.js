import React from 'react';

import Banner from '../components/Banner/Banner';
import Advantages from '../components/Advantages/Advantages';
import ScrollProvider from '../components/ScrollProvider';

const Home = () => (
  <React.Fragment>
    <ScrollProvider>
      <Banner />
    </ScrollProvider>
    <Advantages />
  </React.Fragment>
);

export default Home;
