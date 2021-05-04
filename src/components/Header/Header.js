import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import './Header.css';

function Header(props) {
  const year = props.year;
  const month = props.month;
  const backMonth = props.backMonth;
  const forwardMonth = props.forwardMonth;

  const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });

  return (
    <div className="Header">
      <button className="arrow-button" onClick={backMonth}>
        <ArrowBackIosOutlinedIcon />
      </button>
      <h1>{monthName} {year}</h1>
      <button className="arrow-button" onClick={forwardMonth}>
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  );
}

export default Header;
