import {useState} from 'react'

const TodoAdd = ({onAdd}) => {
    const [name, setName] = useState("");
    const [counter, setCounter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length <= 3){
            alert("Escribe algo");
            return;
        }

        onAdd({
            id: counter,
            name,
            done: false
        });

        setName("");
        setCounter( counter => counter + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" autoComplete="off"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Task"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-primary btn-block"
                    type="submit"
                    >Save</button>
                </div>
            </form>
        </>
    )
}

export default TodoAdd
