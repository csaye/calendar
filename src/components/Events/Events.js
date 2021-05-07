import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/app';

import './Events.css';

const now = new Date();

function Events() {
  const uid = firebase.auth().currentUser.uid;
  const eventsRef = firebase.firestore().collection(uid);
  const eventsQuery = eventsRef.where('date', '>', now).orderBy('date');
  const [events] = useCollectionData(eventsQuery, { idField: 'id' });

  return (
    <div className="Events">
      <h1>Upcoming Events</h1>
      {
        events ?
        <>
        {
          events.length > 0 ?
          events.map((e, i) =>
            <p key={`note-${i}`}>
              {
                e.note && <>{e.date.toDate().toLocaleDateString()} — {e.note}</>
              }
            </p>
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
