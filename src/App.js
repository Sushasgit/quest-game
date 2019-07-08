import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import PickyDateTime from "react-picky-date-time";

import Header from './components/Header';
import FilmList from './components/FilmList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       films: [],
    };
}

componentDidMount () {
  this.getData();
}

onDatePicked(res) {
  let { date, month, year } = res;
  console.log(res)
}

getData () {
  axios.get('https://swapi.co/api/films/')
  .then((response) => {
    this.setState({
      films: response.data.results,
    })
  })
  .catch( (error) => {
    console.log(error);
  });
}
  render() {
    console.log(this.state)
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
    </div>
  );
  }
}
