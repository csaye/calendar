import React, { useState } from 'react';

import Day from '../Day/Day.js';
import Header from '../Header/Header.js';

import './Calendar.css';

function Calendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  // moves calendar back one month
  function backMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  // moves calendar forward one month
  function forwardMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  // returns number of days in the current month
  function daysInMonth() {
    const nextMonth = month + 1;
    const endOfMonth = new Date(year, nextMonth, 0);
    return endOfMonth.getDate();
  }

  // returns the offset of the current month
  function monthOffset() {
    const firstOfMonth = new Date(year, month, 1);
    return firstOfMonth.getDay();
  }

  // initialize calendar boxes
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const fillers = [];
  const days = [];
  for (let filler = 0; filler < monthOffset(); filler++) fillers.push(filler);
  for (let day = 0; day < daysInMonth(); day++) days.push(day + 1);

  return (
    <div className="Calendar">
      <Header year={year} month={month} backMonth={backMonth} forwardMonth={forwardMonth} />
      <div className="month">
        {
          // day names
          dayNames.map(n =>
              <div key={`dayname-${n}`} className="title-box calendar-box">{n}</div>
          )
        }
        {
          // fillers
          fillers.map(f =>
            <span key={`filler-${f}`} className="calendar-box" />
          )
        }
        {
          // days
          days && days.map(day =>
            <Day key={`day-${day}`} date={new Date(year, month, day)} />
          )
        }
      </div>
    </div>
  )
}

export default Calendar;
