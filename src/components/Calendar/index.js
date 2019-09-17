import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './calendar.scss';
import styled, { withTheme } from 'styled-components';
import axios from 'axios';
import Week from './parts/Week';
import Day from './parts/Day';
import { CALENDAR_ORDER_LIST } from '../../utils/constants';
import { WEEK_DAY_SHORT } from '../../utils/constants';
import Button from '../ui/Button';
import {
  LargeAndUp,
  MediumAndDown,
} from '../../utils/break-points';
import BookingTime from './parts/BookingTime';

const CalendarWrapper = styled.div`
  background-color: ${data => (data.theme.calendar.bgColorCalendar)};font-family: 'Hind', sans-serif;
}
`;

const NavigationMonth = styled.i`
  background-color: ${data => (data.theme.calendar.textColorAvailable)};
  &::before {
    background-color: inherit;
    };
  &::after{
    background-color: inherit;
    }
`;

const ButtonNavigation = styled.button`
    &:hover .month__next, &:hover .month__prev{
    background-color: ${data => (data.theme.calendar.hoverColor)};
    }
`;

const WeekDay = styled.div`
`;

const WeekDays = styled.div`
   background-color: ${data => (data.theme.calendar.bgWeekDays)};
   border: 2px solid ${data => (data.theme.calendar.borderColor)};
   color: ${data => (data.theme.calendar.textColorDayWeek)};
`;
const CalendarNavigation = styled.div`
  background-color: ${data => (data.theme.calendar.bgEmpty)};
  border-top: 2px solid ${data => (data.theme.calendar.borderColor)};;
  border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  color: ${data => (data.theme.calendar.textColorAvailable)};
`;

const CalendarBooking = styled.div`
  border-bottom: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  background-color: ${data => (data.theme.calendar.bgWeekDays)};
`;
const CalendarOrderList = styled.div`
  background-color: ${data => (data.theme.calendar.bgEmpty)};
  color: ${data => (data.theme.calendar.textColorOrderList)};
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
      isOpenBookingTime: false,
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
      this.setState({
        dateContextNew,
      }, () => {
        this.generateTotalSlots();
      });
    };

    detectDayType = (dateContextNew, dateContext, today, idx) => {
      const empty = (moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isBefore(today));
      const todayDay = (moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(today));
      const daysDisplayMoth = (moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(moment(dateContext).format('YYYY MM DD'), 'month')
           && moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today));
      let dayType;
      if (empty) {
        dayType = 'emptyDay';
      } else if (todayDay) {
        dayType = 'todayDay';
      } else if (!todayDay && daysDisplayMoth) {
        dayType = 'daysDisplayMoth';
      } else if (!empty && !todayDay && !daysDisplayMoth) {
        dayType = 'otherDays';
      }
      return (dayType);
    };

    generateTotalSlots = () => {
      const {
        dateContextNew, lengthArrayCalendar, today, dateContext,
      } = this.state;
      const totalSlots = Array.from(Array(lengthArrayCalendar)
        .fill().map((_, idx) => ({
          moment: moment(dateContextNew).add(idx, 'd').format('LL'),
          dayNam: moment(dateContextNew).add(idx, 'd').format('D'),
          dayType: this.detectDayType(dateContextNew, dateContext, today, idx),
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
      isOpenBookingTime,
      checkTime,
    } = this.state;
    const classNameNav = (currentMonth === month && currentYear === year ? 'page__left hidden__navigation' : 'page__left');
    const classNameNavButton = (currentMonth === month && currentYear === year ? 'hidden__button__back' : 'button__back');
    return (
      <CalendarWrapper className="calendar">
        <div className="calendar_container">
          <CalendarNavigation className="calendar_navigation">
            <ButtonNavigation
              type="button"
              className={classNameNav}
              onClick={() => { this.navigationMonth('prev'); }}
            >
              <NavigationMonth className="month__prev" />
            </ButtonNavigation>
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
                  Back to
                {' '}
                {' '}
                {currentMonth}
                {' '}
              </button>
            </div>
            <ButtonNavigation
              type="button"
              className="page__right"
              onClick={() => { this.navigationMonth('next'); }}
            >
              <NavigationMonth className="month__next" />
            </ButtonNavigation>
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
                      <CalendarBooking className="block calendar_booking">
                        <BookingTime
                          isOpen={isOpenBookingTime}
                          onClose={e => this.setState({ isOpenBookingTime: false })}
                          day={clickedDay}
                          time={checkTime}
                          kindEvent={this.props.kindEvent}
                        />
                        <CalendarOrderList className="calendar_order_list">
                          <LargeAndUp>
                            <h2 className="calendar_order_list_headline">
                                Доступные места
                              {' '}
                              {clickedDay}
                            </h2>
                            <ul className="calendar_order_list_ul">

                              {
                              CALENDAR_ORDER_LIST.map((item, i) => (
                                <li className="li_item_time">
                                  <span className="item_time">{this.props.kindEvent === 'HideAndSeek' ? item.timeNight : item.timeDay }</span>
                                  {item.available
                                    ? (
                                      <div className="book_item_time">
                                        <span className="available_item_time">доступно для резервирования</span>
                                        <Button
                                          handleClick={e => this.setState({
                                            isOpenBookingTime: true,
                                            checkTime: this.props.kindEvent === 'HideAndSeek'
                                              ? item.timeNight : item.timeDay,
                                          })}
                                        >
                                          Зарезервировать
                                        </Button>
                                      </div>
                                    )
                                    : (
                                      <div className="book_item_time">
                                        <span className="available_item_time">уже зарезервировано</span>
                                        <Button>
                                          Недоступно
                                        </Button>
                                      </div>
                                    )}
                                </li>
                              ))
                            }
                            </ul>
                          </LargeAndUp>
                          <MediumAndDown>
                            <h2 className="calendar_order_list_headline">
                              {clickedDay}
                            </h2>
                            <ul>
                              {
                                  CALENDAR_ORDER_LIST.map((item, i) => (
                                    <li className="li_item_time_small_device">
                                      {item.available
                                        ? (
                                          <Button
                                              onClick={e => this.setState({
                                                isOpenBookingTime: true,
                                                checkTime: this.props.kindEvent === 'HideAndSeek'
                                                    ? item.timeNight : item.timeDay,
                                              })}
                                            className="button_book_small_device"
                                          >
                                            <div className="button_book_small_device_content">
                                              <span className="item_time_small_device">{this.props.kindEvent === 'HideAndSeek' ? item.timeNight : item.timeDay}</span>
                                              <span className="available_item_time_small_device">доступно для резервирования</span>
                                            </div>
                                          </Button>
                                        )
                                        : (
                                          <Button className="button_book_small_device">
                                            <div className="button_book_small_device_content">
                                              <span className="item_time_small_device">{this.props.kindEvent === 'HideAndSeek' ? item.timeNight : item.timeDay}</span>
                                              <span className="available_item_time_small_device">уже зарезервировано</span>
                                            </div>
                                          </Button>
                                        )}
                                    </li>
                                  ))
                              }
                            </ul>
                          </MediumAndDown>
                        </CalendarOrderList>
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
