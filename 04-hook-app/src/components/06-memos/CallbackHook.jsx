import {useState, useCallback, useEffect} from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [state, setState] = useState(10);


    const ejecutarIncrement = useCallback((num) => {
        setState( s => s * num)
    },[setState]);

    useEffect(() => {
      //aqui se hace cualquier cosas
    }, [ejecutarIncrement]);

    return (
        <div className="container my-5">
            <p>
                Voy por: {state}
            </p>
            <ShowIncrement increment={ejecutarIncrement}/>
        </div>
    )
}

export default CallbackHook
