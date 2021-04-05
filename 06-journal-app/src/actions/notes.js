import { db } from "../firebase";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const note = {
    title: '',
    body: '',
    date: new Date().getTime()
  }

  const docRef = await db.collection(`${uid}/journal/notes`).add(note);
  dispatch(activeNote(docRef.id, note));
}


export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})


export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})


export const startLoadingNotes = (uid) => async (dispatch) => {
  const notes = await loadNotes(uid);
  dispatch( setNotes(notes) );
}


export const startSaveNote = (note) => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  const noteToFirestore = {...note};
  delete noteToFirestore.id;
  await db.doc(`/${uid}/journal/notes/${note.id}`).update(noteToFirestore);
  dispatch( refreshNote(note.id, noteToFirestore) );
  Swal.fire('Saved',note.title, 'success');
}


export const refreshNote =  (id, note) => ({
  type: types.notesUpdated,
  payload:{
    id,
    note: {
      id,
      ...note
    }
  }
})


export const startUploading = (file) => async (dispatch, getState) => {
  const { active:currentNote } = getState().notes;

  Swal.fire({
    title: 'uploading...',
    text: 'please wait',
    allowOutsideClick: false,
    willOpen: () => {
      Swal.showLoading()
    }
  });

  const fileUrl = await fileUpload(file);
  currentNote.url = fileUrl;

  dispatch( startSaveNote(currentNote) );

  Swal.close();
}


export const startDeleting = (id) => async (dispatch, getState ) => {

  const uid = getState().auth.uid;
  await db.doc(`/${uid}/journal/notes/${id}`).delete();

  dispatch( deleteNote(id) );

}


export const deleteNote = (id) =>({
  type: types.notesDelete,
  payload: id
})


export const noteLogout = () => ({
  type: types.notesLogoutCleaning
})
