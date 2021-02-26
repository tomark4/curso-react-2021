import { render } from "@testing-library/react";
import PrimeraApp from "../components/PrimeraApp";

describe('Pruebas en el component Primera App', () => {
  test('Revisar si muestra el texto correctamente', () => {
    const texto = "Hello, your name is: peter stark";
    const wrapper = render(<PrimeraApp name="peter"/>);

    expect(wrapper.getByText(texto)).toBeInTheDocument();
  });
});
