import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en component AddCategory', () => {
  const onAdd = jest.fn();
  let wrapper = shallow( <AddCategory onAdd={onAdd}/>);

  beforeEach(() => {
    // se ejecuta todo lo que se quiere limpiar antes de cada prueba
    jest.clearAllMocks()
    wrapper = shallow( <AddCategory onAdd={onAdd}/>);
  });

  test('should show component correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input[type="text"]');
    const value = 'hola mundo'
    input.simulate('change',{ target: { value }});

    const inputAfter = wrapper.find("input[type='text']");
    expect(inputAfter.prop("value")).toBe(value);
  });

  test('no debe de mandar la info onsubmit', () => {
    wrapper.find('form').simulate('submit', {preventDefault: () => {}} )
    expect( onAdd ).not.toHaveBeenCalled()
  });

  test('debe llamar onAdd y limpiar la caja de texto ', () => {
    const value = 'hello world';
    const preventDefault = () => {};
    // 1. Simular el input change
    const input = wrapper.find('input[type="text"]')
    input.simulate('change',{target: {value}});

    // 2. Simular el input del formulario
    wrapper.find('form').simulate('submit', { preventDefault } )

    // 3. Comprobar si se llamo onAdd
    expect( onAdd ).toHaveBeenCalled()

    // 4. El value del input debe de estar como un string vacio
    expect( input.prop('value') ).toBe('')
  });

});

