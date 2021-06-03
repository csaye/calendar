import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';

import './Day.css';

function Day(props) {
  const date = props.date;

  const [note, setNote] = useState('');
  const [placeholder, setPlaceholder] = useState('...');

  const uid = firebase.auth().currentUser.uid;

  // returns id of day
  function getId() {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }

  function isToday() {
    const now = new Date();
    return now.getFullYear() === date.getFullYear()
      && now.getMonth() === date.getMonth()
      && now.getDate() === date.getDate();
  }

  // update note in firebase
  async function updateNote(newNote) {
    setNote(newNote);
    // update firebase with note
    const id = getId();
    await firebase.firestore().collection(uid).doc(id).set({
      note: newNote,
      date
    });
  }

  // gets note from firebase
  async function getNote() {
    // set placeholder
    setPlaceholder('...');
    setNote('');
    // get document
    const id = getId();
    await firebase.firestore().collection(uid).doc(id).get().then(doc => {
      if (doc.exists) {
        const docData = doc.data();
        setNote(docData.note);
      }
    });
    // clear placeholder
    setPlaceholder('');
  }

  useEffect(() => {
    // get note
    getNote();
  }, [date]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`Day calendar-box ${isToday() && 'today'}`}>
      <p>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}</p>
      <textarea
        spellCheck="false"
        placeholder={placeholder}
        value={note}
        onChange={e => updateNote(e.target.value)}
      />
    </div>
  );
}

export default Day;
