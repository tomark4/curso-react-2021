import { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';
import './reducers.css';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const handleDelete = (todoId) => {
        dispatch({
            type: 'DELETE',
            payload: todoId
        });
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'TOGGLE',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD',
            payload: newTodo
        });
    }

    return (
        <div className="container my-5">
            <h3>TODO app</h3>
            <hr/>
            <p className="my-2">todos en mi lista: { todos.length }</p>
            <div className="row">
                <div className="col-md-8">
                    {todos.length === 0 &&
                        <div className="alert alert-info">No hay todos</div>
                    }
                    <ul className="list-group list-group-flush">
                        {todos.map( todo => (
                            <TodoItem todo={todo}
                            key={todo.id}
                            onDelete={handleDelete}
                            onTouch={handleToggle}
                            />
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <TodoAdd onAdd={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
