import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import loader from './images/loader.svg';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import './App.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Prices = React.lazy(() => import('./pages/Prices'));
const OurGames = React.lazy(() => import('./pages/OurGames'));
const Development = React.lazy(() => import('./pages/Development'));

const App = () => {
  return (
    <Suspense fallback={<img src={loader} alt="" />}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/prices" component={Prices} />
          <Route path="/games" component={OurGames} />
          <Route path="/dev" component={Development} />
        </Router>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
