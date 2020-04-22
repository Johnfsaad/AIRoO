// firebase.js
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBSzA1fsFpm4vTmUnhgBI3I9poJWTMf5KE",
  authDomain: "airoo-54944.firebaseapp.com",
  databaseURL: "https://airoo-54944.firebaseio.com",
  projectId: "airoo-54944",
  storageBucket: "airoo-54944.appspot.com",
  messagingSenderId: "453252867616"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;