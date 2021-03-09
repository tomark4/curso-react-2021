import {useState} from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState({
        uno: 0,
        dos: 20
    });

    return (
        <div className="row py-5 mx-auto">
            <div className="col">
                <h3>counter 1 {counter.uno}</h3>
                <h3>counter 2 {counter.dos}</h3>
                <button className="btn btn-primary"
                onClick={() => setCounter({ ...counter, uno: counter.uno + 1})}>+1</button>
            </div>
        </div>
    )
}

export default CounterApp
