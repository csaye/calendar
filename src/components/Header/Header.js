import firebase from 'firebase/app';

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Header.css';

function Header(props) {
  const year = props.year;
  const month = props.month;
  const backMonth = props.backMonth;
  const forwardMonth = props.forwardMonth;

  const monthName = new Date(year, month, 1).toLocaleString('default', { month: 'long' });

  return (
    <div className="Header">
      <button className="icon-button" onClick={backMonth}>
        <ArrowBackIosOutlinedIcon />
      </button>
      <h1>{monthName} {year}</h1>
      <button className="icon-button" onClick={forwardMonth}>
        <ArrowForwardIosOutlinedIcon />
      </button>
      <span className="flex-fill" />
      <button className="icon-button" onClick={() => firebase.auth().signOut()}>
        <ExitToAppIcon />
      </button>
    </div>
  );
}

export default Header;
