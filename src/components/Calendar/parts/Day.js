import React from 'react';
import styled, { withTheme } from 'styled-components';
const CurrentDay = styled.div`
  background-color: ${data => (data.theme.calendar.bgAvailable)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.calendar.borderColor)};
  color: ${data => (data.theme.calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  };
   &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.calendar.hoverColor)};;
      background-color: ${data => (data.theme.calendar.hoverColor)};;
      color: ${data => (data.theme.calendar.bgEmpty)};;
    }
   };
   &.checked{
    background-color: ${data => (data.theme.calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
        background-color: ${data => (data.theme.calendar.textColorAvailable)};
        border: solid 1px ${data => (data.theme.calendar.textColorAvailable)};
        color: ${data => (data.theme.calendar.bgEmpty)};
        }
  };
  &.checked:hover {
    .calendar_data_day {
      border: ${data => (data.theme.calendar.textColorAvailable)};
      background-color: ${data => (data.theme.calendar.textColorAvailable)};
    } 
  };
}`;

const EmptyDay = styled.div`
  background-color: ${data => (data.theme.calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.calendar.borderColor)};
  cursor: no-drop;
  color: ${data => (data.theme.calendar.textColorEmpty)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  };
}`;

const TodayInMonth = styled.div`
  background-color: ${data => (data.theme.calendar.bgAvailable)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.calendar.borderColor)};
  color: ${data => (data.theme.calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  };
  &.checked.current-today:before{
    border: solid 1px ${data => (data.theme.calendar.textColorAvailable)};
   }
  &:before{
    border: solid 1px ${data => (data.theme.calendar.hoverColor)};
  };
  &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.calendar.hoverColor)};
      background-color: ${data => (data.theme.calendar.hoverColor)};
      color: ${data => (data.theme.calendar.bgEmpty)};
    }
  };
  &.checked{
    background-color: ${data => (data.theme.calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
        background-color: ${data => (data.theme.calendar.textColorAvailable)};
        border: solid 1px ${data => (data.theme.calendar.textColorAvailable)};
        color: ${data => (data.theme.calendar.bgEmpty)};
        }
  }
  &.checked:hover {
   .calendar_data_day {
    border: ${data => (data.theme.calendar.textColorAvailable)};
    background-color: ${data => (data.theme.calendar.textColorAvailable)};
   }
  };
}`;

const OtherDay = styled.div`
  background-color: ${data => (data.theme.calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.calendar.borderColor)};
  color: ${data => (data.theme.calendar.textColorEmpty)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.calendar.borderColor)};
  };
  &:hover {
    .calendar_data_day {
      border: solid 1px ${data => (data.theme.calendar.hoverColor)};;
      background-color: ${data => (data.theme.calendar.hoverColor)};;
      color: ${data => (data.theme.calendar.bgEmpty)};;
    }
  };
  &.checked{
    background-color: ${data => (data.theme.calendar.bgWeekDays)};
    border-bottom: none;
        & .calendar_data_day{
            background-color: ${data => (data.theme.calendar.textColorAvailable)};
            border: solid 1px ${data => (data.theme.calendar.textColorAvailable)};
            color: ${data => (data.theme.calendar.bgEmpty)};
        }
  };
  &.checked:hover {
  .calendar_data_day {
    border: ${data => (data.theme.calendar.textColorAvailable)};
    background-color: ${data => (data.theme.calendar.textColorAvailable)};
  };
}`;

const EventOn = styled.span`
  position: absolute;
  width: 2vw;
  height: 2vw;
  right:7%;
  bottom:7%;
  z-index: 300;
  };
}`;

const Day = (props) => {
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
        <EventOn className="star" style={{display: props.day.event[0] ? 'block' : 'none'}}></EventOn>
      </TodayInMonth>
    );
      break;
    case 'daysDisplayMoth': displayDay = (
      <CurrentDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${'current_month_day'} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
        <EventOn className="star" style={{display: props.day.event[0] ? 'block' : 'none'}}></EventOn>
      </CurrentDay>
    );
      break;
    default: displayDay = (
      <OtherDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${'otherDay'} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
        <EventOn className="star" style={{display: props.day.event[0] ? 'block' : 'none'}}></EventOn>
      </OtherDay>
    );
  }
  return (
    displayDay
  );
};

export default withTheme(Day);
