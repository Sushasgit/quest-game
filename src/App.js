import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

import asyncComponent from './components/AsyncComponent';
import Icon from './components/ui/Icon';
import ScrollToTop from './components/ScrollToTop';
import Switch from './components/ui/Switch';

import './App.scss';

const AsyncHome = asyncComponent(() => import('./pages/Home'));
const AsyncPrices = asyncComponent(() => import('./pages/Prices'));
const AsyncOurGames = asyncComponent(() => import('./pages/OurGames'));
const AsyncGallery = asyncComponent(() => import('./pages/Gallery'));
const AsyncKids = asyncComponent(() => import('./pages/GamePage'));

const PhoneIcon = styled.a`
    position: fixed;
    bottom: 14px;
    right: 60px;
    color: ${props => props.theme.titleColor};
    z-index: 300;

    & svg {
        max-width: 40px;
    }

    @media(max-width: 900px) {
        bottom: 20px;
        right: 10px;
    }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkTheme,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      theme: checked ? darkTheme : lightTheme,
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <React.Fragment>

        <GlobalStyles />
        <Switch defaultValue={true} onChange={this.handleChange} />
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop>
              <Route exact path="/" component={AsyncHome} />
              <Route path="/prices" component={AsyncPrices} />
              <Route path="/games" component={AsyncOurGames} />
              <Route path="/gallery/:id" component={AsyncGallery} />
              <Route path="/game/:type" component={AsyncKids} />
            </ScrollToTop>
          </Router>
        </ThemeProvider>
        <PhoneIcon aria-label="Связаться с нами" theme={theme} href="tel:+380935434241">
          <Icon name="phone" />
        </PhoneIcon>
      </React.Fragment>
    );
  }
}

export default App;
