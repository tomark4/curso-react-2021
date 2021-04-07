import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { startNewNote } from '../../actions/notes'
import { types } from '../../types/types'
import { db } from '../../firebase'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
  auth: {
    uid: 'testing',
  }
})

describe('pruebas en notes actions', () => {

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

})
