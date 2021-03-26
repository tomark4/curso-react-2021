import TodoApp from '../../../components/08-reducers/TodoAdd';
import {shallow} from 'enzyme';

describe('pruebas en todo app', () => {
  const handleAdd = jest.fn();

  const wrapper = shallow(<TodoApp onAdd={handleAdd}/>)  ;

  test('should retornar el componente', () => {
      expect(wrapper).toMatchSnapshot();
  });

  test('should no debe de llamar onAdd', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({preventDefault(){}})

    // esperaba que fuera llamado 0 veces
    expect(handleAdd).toHaveBeenCalledTimes(0)
  });

  test('should debe de llamar la funcion add todo', () => {

    const event = {
      target:{
        name: 'name',
        value: 'prueba'
      }
    };

    wrapper.find("input").simulate('change', event);
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault(){} });
    expect( handleAdd ).toHaveBeenCalledTimes(1);
    expect( handleAdd ).toHaveBeenCalledWith(expect.any(Object));
    expect( handleAdd ).toHaveBeenCalledWith( {id: "", name: 'prueba', done: false} );
  });

})
