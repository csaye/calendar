function Calendar() {
  // returns number of days in the current month
  function daysInThisMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const nextMonth = now.getMonth() + 1;
    const endOfMonth = new Date(year, nextMonth, 0);
    return endOfMonth.getDate();
  }

  let days = [];
  for (let day = 1; day <= daysInThisMonth(); day++) {
    days.push(day);
  }
  const month = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="Calendar">
      <table>
        <tbody>
          {
            days.map(d =>
              <tr key={`day${d}`}>
                <th>{month} {d}</th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;
