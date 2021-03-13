import {useState, useCallback} from 'react';
import Hijo from './Hijo'

const Padre = () => {
    const [counter, setCounter] = useState(10)

    const increment = useCallback((num) => {
        setCounter( counter => counter * num)
    },[]);

    return (
        <div className="container">
            <h1>Counter { counter }</h1>
            <Hijo increment={increment}/>
        </div>
    )
}

export default Padre
