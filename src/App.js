import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import CardsList from './components/CardsList/CardsList';
import Parallax from './components/Parallax';
import AdvantagesPlace from './components/Advantages/AdvantagesPlace';

const App = () => {
  const layersGroup = [<Banner />, <Advantages />, <AdvantagesPlace />, <CardsList />];
  return (
    <div className="App">
      <Parallax layersGroup={layersGroup} />
    </div>
  );
};

export default App;
