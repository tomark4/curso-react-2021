import '@testing-library/jest-dom';
import { getUser, getUserActivo } from '../helpers/usuarios';

describe("Pruebas en usuario file",() => {
  test('getUser retorna un objeto',() =>{
    const user = {
      uid: 1,
      username: 'jose'
    }

    const userTest = getUser();

    expect(user).toEqual(userTest)
  })

  test("getUsuarioActivo debe retornar un objeto con el user seleccionado", () => {
    const user = {
      id: 1,
      username: 'peter'
    };

    const userActivo = getUserActivo(1);

    expect(user).toEqual(userActivo);
  })
})
