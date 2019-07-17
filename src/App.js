import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import ScrollProvider from './components/ScrollProvider';

const App = () => {
  return (
    <div className="app">
      <ScrollProvider>
        <Banner />
      </ScrollProvider>
      <Advantages />
    </div>
  );
};

export default App;
