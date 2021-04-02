import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDzWkxK_pNqsAQA7u3wSP6-peXFm_rGb7Q",
  authDomain: "crud-udemy-react-aa2a5.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-aa2a5.firebaseio.com",
  projectId: "crud-udemy-react-aa2a5",
  storageBucket: "crud-udemy-react-aa2a5.appspot.com",
  messagingSenderId: "880998042514",
  appId: "1:880998042514:web:d39003dcd5cd46c5708f4b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
