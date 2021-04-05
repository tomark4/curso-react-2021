import { types } from '../types/types';
import {firebase, googleAuthProvider} from '../firebase';
import { startLoading, stopLoading } from './ui';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';

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
  }).catch(err => {
    console.log(err);
    Swal.fire('Error',err.message, 'error')
    dispatch( stopLoading() );
  });
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


export const startLogout = () => async (dispatch) => {
  try{
    await firebase.auth().signOut();
    dispatch( noteLogout() );
    dispatch( logout() );
  }catch(err){
    console.log(err)
  }
}

export const logout = () => ({
  type: types.logout
})
