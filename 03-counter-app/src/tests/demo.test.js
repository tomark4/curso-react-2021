import { getSaludo } from "../helpers/demo";
import '@testing-library/jest-dom';
// agrupar
describe("pruebas en demo file", () => {
  // diferentes test
  test('los strings deben ser iguales', () => {
    // initialize
    const mensaje = "hola mundo";

    // estimulo
    const mensaje2 = "hola mundo";

    // observar comportamiento
    expect(mensaje).toBe(mensaje2);
  });

  test("debe ser numero", () => {
    const num = 1;

    expect(num).toBe(Number(num))
  })

  test('prueba en metodo de getSaludo de usuarios',() => {
    const nombre = 'jose'
    const saludo = getSaludo(nombre);
    // console.log(saludo);
    expect(saludo).toBe(`Hola, ${nombre}`)
  });

  test('getSaludo regresa None si no se envia nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola, None`);
  })
})
