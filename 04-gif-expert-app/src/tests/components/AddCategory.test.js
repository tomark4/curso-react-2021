import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en component AddCategory', () => {
  const onAdd = () => {}
  const wrapper = shallow( <AddCategory onAdd={onAdd}/>);

  test('should show component correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input[type="text"]');
    const value = 'hola mundo'
    input.simulate('change',{ target: { value }});

    const inputAfter = wrapper.find("input[type='text']");
    expect(inputAfter.prop("value")).toBe(value);
  })


});

