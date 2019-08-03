import React, { Component } from 'react';
import moment from 'moment';
import './Calendar.css';
import Week from './parts/Week';
import Day from './parts/Day';

import { WEEK_DAY_SHORT } from '../../utils/constants';
import {debuggerStatement} from "@babel/types";

class Calendar extends Component {
  constructor(props) {
    debugger
    const dateContext = moment().weekday(0);
    super(props);
    this.state = {
      dateContext,
      year: dateContext.format('Y'),
      month: dateContext.format('MMMM'),
      currentMonth: moment().weekday(0).format('MMMM'),
      daysInMonth: dateContext.daysInMonth(),
      currentYear: moment().weekday(0).format('Y'),
      today: moment().format('D'),
    };
  }


  componentWillMount() {
    this.firstDayOfMonth();
    this.firstDayInNextMonth();
    this.prevMonthQuantityDay();
  }

  firstDayOfMonth = () => {
    const { dateContext } = this.state;
    const firstDayStart = moment(dateContext).startOf('month').format('d'); // dayOf week
    let firstDay;
    // TODO REFACTOR conditions
    +firstDayStart === 0 ? firstDay = firstDayStart + 6 : firstDay = firstDayStart - 1;
    this.setState({
      firstDay,
    }, () => {
      this.renderDaysInNextMonth(firstDay);
      this.renderDaysInPrevMonth();
      this.renderDaysCurrentMonth();
    });
  };

  firstDayInNextMonth = () => {
    const { dateContext } = this.state;
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).add(1, 'month');
    const firstDayStart = moment(newDateContext).startOf('month').format('d'); // dayOf week
    let firstDayNextMonth;
    +firstDayStart === 0 ? firstDayNextMonth = firstDayStart + 6 : firstDayNextMonth = firstDayStart - 1;
    this.setState({
      firstDayNextMonth,
    });
  };

  prevMonthQuantityDay = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, 'month');

    this.setState({
      prevMonthQuantityDay: dateContext.daysInMonth(),
    });
  };

  renderMonthNav = () => (
    <span className="label-month">
      {this.state.month}
    </span>
  );

  renderYearNav = () => (
    <span
      className="label-year"
    >
      {this.state.year}
    </span>
  );

  renderDaysInPrevMonth = () => {
    const {prevMonthQuantityDay, firstDay, currentMonth, currentYear, month, year} = this.state;
    const startDay = prevMonthQuantityDay - (+firstDay - 1);
    let prevMonthDaysArr;
    if (currentMonth <= month && currentYear <= year) {
      prevMonthDaysArr = Array.from(Array(prevMonthQuantityDay - startDay + 1)
        .fill().map((_, idx) => ({ dayNam: startDay + idx, prev: true, click: false })));
    } else {
      prevMonthDaysArr = Array.from(Array(prevMonthQuantityDay - startDay + 1)
        .fill().map((_, idx) => ({ dayNam: startDay + idx, next: true, click: true })));
    }
    this.setState({
      prevMonthDaysArr,
    });
  };

  renderDaysInNextMonth = () => {
    const { firstDayNextMonth } = this.state;
    const endDate = 7 - (firstDayNextMonth);
    const nextMonthDaysArr = Array.from(Array(endDate)
      .fill().map((_, idx) => ({ dayNam: 1 + idx, next: true, click: true })));
    this.setState({
      nextMonthDaysArr,
    });
  };

  renderDaysCurrentMonth = () => {
    const {daysInMonth, currentMonth, currentYear, today, month, year} = this.state;
    let currentMonthDaysArr;
    if (currentMonth <= month && currentYear <= year) {
      const prevDaysInMonth = Array.from(Array(today - 1)
        .fill().map((_, idx) => ({ dayNam: 1 + idx, prev: true, click: false })));
      const todayInMonth = [{ dayNam: today, today: true, click: true }];
      const futureDaysInMonth = Array.from(Array(daysInMonth - today)
        .fill().map((_, idx) => ({ dayNam: +today + 1 + idx, current: true, click: true })));
      currentMonthDaysArr = [...prevDaysInMonth, ...todayInMonth, ...futureDaysInMonth]
    } else {
      currentMonthDaysArr = Array.from(Array(daysInMonth)
        .fill().map((_, idx) => ({ dayNam: 1 + idx, current: true, click: true })));
    }
    this.setState({
      currentMonthDaysArr,
    }, () => {
      this.generateTotalArray();
    });
  };

  generateTotalArray = () => {
    const { prevMonthDaysArr, nextMonthDaysArr, currentMonthDaysArr } = this.state;
    const totalSlots = [...prevMonthDaysArr, ...currentMonthDaysArr, ...nextMonthDaysArr];
    const rows = [];
    totalSlots.forEach((item, i) => {
      if ((i % 7) === 0 || (i + 1) === totalSlots.length) {
        rows.push(totalSlots.slice(i - 7, i));
      }
    });
    this.setState({
      rows,
    });
  };

    navigationMonth = (operator) => {
      let dateContext = Object.assign({}, this.state.dateContext);
      switch (operator) {
        case 'next': dateContext = moment(dateContext).add(1, 'month');
          break;
        case 'prev': dateContext = moment(dateContext).subtract(1, 'month');
          break;
        default: dateContext = moment().weekday(0);
      }
      this.setState({
        dateContext,
        year: dateContext.format('Y'),
        month: dateContext.format('MMMM'),
        daysInMonth: dateContext.daysInMonth(),
        clickedWeek: null,
      }, () => {
        this.firstDayOfMonth();
        this.firstDayInNextMonth();
        this.prevMonthQuantityDay();
      });
    };

  onDayClick = (e, day, week) => {
    this.setState({
      clickedWeek: week,
      clickedDay: day,
    });
  };

  render() {
    const {
      currentMonth,
      month,
      currentYear,
      year,
      rows,
      clickedWeek,
      clickedDay,
    } = this.state;
    const classNameNav = (currentMonth === month && currentYear === year ? 'page-left hidden-navigation' : 'page-left');
    const classNameNavButton = (currentMonth === month && currentYear === year ? 'hidden-button-back' : 'button-back');
    return (
      <div>
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-title">
              <button
                type="button"
                className={classNameNav}
                onClick={() => { this.navigationMonth('prev'); }}
              >
                <i className="month-prev" />
              </button>
              <div className="selected-month-year">
                {this.renderMonthNav()}
                {this.renderYearNav()}
                <button
                  type="button"
                  className={classNameNavButton}
                  onClick={() => {
                    this.navigationMonth('toCurrentMonth');
                  }}
                >
                  Back to
                  {currentMonth}
                  {' '}
                </button>
              </div>
              <button
                type="button"
                className="page-right"
                onClick={() => { this.navigationMonth('next'); }}
              >
                <i className="month-next" />
              </button>
            </div>
            <div className="weekdays">
              {
                WEEK_DAY_SHORT.map(day => (
                  <div key={day} className="week-day">{day}</div>
                ))
              }
            </div>
            {
              rows && rows.map((week, weekIndex) => (
                <div key={weekIndex}>
                  <Week>
                    {
                      week.map((day, i) => (
                        <Day
                          week={weekIndex}
                          onDayClick={this.onDayClick}
                          key={i}
                          day={day}
                        />
                      ))
                  }
                  </Week>
                  {
                    weekIndex === clickedWeek ? (
                      <div>
                        Выбранный день:
                        {clickedDay}
                        {' '}
                        {month}
                      </div>
                    ) : null
                  }
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
