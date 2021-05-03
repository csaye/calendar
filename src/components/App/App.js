import Calendar from '../Calendar/Calendar.js';
import SignIn from '../SignIn/SignIn.js';

import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from '../../util/firebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

import './App.css';

// initialize firebase
firebase.initializeApp(firebaseConfig);

function App() {
  useAuthState(firebase.auth());

  return (
    <div className="App">
      {
        firebase.auth().currentUser ?
        <Calendar /> :
        <SignIn />
      }
    </div>
  );
}

export default App;
