import React from 'react';
import styled, { withTheme } from 'styled-components';
import axios from 'axios';

const CurrentDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgAvailable)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  };
   &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.Calendar.hoverColor)};;
      background-color: ${data => (data.theme.Calendar.hoverColor)};;
      color: ${data => (data.theme.Calendar.bgEmpty)};;
    }
   };
   &.checked{
    background-color: ${data => (data.theme.Calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
        background-color: ${data => (data.theme.Calendar.textColorAvailable)};
        border: solid 1px ${data => (data.theme.Calendar.textColorAvailable)};
        color: ${data => (data.theme.Calendar.bgEmpty)};
        }
  };
  &.checked:hover {
    .calendar_data_day {
      border: ${data => (data.theme.Calendar.textColorAvailable)};
      background-color: ${data => (data.theme.Calendar.textColorAvailable)};
    } 
  };
}`;

const EmptyDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  cursor: no-drop;
  color: ${data => (data.theme.Calendar.textColorEmpty)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  };
}`;

const TodayInMonth = styled.div`
  background-color: ${data => (data.theme.Calendar.bgAvailable)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  };
  &.checked.current-today:before{
    border: solid 1px ${data => (data.theme.Calendar.textColorAvailable)};
   }
  &:before{
    border: solid 1px ${data => (data.theme.Calendar.hoverColor)};
  };
  &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.Calendar.hoverColor)};
      background-color: ${data => (data.theme.Calendar.hoverColor)};
      color: ${data => (data.theme.Calendar.bgEmpty)};
    }
  };
  &.checked{
    background-color: ${data => (data.theme.Calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
        background-color: ${data => (data.theme.Calendar.textColorAvailable)};
        border: solid 1px ${data => (data.theme.Calendar.textColorAvailable)};
        color: ${data => (data.theme.Calendar.bgEmpty)};
        }
  }
  &.checked:hover {
   .calendar_data_day {
    border: ${data => (data.theme.Calendar.textColorAvailable)};
    background-color: ${data => (data.theme.Calendar.textColorAvailable)};
   }
  };
}`;

const OtherDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorEmpty)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  };
  &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.Calendar.hoverColor)};;
      background-color: ${data => (data.theme.Calendar.hoverColor)};;
      color: ${data => (data.theme.Calendar.bgEmpty)};;
    }
  };
  &.checked{
    background-color: ${data => (data.theme.Calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
            background-color: ${data => (data.theme.Calendar.textColorAvailable)};
            border: solid 1px ${data => (data.theme.Calendar.textColorAvailable)};
            color: ${data => (data.theme.Calendar.bgEmpty)};
        }
  };
  &.checked:hover {
  .calendar_data_day {
    border: ${data => (data.theme.Calendar.textColorAvailable)};
    background-color: ${data => (data.theme.Calendar.textColorAvailable)};
  };
}`;

const data = {
  req: 'get-all',
};

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const Day = (props) => {
  axios.post('https://iamwerby.com/api/events/',
    'req=get-all', config).then((res) => {
    // console.log('res', JSON.stringify(requestBody));
    console.log('resdata', (res.data));
  });

  let displayDay;
  const active = props.clickedDay === props.day.moment ? 'checked' : '';
  switch (props.day.dayType) {
    case 'emptyDay': displayDay = (
      <EmptyDay className="empty_slot">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </EmptyDay>
    );
      break;
    case 'todayDay': displayDay = (
      <TodayInMonth onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${'current-today'} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </TodayInMonth>
    );
      break;
    case 'daysDisplayMoth': displayDay = (
      <CurrentDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${'current_month_day'} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </CurrentDay>
    );
      break;
    default: displayDay = (
      <OtherDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${'otherDay'} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </OtherDay>
    );
  }
  return (
    displayDay
  );
};

export default withTheme(Day);
