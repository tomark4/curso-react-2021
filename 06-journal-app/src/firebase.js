import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOToHhEcb9JP03UHF2FJnL3Msall5sHuk",
  authDomain: "udemy-react-curso-2021.firebaseapp.com",
  projectId: "udemy-react-curso-2021",
  storageBucket: "udemy-react-curso-2021.appspot.com",
  messagingSenderId: "347942088552",
  appId: "1:347942088552:web:c22b148b69564c03bb70dd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
