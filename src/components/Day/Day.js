import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';

import './Day.css';

function Day(props) {
  const [note, setNote] = useState('');
  const [placeholder, setPlaceholder] = useState('...');

  const date = props.date;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const uid = firebase.auth().currentUser.uid;
  const id = `${year}-${month}-${day}`;
  const docRef = firebase.firestore().collection(uid).doc(id);

  const monthName = date.toLocaleString('default', { month: 'long' });

  function isToday() {
    const now = new Date();
    return now.getFullYear() === year
      && now.getMonth() === month
      && now.getDate() === day;
  }

  // update note in firebase
  async function updateNote(newNote) {
    setNote(newNote);
    await docRef.set({
      note: newNote
    });
  }

  // gets note from firebase
  async function getNote() {
    // get document
    await docRef.get().then(doc => {
      if (doc.exists) {
        const docData = doc.data();
        setNote(docData.note);
      }
    });
    // clear placeholder
    setPlaceholder('');
  }

  useEffect(() => {
    getNote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`Day calendar-box ${isToday() && 'today'}`}>
      <p>{monthName} {day}</p>
      <input
        placeholder={placeholder}
        value={note}
        onChange={e => updateNote(e.target.value)}
      />
    </div>
  );
}

export default Day;
