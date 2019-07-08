import React from 'react';
import './App.css';

import moment from 'moment';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Advantages from './components/Advantages/Advantages';

import Calendar from './components/Calendar/Calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       films: [],
    };
}
calendarDayClick = (date) => { 
	console.log(date);
	this.setState({
		day: date,
		show: true,
	})
}
  render() {
  return (
    	<div className="App">
      		{/* <Header />
			<div className="banner">
				<Banner>
					<Advantages />
				</Banner>
			</div> */}

			<Calendar month={moment().month()+1} year={moment().year()} onDayClick={this.calendarDayClick} />
			{
				this.state.show && <div>Test</div>
			}
    	</div>
  	);
  }
}
