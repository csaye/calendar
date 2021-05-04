import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/app';

import './Events.css';

function Events() {
  const uid = firebase.auth().currentUser.uid;
  const eventsRef = firebase.firestore().collection(uid);
  const eventsQuery = eventsRef.where('note', '!=', '');
  const [events] = useCollectionData(eventsQuery, { idField: 'id' });

  return (
    <div className="Events">
      <h1>Upcoming Events</h1>
      {
        events ?
        <>
          {
            events.length > 0 ?
            events.map(e =>
              <p>{e.id} {e.note}</p>
            ) :
            <p>No events yet</p>
          }
        </> :
        <p>Loading events...</p>
      }
    </div>
  );
}

export default Events;
