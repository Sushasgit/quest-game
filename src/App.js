import React from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import Parallax from './components/Parallax';
import Calendar from './components/Calendar/Calendar';
const App = () => {
  const layersGroup = [<Banner />, <Advantages />];
  return (
    <div className="app">
      <Parallax layersGroup={layersGroup} />
        <Calendar onDayClick = {(e,day) => this.onDayClick(e,day)}/>
    </div>
  );
};

export default App;
