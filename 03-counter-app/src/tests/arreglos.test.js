import '@testing-library/jest-dom';
import { getData } from '../helpers/arreglos';

describe("Pruebas arreglo file",() => {
  test('should retorna un string un numero',() =>{
    const [letras, numeros] = getData();
    expect(typeof letras).toBe('string');
    expect(letras).toBe('abc');
    expect(typeof numeros).toBe('number');
    expect(numeros).toBe(123);
  });
});


