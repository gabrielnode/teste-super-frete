import * as firebase from 'firebase-admin';

export function initializeFirebase(): void {
  const serviceAccount = JSON.parse(process.env.FIREBASE);
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://super-frete-ef99d-default-rtdb.firebaseio.com',
  });
}
