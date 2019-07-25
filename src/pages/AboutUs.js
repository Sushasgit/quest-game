import React from 'react';
import CalendarFix from '../components/Calendar/CalendarFix';

const Development = () => {
    return (
        <div>
            <CalendarFix onDayClick = {(e,day) => this.onDayClick(e,day)}/>
        </div>
    );
};

export default Development;