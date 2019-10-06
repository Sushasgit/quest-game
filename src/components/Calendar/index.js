import React, { Component } from 'react';
import moment from 'moment';
import styled, { withTheme } from 'styled-components';
import 'moment/locale/ru';


import Week from './parts/Week';
import Day from './parts/Day';
import EVENTS from '../../data/upComingEvents.json';

import { WEEK_DAY_SHORT } from '../../utils/constants';

import './calendar.scss';
import Title from '../ui/Title';
import Icon from '../ui/Icon';

const CalendarWrapper = styled.div`
  background-color: ${data => (
    data.theme.calendar.bgColorCalendar
  )};
}
`;

const NavigationMonth = styled.i`
  background-color: ${data => (
    data.theme.calendar.textColorAvailable
  )};
  &::before {
    background-color: inherit;
    };
  &::after{
    background-color: inherit;
    }
`;

const ButtonNavigation = styled.button`
    &:hover .month__next, &:hover .month__prev{
    background-color: ${data => (
    data.theme.calendar.hoverColor
  )};
    }
`;

const WeekDays = styled.div`
   background-color: ${data => (
    data.theme.calendar.bgWeekDays
  )};
   border: 2px solid ${data => (data.theme.calendar.borderColor)};
   color: ${data => (
    data.theme.calendar.textColorDayWeek
  )};
`;
const CalendarNavigation = styled.div`
  background-color: ${data => (
    data.theme.calendar.bgEmpty
  )};
  border-top: 2px solid ${data => (data.theme.calendar.borderColor)};;
  border-left: 2px solid ${data => (
    data.theme.calendar.borderColor
  )};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  color: ${data => (
    data.theme.calendar.textColorAvailable
  )};
`;

const CalendarBooking = styled.div`
  border-bottom: 2px solid ${data => (
    data.theme.calendar.borderColor
  )};
  border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-right: 2px solid ${data => (
    data.theme.calendar.borderColor
  )};
  background-color: ${data => (data.theme.calendar.bgWeekDays)};
`;
const CalendarOrderList = styled.div`
  background-color: ${data => (
    data.theme.calendar.bgEmpty
  )};
  color: ${data => (data.theme.calendar.textColorOrderList)};
  padding: 15px;
`;

const DateTitle = styled.h4`
  text-align: center;
  color: ${data => (
    data.theme.textColor
  )};
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: center;

  & svg {
      margin-right: 10px;
  }
`;

const Desc = styled.h4`
  color: ${data => (
    data.theme.titleColor
  )};

  font-size: 18px;

   @media(max-width: 900px) {
       font-size: 14px;
   }
`;

