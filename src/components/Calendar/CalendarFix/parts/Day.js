import React from 'react';

const Day = (props) => {
  const currentDay = props.day.current ? 'available-day' : '';
  const prevDay = props.day.prev ? 'empty-slot' : '';
  const futureDay = props.day.next ? 'future-day available-day' : '';
  return (
     <div onClick={(e) => {props.onDayClick(e, props.day.dayNam, props.week)}} className={`${currentDay} ${prevDay} ${futureDay}`}>
        {props.day.dayNam} 
     </div>
    );
};

export default Day;
