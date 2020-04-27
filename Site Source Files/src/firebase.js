// firebase.js
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDVXLcTebn30bE6i_JLjEBod7Cfj9l-fG8",
  authDomain: "airoo-55884.firebaseapp.com",
  databaseURL: "https://airoo-55884.firebaseio.com",
  projectId: "airoo-55884",
  storageBucket: "airoo-55884.appspot.com",
  messagingSenderId: "831294857157",
  appId: "1:831294857157:web:95651e466a676aa75875ac",
  measurementId: "G-5XDSY6NVP2"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;