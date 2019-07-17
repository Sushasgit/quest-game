import React, { Component } from 'react';
import './Calendar.css';
import moment from 'moment';

export default class Calendar extends Component {
    state = {
      dateContext: moment().weekday(0),
      today: moment(),
      //showMonthPopup: false,
      //showYearPopup: false,
    };
    // constructor(props) {
    //   super(props);
    //   this.width = props.width || '350px';
    //   this.style = props.style || {};
    // };

    weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    //months = moment.months();

    year = () => this.state.dateContext.format('Y');

    month = () => this.state.dateContext.format('MMMM');

    currentMonth = () => moment().weekday(0).format('MMMM');

    daysInMonth = () => this.state.dateContext.daysInMonth();

    currentYear = () => moment().weekday(0).format('Y');

    //currentDay = () => this.state.dateContext.format('D');

    today = () => moment().format('D');

    firstDayOfMonth = () => {
      const { dateContext } = this.state;
      const firstDayStart = moment(dateContext).startOf('month').format('d'); // dayOf week
      let firstDay;
      firstDayStart == 0 ? firstDay = firstDayStart + 6 : firstDay = firstDayStart - 1;
      return firstDay;
    };

    // setMonth = (month) => {
    //   const monthNo = this.months.indexOf(month);
    //   let dateContext = Object.assign({}, this.state.dateContext);
    //   dateContext = moment(dateContext).set('month', monthNo);
    //   this.setState({
    //     dateContext,
    //   });
    // };

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

    // onSelectchange = (e, data) => {
    //   this.setMonth(data);
    //   this.props.onMonthChange && this.props.onMonthChange();
    // }

    // Selectlist = (props) => {
    //   const popup = props.data.map(data => (
    //     <div key={data}>
    //       <a href="#" className="link-months-list" onClick={(e) => { this.onSelectchange(e, data); }}>
    //         {data}
    //       </a>
    //     </div>
    //   ));
    //   return (
    //     <div className="month-popup">
    //       {popup}
    //     </div>
    //   );
    // };

    // onChangeMonth=(e, month) => {
    //   this.setState({
    //     showMonthPopup: !this.state.showMonthPopup,
    //   });
    // };

    MonthNav = () => (
      <span className="label-month">
        {this.month()}
        {/*{this.state.showMonthPopup*/}
        {/*        && <this.Selectlist data={this.months} />*/}
        {/*        }*/}
      </span>
    );

    // showYearEditor = () => {
    //   this.setState({
    //     showYearNav: false,
    //   });
    // };

    // setYear = (year) => {
    //   let dateContext = Object.assign({}, this.state.dateContext);
    //   dateContext = moment(dateContext).set('year', year);
    //   this.setState({
    //     dateContext,
    //   });
    // };
    //
    // onYearChange =(e) => {
    //   this.setYear(e.target.value);
    //   this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    // };
    //
    // onKeyUpYear = (e) => {
    //   if (e.which === 13 || e.which === 27) {
    //     this.setYear(e.target.value);
    //     this.setState({
    //       showYearNav: false,
    //     });
    //   }
    // };

    YearNav = () => (
      // this.state.showYearNav
      //   ? (
      //     <input
      //       defaultValue={this.year()}
      //       // className="editor-year"
      //       // ref={(yearInput) => { this.yearInput = yearInput; }}
      //       // onKeyUp={e => this.onKeyUpYear(e)}
      //       // onChange={e => this.onYearChange(e)}
      //       // type="number"
      //       // placeholder="year"
      //     />
      //   )
      //   : (
          <span
            className="label-year"
          >
            {this.year()}
          </span>
        // ));
    )
    onDayClick = (e, day) => {
      this.props.onDayClick && this.props.onDayClick(e, day);
    }

    onDayClick = (e, day, week) => {
      // console.log(this.prevMonthQuantityDay());
      // console.log(day);
      // console.log('tterrevvb', this.today());
      // console.log(this.year());
      // console.log(this.firstDayOfMonth());
      // console.log(`первый день${this.firstDayInNextMonth()}`);
      // console.log('WEEEEk', moment().weekday(day));
      this.setState({
        clickedWeek: week,
        clickedDay: day,
        clickedMonth: this.month(),
        clickedYear: this.year()
      });
    };

    render() {
        const classNameNavButton = (this.currentMonth() === this.month() && this.currentYear() === this.year()? 'hidden-button-back' : 'button-back');
        const navigationButtonBack = (<button className={classNameNavButton} onClick={(e) => this.state}>Back to {this.currentMonth()} </button>)

        const classNameNav = (this.currentMonth() === this.month()? 'page-left hidden-navigation' : 'page-left')
        const navigationLeft = (<span className={classNameNav} onClick={(e) => { this.prevMonth(); }}>
                        <i className="month-prev"/>
                    </span>);
        const navigationright = (<span className="page-right" onClick={(e) => { this.nextMonth(); }}>
                        <i className="month-next" />
                    </span>)
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
      for (let i = 1; i < 7 - (this.firstDayInNextMonth()-1); i++) {
          const weekNum = Math.ceil((i + this.daysInMonth()) / 7);
          //console.log('weekNum1111', weekNum, this.daysInMonth());
        daysInNextMonth.push(<div key={i * 80} className="future-day available-day" onClick={(e) => { this.onDayClick(e, i, weekNum); }}>
            <span className="date-number">{i}</span>
        </div>);
      }

      //console.log('prev', daysInPrevMonth, 'next', daysInNextMonth);

      const daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
      const classNamePastDay = (d < +this.today() && this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'empty-slot ' : 'available-day');
      const classNameCurrentFutureDay = (d === +this.today() && this.currentMonth() === this.month() && this.currentYear() === this.year() ? 'current-day' : '');

        const weekNum = Math.ceil(d / 7);
        //console.log('weekNum', weekNum);
        daysInMonth.push(
            <div key={d} className={classNamePastDay + ' ' + classNameCurrentFutureDay} onClick={(e) => { this.onDayClick(e, d, weekNum); }}>
            <span className="date-number" >{d}</span>
          </div>,
        );
      }

      //console.log('days:', daysInMonth);

      const totalSlots = [...daysInPrevMonth, ...daysInMonth, ...daysInNextMonth];
      const rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if ((i % 7) != 0 || i === 0) {
          cells.push(row);
          //console.log('cellscells', totalSlots);
        } else {
          const insertRow = cells.slice();
          //console.log('insertRow', insertRow);
          rows.push(insertRow);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          const insertRow = cells.slice();
          rows.push(insertRow);
        }
      });

      //console.log(rows);
      const trElems = rows.map((d, i) => (
        <div className="test">
          <div key={i * 100} className="week">
            {d}
          </div>
              {
                this.state.clickedWeek === i+1? (
                  <div style={{ color: 'deeppink', minHeight: '150px', border: '1px solid black' }}>
                        Book
                    {' '}
                    {this.state.clickedDay} {' '} {this.state.clickedMonth} {' '} {this.state.clickedYear}
                  </div>
                ) : null
              }
        </div>
      ));


      return (
        <div className="calendar-container">
          <div className="calendar">
              <div className="calendar-header">
                <div className="calendar-title">
                    {navigationLeft}
                <div className="selected-month-year">
                  <this.MonthNav />
                  <this.YearNav />
                    {navigationButtonBack}
                </div>
                    {navigationright}
                </div>
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
