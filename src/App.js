import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import './App.scss';

import asyncComponent from './components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('./pages/Home'));
const AsyncPrices = asyncComponent(() => import('./pages/Prices'));
const AsyncOurGames = asyncComponent(() => import('./pages/OurGames'));
const AsyncPaintBall = asyncComponent(() => import('./pages/PaintBall'));
const AsyncHideAndSeek = asyncComponent(() => import('./pages/HideAndSeek'));
const AsyncStrikeBall = asyncComponent(() => import('./pages/StrikeBall'));
const AsyncQuadro = asyncComponent(() => import('./pages/Quadro'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: true,
      theme: darkTheme,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isDay = !this.state.isDay;

    this.setState({
      isDay,
      theme: isDay ? darkTheme : lightTheme,
    });
  }

  render() {
    const { theme, isDay } = this.state;
    return (
      <React.Fragment>
        <GlobalStyles />
        <CheckBoxWrapper theme={theme} onChange={this.handleClick}>
          <CheckBox
            role="switch"
            aria-checked={isDay}
            theme={theme}
            id="checkbox"
            type="checkbox"
            defaultChecked={isDay}
          />
          <CheckBoxLabel htmlFor="checkbox" />
          Dark theme
        </CheckBoxWrapper>
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/prices" component={AsyncPrices} />
            <Route path="/games" component={AsyncOurGames} />
            <Route path="/hideandseek" component={AsyncHideAndSeek} />
            <Route path="/paintball" component={AsyncPaintBall} />
            <Route path="/strike" component={AsyncStrikeBall} />
            <Route path="/quadro" component={AsyncQuadro} />
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const CheckBoxWrapper = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  alignItems: center;
  color: ${props => props.theme.toggleButton.textColor};
  margin: 10px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.theme.toggleButton.bgColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default App;
