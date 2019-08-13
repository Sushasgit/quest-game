import React from 'react';
import styled, { withTheme } from 'styled-components';
import moment from "../index";
const AllDay = styled.div`
  background-color: ${data => (data.theme.Calendar.bgEmpty)};
  border-right: 2px solid ${data => (data.theme.Calendar.borderColor)};
  border-bottom: 2px solid ${data => (data.theme.Calendar.borderColor)};
  width: 8vw;
  height: 8vw;
  min-width: 40px;
  min-height: 40px;
  max-width: 105px;
  max-height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
    &:first-child{
    border-left: 2px solid ${data => (data.theme.Calendar.borderColor)};
    };
}
`;


const Day = (props) => {

  const currentDay = props.day.currentMonth ? 'current_month_day' : '';
  const prevDay = props.day.empty ? 'empty_slot' : 'future_day';
  const todayInMonth = props.day.today ? 'current-today' : '';
  const active = props.clickedDay === props.day.moment ? 'checked' : '';
  const clickDisable = props.day.click
    ? (
      <AllDay onClick={(e) => { props.onDayClick(e, props.day.moment, props.week, props.day.month, props.day.click, props.clickedDay); }} className={`${currentDay} ${prevDay} ${todayInMonth} ${active}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </AllDay>
    )
    : (
      <AllDay className={`${prevDay}`}>
        <span className="calendar_data_day">{props.day.dayNam}</span>
      </AllDay>
    );
  return (
    clickDisable
  );
};
export default withTheme(Day);
