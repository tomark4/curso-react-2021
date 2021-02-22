
// agrupar test
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
})
