import React from 'react';

const Day = (props) => {
  const currentDay = props.day.currentMonth ? 'current_month_day' : '';
  const prevDay = props.day.empty ? 'empty_slot' : 'future_day';
  const todayInMonth = props.day.today ? 'current-today' : '';
  const clickDisable = props.day.click
    ? (
      <div onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click); }} className={`${currentDay} ${prevDay} ${todayInMonth}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </div>
    )
    : (
      <div className={`${prevDay}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </div>
    );
  return (
    clickDisable
  );
};
export default Day;