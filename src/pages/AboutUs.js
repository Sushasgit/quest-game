import React from 'react';
import Calendar from '../components/Calendar';

const Development = () => {
  return (
    <div>
      <Calendar onDayClick={(e, day) => this.onDayClick(e,day)} />
    </div>
  );
};

export default Development;
