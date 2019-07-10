import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import Parallax from './components/Parallax';

const App = () => {
  const layersGroup = [<Banner />, <Advantages />];
  return (
    <div className="app">
      <Parallax layersGroup={layersGroup} />
    </div>
  );
};

export default App;
