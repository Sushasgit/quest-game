import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Prices from './pages/Prices';
import OurGames from './pages/OurGames';

import './App.css';
import Development from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/prices" component={Prices} />
      <Route path="/games" component={OurGames} />
      <Route path="/dev" component={Development} />
    </Router>
  );
};

export default App;
