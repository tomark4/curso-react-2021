import authReducer from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en el reducer', () => {

  test('debe de retornar el estado por defecto', () => {
    const result = authReducer({logged: false}, {action: {}})
    expect(result).toEqual({logged: false})
  });

  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'jose',
      }
    }
    const result = authReducer({logged: false}, action);
    expect(result).toEqual({logged: true, name: 'jose'});
  });

  test('debe de borrar el name del usuario y logged en false', () => {
    const initialState = {logged: true, name: 'jose'}

    const action = {
      type: types.logout,
    }

    const result = authReducer(initialState, action);
    expect(result.logged).toBe(false);
  });

})
