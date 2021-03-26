import TodoApp from '../../../components/08-reducers/TodoApp';
import {shallow, mount} from 'enzyme';
import {demoTodos} from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

describe('pruebas en todoapp', () => {

  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn()

  test('should de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should de agregar un TODO', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop("onAdd")(demoTodos[0]);
      wrapper.find('TodoAdd').prop("onAdd")(demoTodos[1]);
    })

    expect( wrapper.find("p.my-2").text().trim() ).toBe("todos en mi lista: 2");
    expect( localStorage.setItem ).toHaveBeenCalledTimes(2)
  });

  test('should debe de eliminar un todo', () => {
    wrapper.find('TodoAdd').prop("onAdd")(demoTodos[0]);
    expect( wrapper.find("p.my-2").text().trim() ).toBe("todos en mi lista: 1");

    wrapper.find("TodoItem").prop('onDelete')(1)
    expect( wrapper.find("p.my-2").text().trim() ).toBe("todos en mi lista: 0");
  })

})

