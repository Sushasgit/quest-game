import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './calendar.scss';
import styled, { withTheme } from 'styled-components';
import Week from './parts/Week';
import Day from './parts/Day';
import { CALENDAR_ORDER_LIST } from '../../utils/constants';
import { WEEK_DAY_SHORT } from '../../utils/constants';

const CalendarWrapper = styled.div`
  background-color: ${data => (data.theme.Calendar.bgColorCalendar)};font-family: 'Montserrat', sans-serif;
}
`;

const NavigationMonth = styled.i`
  background-color: ${data => (data.theme.Calendar.textColorAvailable)};
  &::before {
    background-color: ${data => (data.theme.Calendar.textColorAvailable)};
    };
  &::after{
    background-color: ${data => (data.theme.Calendar.textColorAvailable)};
    }
`;

const WeekDay = styled.div`
   color: ${data => (data.theme.Calendar.textColorDayWeek)};
`;

const WeekDays = styled.div`
   background-color: ${data => (data.theme.Calendar.bgWeekDays)};
   border: 2px solid ${data => (data.theme.Calendar.borderColor)};
`;
const CalendarNavigation = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  border-top: 2px solid ${data => (data.theme.Calendar.borderColor)};;
  border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorAvailable)};
`;

const CalendarBooking = styled.div`
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
`;


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
    };
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
        console.log('calendar', CalendarWrapper)
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
          moment: moment(dateContextNew).add(idx, 'd').format('LL'),
          dayNam: moment(dateContextNew).add(idx, 'd').format('D'),
          empty: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isBefore(today),
          today: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(today),
          currentMonth: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(moment(dateContext).format('YYYY MM DD'), 'month')
              && moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today),
          click: moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today),
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
      clickedDay: null,
    }, () => {
      this.lengthArrayCalendar();
    });
  };

  onDayClick = (e, day, week) => {
    const { clickedWeek, clickedDay } = this.state;
    this.setState(clickedWeek === week && clickedDay === day
      ? prevState => ({
        clickedWeek: null,
        clickedDay: null,
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
    } = this.state;
    const classNameNav = (currentMonth === month && currentYear === year ? 'page__left hidden__navigation' : 'page__left');
    const classNameNavButton = (currentMonth === month && currentYear === year ? 'hidden__button__back' : 'button__back');
    return (
      <CalendarWrapper className="calendar">
          <div className="calendar_container">
          <CalendarNavigation className="calendar_navigation">
            <button
              type="button"
              className={classNameNav}
              onClick={() => { this.navigationMonth('prev'); }}
            >
              <NavigationMonth className="month__prev" />
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
              <NavigationMonth className="month__next" />
            </button>
          </CalendarNavigation>
          <WeekDays className="weekdays">
            {
                WEEK_DAY_SHORT.map(day => (
                  <WeekDay key={day} className="week-day">{day}</WeekDay>
                ))
              }
          </WeekDays>
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
                          clickedDay={clickedDay}
                        />
                      ))
                  }
                  </Week>
                  {
                    weekIndex === clickedWeek ? (
                      <CalendarBooking className="calendar_booking">
                        <div className="calendar_order_list">
                          <h2 className="calendar_order_list_headline">
                                Доступные места
                                {' '}
                                {clickedDay}
                          </h2>
                          <ul>
                            {
                              CALENDAR_ORDER_LIST.map((item, i) => (
                                  <li>
                                      <span>{item.time}</span>
                                    {item.available
                                      ? <div>
                                          <span>Это время доступно для резервирования</span>
                                          <button>Зарезервировать время</button>
                                        </div>
                                      : <div>
                                          <span>Это время уже зарезервироввано</span>
                                          <button>Недоступно</button>
                                        </div>}
                                  </li>
                              ))
                            }
                          </ul>

                        </div>
                      </CalendarBooking>
                    ) : null
                  }
                </div>
              ))}
          </div>
      </CalendarWrapper>
    );
  }
}

export default withTheme(Calendar);
