import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter';
import { Small } from './Small';

const Memorize = () => {

    const { state, increment } = useCounter(10)

    const [show, setShow] = useState(true)
    return (
        <div className="container my-5">
            <h3>Memorize</h3>
            <Small value={state}/>
            <div>
                <button type="button" className="btn btn-primary"
                onClick={increment}>+1</button>

                <button className="btn btn-primary ml-2"
                onClick={() => setShow(!show)}>Show / Hide: {JSON.stringify(show)}</button>
            </div>
        </div>
    )
}

export default Memorize
