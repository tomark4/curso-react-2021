import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfigTest = {
  apiKey: "AIzaSyDzWkxK_pNqsAQA7u3wSP6-peXFm_rGb7Q",
  authDomain: "crud-udemy-react-aa2a5.firebaseapp.com",
  databaseURL: "https://crud-udemy-react-aa2a5.firebaseio.com",
  projectId: "crud-udemy-react-aa2a5",
  storageBucket: "crud-udemy-react-aa2a5.appspot.com",
  messagingSenderId: "880998042514",
  appId: "1:880998042514:web:d39003dcd5cd46c5708f4b"
};

const firebaseConfigProd = {
  apiKey: "AIzaSyBOToHhEcb9JP03UHF2FJnL3Msall5sHuk",
  authDomain: "udemy-react-curso-2021.firebaseapp.com",
  projectId: "udemy-react-curso-2021",
  storageBucket: "udemy-react-curso-2021.appspot.com",
  messagingSenderId: "347942088552",
  appId: "1:347942088552:web:c22b148b69564c03bb70dd"
};

if (process.env.NODE_ENV === 'test'){
  firebase.initializeApp(firebaseConfigTest);
} else {
  firebase.initializeApp(firebaseConfigProd);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
