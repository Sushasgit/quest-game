import React, { Component } from 'react';
import moment from 'moment';
import local from 'moment/locale/ru';
import './Calendar.scss';
import { debuggerStatement } from '@babel/types';
import Week from './parts/Week';
import Day from './parts/Day';

import { WEEK_DAY_SHORT } from '../../utils/constants';

class Calendar extends Component {
  constructor(props) {
    const dateContext = moment().locale('ru');
    super(props);
    this.state = {
      dateContext,
      currentYear: moment().format('Y'),
      today: moment().format('YYYY MM DD'),
      month: moment(dateContext).format('MMMM'),
      year: moment(dateContext).format('YYYY'),
      currentMonth: moment().format('MMMM'),
      isToggleOn: true,
    };
  }


    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }


  componentWillMount() {
    this.lengthArrayCalendar();
  }

  lengthArrayCalendar = () => {
    const { dateContext } = this.state;
    const lastDayPrevMonth = parseInt(moment(dateContext).subtract(1, 'month').endOf('month').format('E'), 10);
    const firstDayNextMonth = parseInt(moment(dateContext).add(1, 'month').startOf('month').format('E'), 10);
    const dayPrevMonth = lastDayPrevMonth === 7 ? 0 : lastDayPrevMonth;
    const dayCurrentMonth = moment(dateContext).daysInMonth();
    const dayNextMonth = firstDayNextMonth === 1 ? 0 : 8 - firstDayNextMonth;
    const lengthArrayCalendar = dayPrevMonth + dayCurrentMonth + dayNextMonth;
    this.setState({
      lengthArrayCalendar,
      dayPrevMonth,
    }, () => {
      this.setMomentToStart();
    });
  };


    setMomentToStart =() => {
      const { dateContext, dayPrevMonth } = this.state;
      const dateContextNew = moment(dateContext).date(1).subtract(dayPrevMonth, 'day');
      this.setState({
        dateContextNew,
      }, () => {
        this.generateTotalSlots();
      });
    };

    generateTotalSlots = () => {
      const {
        dateContextNew, lengthArrayCalendar, today, dateContext,
      } = this.state;
      const totalSlots = Array.from(Array(lengthArrayCalendar)
        .fill().map((_, idx) => ({
          moment: moment(dateContextNew).add(idx, 'd').format(),
          dayNam: moment(dateContextNew).add(idx, 'd').format('D'),
          empty: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isBefore(today),
          today: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(today),
          currentMonth: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(moment(dateContext).format('YYYY MM DD'), 'month')
              && moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today),
          click: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today),
          month: 1,
          year: 1,
        })));
      this.setState({
        totalSlots,
      }, () => {
        this.generateCalendarWeeks();
      });
    };

    generateCalendarWeeks = () => {
      const { totalSlots } = this.state;
      const rows1 = [];
      totalSlots.forEach((item, i) => {
        if ((i % 7) === 0 && i > 0) {
          rows1.push(totalSlots.slice(i - 7, i));
        } else if (i === totalSlots.length - 1) {
          rows1.push(totalSlots.slice(i - 6, i + 1));
        }
      });
      this.setState({
        rows1,
      });
    };

  renderMonthNav = () => (
    <span className="label_month">
      {this.state.month}
    </span>
  );

  renderYearNav = () => (
    <span
      className="label_year"
    >
      {this.state.year}
    </span>
  );

  navigationMonth = (operator) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    switch (operator) {
      case 'next': dateContext = moment(dateContext).add(1, 'month');
        break;
      case 'prev': dateContext = moment(dateContext).subtract(1, 'month');
        break;
      default: dateContext = moment();
    }
    this.setState({
      dateContext,
      year: dateContext.format('Y'),
      month: dateContext.format('MMMM'),
      clickedWeek: null,
    }, () => {
      this.lengthArrayCalendar();
    });
  };

  onDayClick = (e, day, week, checked) => {
    const { clickedWeek, clickedDay} = this.state;
    this.setState(clickedWeek === week && clickedDay === day
      ? prevState =>({
        clickedWeek: false,
        clickedDay: day,
        isToggleOn: !prevState.isToggleOn,
      })
      : {
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
      clickedWeek,
      clickedDay,
      rows1,
      isToggleOn,
    } = this.state;
    const classNameNav = (currentMonth === month && currentYear === year ? 'page__left hidden__navigation' : 'page__left');
    const classNameNavButton = (currentMonth === month && currentYear === year ? 'hidden__button__back' : 'button__back');
    return (
      <div className="calendar">
        <div className="calendar_container">
          <div className="calendar_navigation">
            <button
              type="button"
              className={classNameNav}
              onClick={() => { this.navigationMonth('prev'); }}
            >
              <i className="month__prev" />
            </button>
            <div className="selected__month__year">
              {this.renderMonthNav()}
              {this.renderYearNav()}
              <button
                type="button"
                className={classNameNavButton}
                onClick={() => {
                  this.navigationMonth('toCurrentMonth');
                }}
              >
                  Вернуться в
                {' '}
                {' '}
                {currentMonth}
                {' '}
              </button>
            </div>
            <button
              type="button"
              className="page__right"
              onClick={() => { this.navigationMonth('next'); }}
            >
              <i className="month__next" />
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
              rows1 && rows1.map((week, weekIndex) => (
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
                      <div className="calendar_order_list">
                        Выбранный день: {' '}
                        {clickedDay}
                      </div>
                    ) : null
                  }
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
