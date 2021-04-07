import {authReducer} from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('pruebas en el auth reducer', () => {

  test('debe de loguear al usuario', () => {
    const payload = {
      uid: '123',
      name: 'jose'
    }
    const state = authReducer({},{
      type: types.login,
      payload
    })
    expect(state).toEqual(payload)
  })

  test('debe de hacer logout al usuario', () => {
    const initialState = {
      uid: '123',
      name: 'jose'
    }
    const state = authReducer(initialState,{
      type: types.logout,
    });

    expect(state).toEqual({})
  })

  test('enviar accion que no se reconozca', () => {
    const initialState = {
      uid: '123',
      name: 'jose'
    }
    const state = authReducer(initialState,{
      type: 'otra cosas',
    });

    expect(state).toEqual(initialState)
  })

})
