import React from 'react';
import styled, { withTheme } from 'styled-components';


const CurrentDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgAvailable)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
  };
}`;

const EmptyDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
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
}`;

const CheckDay = styled.div`
  background-color: red;
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  color: ${data => (data.theme.Calendar.textColorAvailable)};
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
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
}`;


const Day = (props) => {
  let displayDay;
  displayDay = (props.clickedDay === props.day.moment) ? (
    <CheckDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className="checked">
      <span className="calendar_data_day">{props.day.dayNam}</span>
    </CheckDay>
  ) : '';
  switch (props.day.dayType) {
    case 'emptyDay': displayDay = (
      <EmptyDay className="empty_slot">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </EmptyDay>
    );
      break;
    case 'todayDay': displayDay = (
      <TodayInMonth onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className="current-today">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </TodayInMonth>
    );
      break;
    case 'daysDisplayMoth': displayDay = (
      <CurrentDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className="current_month_day">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </CurrentDay>
    );
      break;
    case 'otherDays': displayDay = (
      <OtherDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className="otherDay">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </OtherDay>
    );
      break;
    default: displayDay = (props.clickedDay === props.day.moment) ? (
      <CheckDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className="checked">
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </CheckDay>
    ) : '';
  }
  return (
    displayDay
  );
};

export default withTheme(Day);
