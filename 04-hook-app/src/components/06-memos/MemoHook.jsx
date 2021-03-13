import React, {useState, useMemo} from 'react'
import useCounter from '../../hooks/useCounter';


const procesoPesado = (iteraciones) => {
    for (let x=1; x < iteraciones; x++){
        console.log("voy por: "+x);
    }
}
const MemoHook = () => {

    const { state, increment } = useCounter(1000)
    const [show, setShow] = useState(true)

    useMemo(() => procesoPesado(state), [state]);

    return (
        <div className="container my-5">
            <h3>Memorize</h3>
            <div>
                <h3>Counter: {state}</h3>

                <button type="button" className="btn btn-primary"
                onClick={increment}>+1</button>

                <button className="btn btn-primary ml-2"
                onClick={() => setShow(!show)}>Show / Hide: {JSON.stringify(show)}</button>
            </div>
        </div>
    )
}

export default MemoHook
