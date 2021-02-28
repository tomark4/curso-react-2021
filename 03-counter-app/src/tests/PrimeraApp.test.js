import "@testing-library/jest-dom";
import PrimeraApp from "../components/PrimeraApp";
import {shallow} from 'enzyme'

describe('Pruebas en el component Primera App', () => {
  // old version sin enzime
  // test('Revisar si muestra el texto correctamente', () => {
  //   const texto = "Hello, your name is: peter stark";
  //   const wrapper = render(<PrimeraApp name="peter"/>);

  //   expect(wrapper.getByText(texto)).toBeInTheDocument();
  // });

  test('should render primerapp component',() => {
    const texto = "Hello, your name is: peter"
    const wrapper = shallow(<PrimeraApp name="peter"/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render lastname ', () =>{
    const lastName = "parker";
    const wrapper = shallow(<PrimeraApp name="peter" lastName={lastName}/>)
    const texto = wrapper.find('p').text();
    expect(texto).toBe(lastName)
  })

});
