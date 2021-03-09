import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <div className="container ml-2">
            <div className="row">
                <div className="col">
                    <h1>Counter with custom hook {state}</h1>
                    <div>
                        <button className="btn btn-success"
                        type="button"
                        onClick={increment}>+1</button>
                        <button className="btn btn-danger ml-2"
                        type="button"
                        onClick={decrement}>-1</button>
                        <button className="btn btn-warning ml-2"
                        onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterWithCustomHook
