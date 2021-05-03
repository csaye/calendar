import Day from '../Day/Day.js';

import './Calendar.css';

function Calendar() {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  // returns number of days in the current month
  function daysInMonth() {
    const year = now.getFullYear();
    const nextMonth = now.getMonth() + 1;
    const endOfMonth = new Date(year, nextMonth, 0);
    return endOfMonth.getDate();
  }

  // returns the offset of the current month
  function monthOffset() {
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    return firstOfMonth.getDay();
  }

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const fillers = [];
  const days = [];
  for (let filler = 0; filler < monthOffset(); filler++) fillers.push(filler);
  for (let day = 0; day < daysInMonth(); day++) days.push(day + 1);

  return (
    <div className="Calendar">
      <div className="month">
        {
          dayNames.map(n =>
              <div key={`dayname-${n}`} className="title-box calendar-box">{n}</div>
          )
        }
        {
          fillers.map(f =>
            <span key={`filler-${f}`} className="calendar-box" />
          )
        }
        {
          days.map(day =>
            <Day key={`day-${day}`} date={new Date(year, month, day)} />
          )
        }
      </div>
    </div>
  )
}

export default Calendar;
