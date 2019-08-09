import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import loader from './images/loader.svg';
import GlobalStyles from './styles/global';
import {darkTheme, lightTheme} from './styles/theme';
import './App.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Prices = React.lazy(() => import('./pages/Prices'));
const OurGames = React.lazy(() => import('./pages/OurGames'));
const Development = React.lazy(() => import('./pages/Development'));
const Calendar = React.lazy(() => import('./components/Calendar/index.js'));
const HideAndSeek = React.lazy(() => import('./pages/HideAndSeek'));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: true,
      theme: darkTheme,
      title: 'Click the Sun to switch the theme'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isDay = !this.state.isDay;

    this.setState({
      isDay,
      theme: isDay ? darkTheme : lightTheme,
    }, ()=> {
      console.log(this.state)
    });
  }

  render() {
    const { theme, isDay } = this.state;
    return (
      <Suspense fallback={<img src={loader} alt="" />}>
        <GlobalStyles />
        <CheckBoxWrapper theme={theme} onChange={this.handleClick}>
          <CheckBox
            role="switch"
            aria-checked={isDay}
            aria-labelledby="toggle"
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
            <Route exact path="/" component={Home} />
            <Route path="/prices" component={Prices} />
            <Route path="/games" component={OurGames} />
            <Route path="/dev" component={Development} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/hideandseek" component={HideAndSeek} />
          </Router>
        </ThemeProvider>
      </Suspense>
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
