const TodoItem = ({todo, onDelete, onTouch}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-8">
                    <p className={todo.done ? 'completed' : ''}
                    onClick={() => onTouch(todo.id)}>{todo.name}</p>
                </div>
                <div className="col-md-4 text-right">
                    <button className="btn btn-danger btn-sm"
                    onClick={() => onDelete(todo.id)}>Borrar</button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem;
