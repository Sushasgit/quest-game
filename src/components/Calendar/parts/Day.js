import React from 'react';

const Day = (props) => {
  const currentDay = props.day.current ? 'available-day' : '';
  const prevDay = props.day.prev ? 'empty-slot' : '';
  const futureDay = props.day.next ? 'future-day available-day' : '';
  const todayInMonth = props.day.today ? 'current-today available-day' : '';
  const clickDisable = props.day.click ?
      <div onClick={(e) => {props.onDayClick(e, props.day.dayNam, props.week);}} className={`${currentDay} ${prevDay} ${futureDay} ${todayInMonth}`}>
        {props.day.dayNam}
      </div> :  <div className={`${currentDay} ${prevDay} ${futureDay} ${todayInMonth}`}>
        {props.day.dayNam}
      </div>
  return (
      clickDisable
  );
};
export default Day;
