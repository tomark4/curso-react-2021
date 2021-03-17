
const initialState = [
  {id: 1, name: 'tarea 1', done: false}
];

const ADD = 'ADD';

const todoReducer = (state = initialState, action = "") => {

  switch(action.type){
    case ADD:
     return [...state, action.payload];

    default:
      return state;
  }
}

let todos = todoReducer();

const newTodo = {id: 2, name: 'tarea 2', done: false};

const agregarTodoAction = {
  type: ADD,
  payload: newTodo
};

todos =  todoReducer(todos, agregarTodoAction);

console.log(todos)

