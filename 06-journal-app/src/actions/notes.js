import { db } from "../firebase";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


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
