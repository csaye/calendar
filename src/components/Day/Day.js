import './Day.css';

function Day(props) {
  const date = props.date;

  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  function isToday() {
    const now = new Date();
    return now.getFullYear() === date.getFullYear()
      && now.getMonth() === date.getMonth()
      && now.getDate() === date.getDate();
  }

  return (
    <div className={`Day calendar-box ${isToday() && 'today'}`}>
      {month} {day}
    </div>
  );
}

export default Day;
