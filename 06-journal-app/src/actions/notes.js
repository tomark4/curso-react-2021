import { db } from "../firebase";
import { types } from "../types/types";

export const startNewNote = () => async (dispatch, getState) => {
  const uid = getState().auth.uid;
  console.log(uid)
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
