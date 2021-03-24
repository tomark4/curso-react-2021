import { shallow } from "enzyme";
import TodoItem from "../../../components/08-reducers/TodoItem";
import {demoTodos} from '../../fixtures/demoTodo';

describe('pruebas en todo item', () => {
  const handleDelete = jest.fn();
  const handleTouch = jest.fn();

  const wrapper = shallow(<TodoItem
    todo={ demoTodos[0] }
    onDelete={ handleDelete }
    onTouch={ handleTouch }/>);

  test('should mostrar el component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should llamar la funcion borrar', () => {
    wrapper.find('.btn-danger').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('should llamar la funcion toggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleTouch).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('should debe mostrar el texto', () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(demoTodos[0].name);
  });

  test('should tener la clase completed si todo esta done', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoItem todo={ todo }/>);
    const p = wrapper.find("p");
    expect(p.hasClass('completed')).toBe(true);
  });
});
