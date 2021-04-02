import { types } from '../types/types';
import {firebase, googleAuthProvider} from '../firebase';
import { startLoading, stopLoading } from './ui';

// login with email and password
export const loginWithEmailPassword = (email, password) => (dispatch) => {
  dispatch( startLoading() );
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( ({user}) =>  {
    dispatch({
      type: types.login,
      payload: { uid: user.uid, name: user.displayName }
    });
    dispatch( stopLoading() );
  }).catch(err => console.log(err) );
}

// login con google
export const loginWithGoogle = () => (dispatch) => {
  firebase.auth().signInWithPopup( googleAuthProvider )
  .then( ({user}) => {
    dispatch({
      type: types.login,
      payload: {uid: user.uid, name: user.displayName}
    })
  })
}

// register con email and password
export const registerWithEmailPassword = (email, password, name) => (dispatch) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( async ({user}) => {
    await user.updateProfile({displayName: name});
    dispatch({ type: types.login, payload: {uid: user.uid, name: user.displayName} });
  }).catch( err => console.log(err) );
}
