import todoReducer from "../../../components/08-reducers/todoReducer";
import { demoTodos } from "../../fixtures/demoTodo";


describe('pruebas en todo reducer', () => {

  test('should retornar el state por defecto', () => {
     const state = todoReducer(demoTodos, '')

     expect(state).toEqual(demoTodos);
  });

  test('should agregar un todo', () => {
      const newTodo = {id: 3, name: "lorem 3", done: false}
      const state = todoReducer(demoTodos,{
        type: 'ADD',
        payload: newTodo
      })
      // expect(state.length).toBe(3);
      expect(state).toEqual([...demoTodos, newTodo])
  });

  test('should borrar un todo', () => {
    const state = todoReducer(demoTodos, {type:'DELETE',payload: 1})

    expect( state.length ).toBe(demoTodos.length - 1);
    expect( state ).toEqual([demoTodos[1]])
  });

  test('should cambiar el valor del done del todo', () => {
    const state = todoReducer(demoTodos, { type: 'TOGGLE', payload: 1});
    expect( state[0].done).not.toBe( demoTodos[0].done )
    expect( state ).not.toEqual( demoTodos )
    expect( state ).not.toEqual( demoTodos )
  });

})
