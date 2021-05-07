import firebase from 'firebase/app';

import logo from '../../img/logo.png';

import './SignIn.css';

function SignIn() {

  // opens google sign in popup
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div className="SignIn background">
      <div className="center-box">
        <h1>Calendar</h1>
        <p>Event scheduling in a simple interface.</p>
        <img src={logo} alt="logo" />
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default SignIn;
