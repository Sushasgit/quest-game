import React, { Component } from 'react';
import './Calendar.css';
import moment from 'moment';

export default class Calendar extends Component {
    state = {
      dateContext: moment().weekday(0),
      today: moment(),
      // showMonthPopup: false,
      // showYearPopup: false,
    };
    // constructor(props) {
    //   super(props);
    //   this.width = props.width || '350px';
    //   this.style = props.style || {};
    // };

    weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    // months = moment.months();

    year = () => this.state.dateContext.format('Y');

    month = () => this.state.dateContext.format('MMMM');

    currentMonth = () => moment().weekday(0).format('MMMM');

    daysInMonth = () => this.state.dateContext.daysInMonth();

    currentYear = () => moment().weekday(0).format('Y');

    today = () => moment().format('D');

    firstDayOfMonth = () => {
      const { dateContext } = this.state;
      const firstDayStart = moment(dateContext).startOf('month').format('d'); // dayOf week
      let firstDay;
      +firstDayStart === 0 ? firstDay = firstDayStart + 6 : firstDay = firstDayStart - 1;
      return firstDay;
    };

    // resetDateContext = () => {
    //   this.state = {
    //     dateContext: moment().weekday(0),
    //     today: moment(),
    //   };
    // }

    firstDayInNextMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).add(1, 'month');
      const firstDayStart = moment(dateContext).startOf('month').format('d'); // dayOf week
      let firstDayNextMonth;
      +firstDayStart === 0 ? firstDayNextMonth = firstDayStart + 6 : firstDayNextMonth = firstDayStart - 1;
      return firstDayNextMonth;
    }

    prevMonthQuantityDay = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).subtract(1, 'month');

      console.log('DATE-CONTEXT!!!!!!!!!!!', dateContext.daysInMonth());
      return dateContext.daysInMonth();
    };

    nextMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).add(1, 'month');
      this.setState({
        dateContext,
      });
      this.props.onNextMonth && this.props.onNextMonth();
    };

    prevMonth = () => {
      let dateContext = Object.assign({}, this.state.dateContext);
      dateContext = moment(dateContext).subtract(1, 'month');
      this.setState({
        dateContext,
      });
      this.props.onPrevMonth && this.props.onPrevMonth();
    };

    MonthNav = () => (
      <span className="label-month">
        {this.month()}
      </span>
    );

    YearNav = () => (
      <span
        className="label-year"
      >
        {this.year()}
      </span>
    )

    onDayClick = (e, day) => {
      this.props.onDayClick && this.props.onDayClick(e, day);
    }

    onDayClick = (e, day, week) => {
      this.setState({
        clickedWeek: week,
        clickedDay: day,
        clickedMonth: this.month(),
        clickedYear: this.year(),
      });
    };

    buttonClick = (e) => {
      this.setState(
        {
          dateContext: moment().weekday(0),
          today: moment(),
        },
      );
    };

    render() {
      const classNameNavButton = (this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'hidden-button-back' : 'button-back');
      const i = 0;
      const weekNum = 0;
      const navigationButtonBack = (
        <button
          className={classNameNavButton}
          onClick={(e) => {
            this.buttonClick(e);
            this.onDayClick(e, i, weekNum);
          }}
        >
          Back to
          {this.currentMonth()}
          {' '}

        </button>
      );

      const classNameNav = (this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'page-left hidden-navigation' : 'page-left');

      const navigationLeft = (
          <span className={classNameNav} onClick={(e) => { this.prevMonth(); this.onDayClick(e, i, weekNum); }}>
          <i className="month-prev" />
        </span>
      );
      const navigationright = (
        <span className="page-right" onClick={(e) => { this.nextMonth(); this.onDayClick(e, i, weekNum); }}>
          <i className="month-next" />
        </span>
      );
      // map weekdays
      const weekdays = this.weekdaysShort.map(day => (
        <div key={day} className="week-day">{day}</div>
      ));

      const daysInPrevMonth = [];
      for (let i = this.prevMonthQuantityDay() - (this.firstDayOfMonth() - 1); i <= this.prevMonthQuantityDay(); i++) {
        const classNameForDayPrevMonth = (this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'empty-slot' : 'future-day available-day');
        const weekNum = 1;
        daysInPrevMonth.push(<div key={i * 80} className={classNameForDayPrevMonth} onClick={(e) => { this.onDayClick(e, i, weekNum); }}>
          <span className="date-number">{i}</span>
                             </div>);
      }

      const daysInNextMonth = [];
      for (let i = 1; i < 7 - (this.firstDayInNextMonth() - 1); i++) {
        const weekNum = Math.ceil((i + this.daysInMonth()) / 7);
        // console.log('weekNum1111', weekNum, this.daysInMonth());
        daysInNextMonth.push(<div key={i * 80} className="future-day available-day" onClick={(e) => { this.onDayClick(e, i, weekNum); }}>
          <span className="date-number">{i}</span>
                             </div>);
      }

      // console.log('prev', daysInPrevMonth, 'next', daysInNextMonth);

      const daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
        const classNamePastDay = (d < +this.today() && this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'empty-slot ' : 'available-day');
        const classNameCurrentFutureDay = (d === +this.today() && this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'current-day' : '');

        const weekNum = Math.ceil(d / 7);
        // console.log('weekNum', weekNum);
        daysInMonth.push(
          <div key={d} className={`${classNamePastDay} ${classNameCurrentFutureDay}`} onClick={(e) => { this.onDayClick(e, d, weekNum); }}>
            <span className="date-number">{d}</span>
          </div>,
        );
      }

      // console.log('days:', daysInMonth);

      const totalSlots = [...daysInPrevMonth, ...daysInMonth, ...daysInNextMonth];
      // console.log('TOTAL', totalSlots);
      const rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if ((i % 7) != 0 || i === 0) {
          cells.push(row);
          // console.log('cellscellsOLD!!!!', totalSlots);
        } else {
          const insertRow = cells.slice();
          // console.log('insertRowOLD!!', insertRow);
          rows.push(insertRow);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          const insertRow = cells.slice();
          rows.push(insertRow);
        }
      });

      // console.log(rows);
      const trElems = rows.map((d, i) => (
        <div className="test">
          <div key={i * 100} className="week">
            {d}
          </div>
          {
                this.state.clickedWeek === i + 1 ? (
                  <div style={{ color: 'deeppink', minHeight: '150px', border: '1px solid black' }}>
                        Book
                    {' '}
                    {this.state.clickedDay}
                    {' '}
                    {' '}
                    {' '}
                    {this.state.clickedMonth}
                    {' '}
                    {' '}
                    {' '}
                    {this.state.clickedYear}
                  </div>
                ) : null
              }
        </div>
      ));


      return (
        <div className="calendar-container">
          <div className="calendar">
              <div className="calendar-title">
                {navigationLeft}
                <div className="selected-month-year">
                  <this.MonthNav />
                  <this.YearNav />
                  {navigationButtonBack}
                </div>
                {navigationright}
              </div>
                <div className="weekdays">
                  {weekdays}
                </div>
                <div className="calendar-wrap">
                  {trElems}
                </div>
          </div>
        </div>
      );
    }
}
