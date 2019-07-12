import React from 'react';

//import logo from './logo.svg';

import './App.css';

import Banner from './components/Banner/Banner';
import Advantages from './components/Advantages/Advantages';
import Parallax from './components/Parallax';

const App = () => {
  const layersGroup = [<Banner />, <Advantages />];
  return (

    <div className="App">
      <Header user={'Susha'} age={29} />
      <FilmList films={this.state.films} />
      <PickyDateTime
        size="m"
        mode={0}
        locale="en-us"
        show={true}
        onClose={() => this.onClose()}
        onYearPicked={res => this.onYearPicked(res)}
        onMonthPicked={res => this.onMonthPicked(res)}
        onDatePicked={res => this.onDatePicked(res)}
      />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    <div className="app">
      <Parallax layersGroup={layersGroup} />

    </div>
  );
};

export default App;
