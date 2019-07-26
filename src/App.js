import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import loader from './images/loader.svg';

import './App.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Prices = React.lazy(() => import('./pages/Prices'));
const OurGames = React.lazy(() => import('./pages/OurGames'));
const Development = React.lazy(() => import('./pages/Development'));

const App = () => {
  return (
    <Suspense fallback={<img src={loader} alt="" />}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/prices" component={Prices} />
        <Route path="/games" component={OurGames} />
        <Route path="/dev" component={Development} />
      </Router>
    </Suspense>
  );
};

export default App;
