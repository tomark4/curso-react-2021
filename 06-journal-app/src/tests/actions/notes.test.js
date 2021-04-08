import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes'
import { types } from '../../types/types'
import { db } from '../../firebase'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initState = {
  auth: {
    uid: 'testing',
  },
  notes:{
    active: {
      id: 'RrTI4wLq4psKkHjfrlGU',
      title: 'hola',
      body: 'mundo'
    }
  }
};

let store = mockStore(initState);

describe('pruebas en notes actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('debe de guardar una nota', async () => {
    await store.dispatch( startNewNote() )

    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
      }
    })

    const docId = actions[0].payload.id
    await db.doc(`/testing/journal/notes/${docId}`).delete()

  })

  test('debe empezar el guardadado de la nota start loading notes', () => {
    async function makeTest() {
      try{

        await store.dispatch( startLoadingNotes('testing') )

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
          type: types.notesLoad,
          payload: expect.any(Array)
        });

        const expect = {
          id: expect.any(String),
          title: expect.any(String),
          body: expect.any(String),
          id: expect.any(Number),
        };

        expect( actions[0].payload[0] ).toMatchObject(expect);
      } catch(err){
        throw new Error(err)
      }
    }

    makeTest();
  });

  test('start save note debe de actualizar la nota', () => {
    async function makeTest() {
      try{

        const note = {
          id: 'RrTI4wLq4psKkHjfrlGU',
          title: 'title',
          body: 'body'
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
        expect (docRef.data().title ).toBe( note.title );
      } catch(err){
        throw new Error(err)
      }
    }

    makeTest()
  });

})
