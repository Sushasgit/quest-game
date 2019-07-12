import React, { Component } from "react";
import './Calendar.css';
import moment from 'moment';

export default class Calendar extends Component{
    state = {
        dateContext: moment().weekday(0),
        today:moment(),
        showMonthPopup: false,
        showYearPopup: false,

    }

    constructor(props){
        super(props);
        this.width = props.width || '350px';
        this.style = props.style || {};
    }

    weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    months = moment.months();

    year = () =>{
        return this.state.dateContext.format('Y');
    };

    month = () =>{
        return this.state.dateContext.format('  MMMM')
    };

    prMonth = () =>{
       let prMonth = moment(this.month()).subtract(1, "month")
        return prMonth
    };

    daysInMonth = () =>{
        return this.state.dateContext.daysInMonth();
    };


    currentDate = () =>{
        return this.state.dateContext.get('date');
    };

    currentDay = () =>{
        return this.state.dateContext.format('D');
    };

    firstDayOfMonth = () =>{
        let dateContext = this.state.dateContext;
        let firstDayStart = moment(dateContext).startOf('month').format('d'); //dayOf week
        let firstDay
        firstDayStart == 0 ? firstDay = firstDayStart + 6  : firstDay = firstDayStart-1
        return firstDay;
    };

    setMonth = (month) =>{
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({},this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        })
    };

    firstDayInNextMonth = ()=>{
        let dateContext = Object.assign({},this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month")
        let firstDayStart = moment(dateContext).startOf('month').format('d'); //dayOf week
        let firstDayNextMonth
        firstDayStart == 0 ? firstDayNextMonth = firstDayStart + 6  : firstDayNextMonth = firstDayStart-1
        return firstDayNextMonth;
    }

    prevMonthQuantityDay = () =>{
        let dateContext = Object.assign({},this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month")
        return  dateContext.daysInMonth()
    };

    nextMonth = () =>{
        let dateContext = Object.assign({},this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month")
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    };

    prevMonth = () =>{
        let dateContext = Object.assign({},this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month")
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    };

    onSelectchange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange()
    }

    Selectlist = (props) =>{
        let popup = props.data.map((data) =>{
            return(
                <div key={data}>
                    <a href="#" className="link-months-list" onClick={(e) => {this.onSelectchange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });
        return(
            <div className="month-popup">
                {popup}
            </div>
        )
    };

    onChangeMonth=(e, month) =>{
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    };

    MonthNav = () => {
        return(
            <span className="label-month"
            //onClick={(e)=>{this.onChangeMonth(e, this.month())}}
                >
                {this.month()}
                {this.state.showMonthPopup &&
                <this.Selectlist data={this.months}/>
                }
            </span>
        );
    };

    showYearEditor = () => {
        this.setState({
            showYearNav: false
        });
    };

    setYear = (year) =>{
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set('year', year);
        this.setState({
            dateContext: dateContext
        })
    };

    onYearChange =(e)=>{
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    };

    onKeyUpYear = (e) =>{
        if(e.which === 13 || e.which === 27){
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () =>{
        return(
            this.state.showYearNav ?
                <input
                defaultValue={this.year()}
                className='editor-year'
                ref = {(yearInput) => {this.yearInput = yearInput}}
                onKeyUp={(e)=> this.onKeyUpYear(e)}
                onChange={(e)=> this.onYearChange(e)}
                type='number'
                placeholder='year'/>
                :
            <span
                className='label-year'
                //onDoubleClick ={(e)=> {this.showYearEditor()}}
                >
                {this.year()}
            </span>
        )
    };

    onDayClick = (e, day ) =>{
        this.props.onDayClick && this.props.onDayClick(e,day);
    }

    onDayClick = (e,day, week) =>{
        console.log(this.prevMonthQuantityDay())
        console.log(day)
        console.log(this.month())
        console.log(this.year())
        console.log(this.firstDayOfMonth())
        console.log('первый день'+ this.firstDayInNextMonth())
        console.log('WEEEEk', moment().weekday(day))
        this.setState({
            clickedWeek: week,
            clickedDay: day,
        })
    }

    render() {
        //map weekdays
        let weekdays = this.weekdaysShort.map((day) => {

            return (
                <div key={day} className='week-day'>{day}</div>
            )
        });

        let daysInPrevMonth = [];
        for(let i = this.prevMonthQuantityDay()-(this.firstDayOfMonth()-1); i <= this.prevMonthQuantityDay(); i++){
            daysInPrevMonth.push(<td key = {i*80} className='empty-slot'>
                {i}
            </td>
            );
        }

        let daysInNextMonth = [];
        for(let i = 1; i < 7 - (this.firstDayInNextMonth()-1); i++){
            daysInNextMonth.push(<div key = {i*80} className='empty-slot'>
                    {i}
                </div>
            );
        }

        console.log("prev",daysInPrevMonth, 'next', daysInNextMonth);


        let daysInMonth = [];
        for (let d = 1; d <=this.daysInMonth(); d++){
            let className = (d === this.currentDay()? 'day current-day' : 'day');
            console.log('kmnknmknknk', this.daysInMonth())
            const weekNum = Math.ceil(d/7) 
            console.log('weekNum',weekNum)
            daysInMonth.push(
              <div key={d} className={className}>
                  <span className="date-number" onClick={(e) => {this.onDayClick(e,d, weekNum)}}>{d}</span>
              </div>
            );
        }

        console.log('days:', daysInMonth);

        var totalSlots = [...daysInPrevMonth, ...daysInMonth, ...daysInNextMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) =>{
            if((i%7)!= 0 || i === 0){
                cells.push(row);
                console.log('cellscells', totalSlots)
            }else {
                let insertRow = cells.slice();
                console.log('insertRow', insertRow)
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if(i===totalSlots.length - 1){
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

console.log(rows)
        let trElems = rows.map((d,i) =>{
            return (
                <div className="test">
                    <div key={i*100} className='week'>
                        {d}
                    </div>
                    {
                        this.state.clickedWeek === i+1 ? (
                            <div style={{color: 'deeppink', minHeight: "150px", border: '1px solid black'}}>
                                Book {this.state.clickedDay}
                            </div>
                        ): null
                    }
                </div>
            )
        });


        return(
            <div className="calendar-container">
                <div className='calendar'>
                    <div>
                        <div className='calendar-header'>
                            <div colSpan="5">
                                <this.MonthNav />
                                {" "}
                                <this.YearNav />
                                <div colSpan="5" className="nav-month">
                                    <i className="prev fa fa-fw fa chevron left"
                                       onClick={(e) =>{this.prevMonth()}}>
                                    </i>
                                    <i className="prev fa fa-fw fa chevron right"
                                       onClick={(e) =>{this.nextMonth()}}>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {weekdays}
                        
                        {trElems}
                    </div>
                </div>
            </div>
        );
    }
}
