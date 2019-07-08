import moment from 'moment';

const monthsNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

const data = [
  {
    name: 'Кирилл Мельников',
    startDate: '14-04-2019',
    endDate: '30-04-2019',
  },
  {
    name: 'Святослав Подмагаев',
    startDate: '22-04-2019',
    endDate: '30-04-2019',
  },
  {
    name: 'Евгений Голубцов',
    startDate: '15-05-2019',
    endDate: '26-05-2019',
  },
  {
    name: 'Ирина Борисова',
    startDate: '24-05-2019',
    endDate: '31-05-2019',
  },
  {
    name: 'Андрей Копылов',
    startDate: '27-05-2019',
    endDate: '09-06-2019',
  },
  {
    name: 'Валерия Борисова',
    startDate: '03-06-2019',
    endDate: '07-06-2019',
  }
];

const dataParser = (data) => {
  let eventsData = {};
  let currentDataItem = 0;

  data.map(holidaysItem => {
    const startDayMoment = moment(holidaysItem.startDate, "DD MM YYYY");
    const endDayMoment = moment(holidaysItem.endDate, "DD MM YYYY");
    const holidaysItemCount = currentDataItem;
    currentDataItem++;

    const startDayMonth = startDayMoment.month();
    const startDay = startDayMoment.date();
    const startDayYear = startDayMoment.year();
    const startDayMonthLength = startDayMoment.daysInMonth();

    const endDayMonth = endDayMoment.month();
    const endDay = endDayMoment.date();
    const endDayYear = endDayMoment.year();

    const createEventDaysData = (start, end, dayMonth, dayYear, multi, firstHalf = false) => {
      const startDayEvent = `${start}${dayMonth}${dayYear}`;
      const startDayEventLength = eventsData[startDayEvent] ? eventsData[startDayEvent].length : 0;

      let cellIndex = startDayEventLength ? eventsData[startDayEvent][startDayEventLength - 1].cellIndex + 1 : 0;

      // if (multi && !firstHalf) {
      //   const prevMoment = moment(`${start}${dayMonth}${dayYear}`, "D M YYYY");
      //   console.log('prev',prevMoment);
      //
      //   const prevDayEvent = `${start - 1}${dayMonth}${dayYear}`;
      //   const prevDayEventLength = eventsData[prevDayEvent] ? eventsData[prevDayEvent].length : 0;
      //
      //   let cellId = prevDayEventLength ? eventsData[startDayEvent][prevDayEventLength - 1].cellIndex + 1 : 0;
      //   cellIndex = cellId;
      // }

      for (let i = start; i <= end; i++) {
        const dayIndex = `${i}${dayMonth}${dayYear}`;
        const parameter = !multi ? ( (i === startDay) ? 1 : ((i === endDay) ? 3 : 2)) : (firstHalf ? ((i === start) ? 1 : 2) : ((i === end) ? 3 : 2));


        const eventDayData = {
          name: holidaysItem.name,
          parameter: parameter,
          id: `${holidaysItemCount}${i}${startDayMonth}${startDayYear}`,
          cellIndex: cellIndex,
        }

        if (eventsData[dayIndex]) {
          eventsData[dayIndex] = [...eventsData[dayIndex], eventDayData];
        } else {
          eventsData[dayIndex] = [eventDayData];
        }

      }
    }

    if (startDayMonth === endDayMonth) {
       createEventDaysData(startDay, endDay, startDayMonth, startDayYear, false);

    } else {
      createEventDaysData(startDay, startDayMonthLength, startDayMonth, startDayYear, true, true);
      createEventDaysData(0, endDay, endDayMonth, endDayYear, true);
    }

  })

  return eventsData;
}

const events = dataParser(data);
console.log(events);

const createDaysData = (start, end, month, year, className="day") => {
  let days = [];

  for (let i = start; i <= end; i++) {
    const day = (i < 9)? `0${i}` : i;
    const dayEvents = events[`${i}${month}${year}`];

    const dayData = {
      id: `${day}${month}${year}`,
      day: i,
      className: className,
      dayData: dayEvents,
    };

    days.push(dayData);
  }
  return days;
};

export const getMonthName = (number) => {
  const name = monthsNames[number];
  return name;
};

export const getDaysData = (activeMonth) => {
  const { month, year } = activeMonth;
  const activeMonthLength = moment().month(month).daysInMonth();
  const activeMonthStartWeekDay = moment([year, month, 1]).weekday();

  const prevMomentMonth = moment().month(month - 1);
  const prevMonth = prevMomentMonth.month();
  const prevYear = prevMomentMonth.year();
  const prevMonthLength = prevMomentMonth.daysInMonth();
  const prevStart = (prevMonthLength - (activeMonthStartWeekDay ?  activeMonthStartWeekDay - 1 : 6) + 1);

  const nextMomentMonth = moment().month(month + 1);
  const nextMonth = nextMomentMonth.month();
  const nextYear = nextMomentMonth.year();

  const prevLength = (activeMonthStartWeekDay ?  activeMonthStartWeekDay - 1 : 6);
  const nextLength = (42 - (activeMonthLength + prevLength));

  const prevMonthDaysData = createDaysData(prevStart, prevMonthLength, prevMonth, prevYear, "day day--prev");
  const activeMonthDaysData = createDaysData(1, activeMonthLength, month, year);
  const nextMonthDaysData = createDaysData(1, nextLength, nextMonth, nextYear, "day day--next");

  const daysData = [...prevMonthDaysData, ...activeMonthDaysData, ...nextMonthDaysData];

  console.log(activeMonthStartWeekDay)
  return daysData;
}