const Event = styled.div`
  text-align: center;
  border-top: 3px dashed ${data => (data.theme ? data.theme.textColor : '#fff')};
  border-bottom: 3px dashed ${data => (data.theme ? data.theme.textColor : '#fff')};
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
      timeStamp: moment
        .unix(1571554119)
        .format('LL'),
    };
  }

  componentWillMount() {
    this.lengthArrayCalendar();
  }

    lengthArrayCalendar = () => {
      const { dateContext } = this.state;
      const lastDayPrevMonth = parseInt(
        moment(dateContext).subtract(1, 'month').endOf('month').format('E'),
        10,
      );
      const firstDayNextMonth = parseInt(
        moment(dateContext).add(1, 'month').startOf('month').format('E'),
        10,
      );
      const dayPrevMonth = lastDayPrevMonth === 7
        ? 0
        : lastDayPrevMonth;
      const dayCurrentMonth = moment(dateContext).daysInMonth();
      const dayNextMonth = firstDayNextMonth === 1
        ? 0
        : 8 - firstDayNextMonth;
      const lengthArrayCalendar = dayPrevMonth + dayCurrentMonth + dayNextMonth;
      this.setState({
        lengthArrayCalendar,
        dayPrevMonth,
      }, () => {
        this.setMomentToStart();
      });
    };

    setMomentToStart = () => {
      const { dateContext, dayPrevMonth } = this.state;
      const dateContextNew = moment(dateContext)
        .date(1)
        .subtract(dayPrevMonth, 'day');
      this.setState({
        dateContextNew,
      }, () => {
        this.generateTotalSlots();
      });
    };

    detectDayType = (dateContextNew, dateContext, today, idx) => {
      const empty = (
        moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isBefore(today)
      );
      const todayDay = (
        moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(today)
      );
      const daysDisplayMoth = (
        moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSame(moment(dateContext).format('YYYY MM DD'), 'month') && moment(moment(dateContextNew).add(idx, 'd').format('YYYY MM DD')).isSameOrAfter(today)
      );
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

    detectEvent = date => (
      EVENTS.filter(element => moment.unix(element.date).format('LL') === date)
    );

    generateTotalSlots = () => {
      const {
        dateContextNew,
        lengthArrayCalendar,
        today,
        dateContext,
      } = this.state;
      const totalSlots = Array.from(
        Array(lengthArrayCalendar).fill().map((_, idx) => ({
          moment: moment(dateContextNew)
            .add(idx, 'd')
            .format('LL'),
          dayNam: moment(dateContextNew)
            .add(idx, 'd')
            .format('D'),
          dayType: this.detectDayType(dateContextNew, dateContext, today, idx),
          event: this.detectEvent(moment(dateContextNew).add(idx, 'd').format('LL'))
        })),
      );
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

    renderMonthNav = () => {
      const { month } = this.state;
      return (
        <span className="label_month">
          {month}
        </span>
      );
    };

    renderYearNav = () => {
      const { year } = this.state;
      return (
        <span className="label_year">
          {year}
        </span>
      );
    };

    navigationMonth = (operator) => {
      let dateContext = Object.assign({}, this.state.dateContext);
      switch (operator) {
        case 'next':
          dateContext = moment(dateContext).add(1, 'month');
          break;
        case 'prev':
          dateContext = moment(dateContext).subtract(1, 'month');
          break;
        default:
          dateContext = moment();
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
      this.setState(
        clickedWeek === week && clickedDay === day
          ? prevState => ({
            clickedWeek: null,
            clickedDay: null,
            isToggleOn: !prevState.isToggleOn,
          })
          : {
            clickedWeek: week,
            clickedDay: day,
          },
      );
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
      const classNameNav = (
        currentMonth === month && currentYear === year
          ? 'page__left hidden__navigation'
          : 'page__left'
      );
      const classNameNavButton = (
        currentMonth === month && currentYear === year
          ? 'hidden__button__back'
          : 'button__back'
      );

      const event = EVENTS.filter(element => moment.unix(element.date).format('LL') === clickedDay)
      return (
        <CalendarWrapper className="calendar">
          <div className="calendar_container">
            <CalendarNavigation className="calendar_navigation">
              <ButtonNavigation
                type="button"
                className={classNameNav}
                onClick={() => {
                  this.navigationMonth('prev');
                }}
              >
                <NavigationMonth className="month__prev"/>
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
                  {`Назад к ${currentMonth}`}
                </button>
              </div>
              <ButtonNavigation
                type="button"
                className="page__right"
                onClick={() => {
                  this.navigationMonth('next');
                }}
              >
                <NavigationMonth className="month__next" />
              </ButtonNavigation>
            </CalendarNavigation>
            <WeekDays className="weekdays">
              {
                WEEK_DAY_SHORT.map(
                  day => (<div key={day} className="week-day">{day}</div>),
                )
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
                            clickedDay={clickedDay} />
                        ))
                      }
                    </Week>
                    {
                        weekIndex === clickedWeek
                          ? (
                            <CalendarBooking className="block calendar_booking">
                              <CalendarOrderList className="calendar_order_list">
                                <DateTitle>
                                  <Icon name="date" />
                                  {clickedDay}
                                </DateTitle>
                                {
                                    event.length ? (
                                      event.map(item => (
                                        <Event>
                                          <Title level={3}>
                                            {item.title}
                                          </Title>
                                          <p>
                                            {item.desc}
                                          </p>
                                          <ul className="event__infolist">
                                            <li>
                                              <Icon name="time" />
                                              <span>
                                                {item.startTime}
                                              </span>
                                            </li>
                                            <li>
                                              {
                                                item.duration ? (
                                                  <>
                                                    <Icon name="duration" />
                                                    <span>
                                                      {item.duration}
                                                    </span>
                                                  </>
                                                ) : null
                                              }
                                            </li>
                                          </ul>
                                          <Desc>
                                            {item.features}
                                          </Desc>
                                        </Event>
                                      ))
                                    ) : (
                                      <Title primary level={3}>
                                        На выбранную дату событий не найдено.
                                      </Title>
                                    )
                                  }
                              </CalendarOrderList>
                            </CalendarBooking>
                          )
                          : null
                    }
                  </div>
                ))
            }
          </div>
        </CalendarWrapper>
      );
    }
}

export default withTheme(Calendar);
