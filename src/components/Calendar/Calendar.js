import React, { Component } from "react";
import './calendar.scss';

class Calendar extends Component {

    monthsFullNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    monthsShortNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    daysFullNames = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    daysShortNames = [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    ];

    getFullMonthNameByNumber() {
        return this.monthsFullNames[this.props.month - 1];
    }

    daysInMonth() {
        return new Date(this.props.year, this.props.month, 0).getDate();
    }

    weeksInMonth() {
        const month = this.props.month;
        const year = this.props.year;
        const daysInMonth = this.daysInMonth(month, year);
        const monthFirstDay = new Date(year, month - 1, 1); //first day of month
        const monthLastDay = new Date(year, month - 1, daysInMonth);//last day of month
        let mondayFirstDayNumber = monthFirstDay.getDay() === 0 ? 7 : monthFirstDay.getDay(); //first day in a range 1..7 (7 => Sunday)
        let mondayLastDayNumber = monthLastDay.getDay() === 0 ? 7 : monthLastDay.getDay(); //first day in a range 1..7 (7 => Sunday)
        let numOfWeeks = Math.ceil(daysInMonth / 7);
        if (mondayLastDayNumber < mondayFirstDayNumber) {
            numOfWeeks++;
        }
        return numOfWeeks;
    }

    getMonthFirstDay() {
        const monthFirstDay = new Date(this.props.year, this.props.month - 1, 1); //first day of month
        return monthFirstDay.getDay() === 0 ? 7 : monthFirstDay.getDay();
    }

    getCalendarHeader() {
        return this.daysShortNames.map((dayName, i) => {
            return <th key={i}>{dayName}</th>;
        });
    }

    getSingleDay(week, day) {

        if (week === 1) {
            if (day < this.getMonthFirstDay()) {
                return <td key={day} className="mask"></td>;
            }
        }

        const cell = (week - 1) * 7 + day; // current cell in a table body 
        const dayOfMonth = cell - this.getMonthFirstDay() + 1; //current day of month

        if (week === this.weeksInMonth()) {
            if (dayOfMonth > this.daysInMonth()) {
                return <td key={day} className="mask"></td>;
            }
        }

        const cellIntDate = new Date(this.props.year, this.props.month - 1, dayOfMonth);
        let currentIntDate = new Date();
        currentIntDate.setHours(0, 0, 0, 0);

        let liClass = '';

        if (cellIntDate < currentIntDate) {
            liClass = 'past';
        } else if (cellIntDate.valueOf() === currentIntDate.valueOf()) {
            liClass = 'today';
        } else if (cellIntDate > currentIntDate) {
            liClass = 'future';
        }

        return <td key={day} onClick={(e) => this.getClickedDay(cellIntDate)} className={liClass}>{dayOfMonth}</td>;
    }

    getClickedDay(date) {
        this.props.onDayClick(date);
        this.setState({
            id: date,
        }, () => {
            console.log('getClickedDay', date)
        })
    }

    getCalendarDays() {
        let rows = [];
        for (let week = 1; week <= this.weeksInMonth(); week++) {
            let weekDays = [];
            for (let day = 1; day <= 7; day++) {
                weekDays.push(this.getSingleDay(week, day));
            }
            rows.push(
                <tr key={week}>
                    {weekDays}
                </tr>
            );
        }
        return rows;
    }

    render() {
        return (
            <div className="main-calendar">
                <table className="calendar-wrap-table">
                    <caption>{this.getFullMonthNameByNumber()}</caption>
                    <thead>
                        <tr>
                            {this.getCalendarHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCalendarDays()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;

