import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import {useLayoutEffect, useRef, useState} from 'react';

import './layout.css';

const LayoutEffect = () => {
    const {state, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = (!loading && data.length > 0) && data[0]
    const [boxSize, setBoxSize] = useState({})
    const tagRef = useRef()

    useLayoutEffect(() => {
        // se ejecuta despues que se renderiza el html
       setBoxSize(tagRef.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col">
                        <h3>Breaking bad</h3>
                        <hr/>
                        <pre>
                            {JSON.stringify(boxSize)}
                        </pre>
                        <blockquote className="blockquote text-right">
                            <p className="mb-0" ref={tagRef}>{quote}</p>
                        </blockquote>

                        <footer className="blockquote-footer text-right">{author}</footer>
                        <button className="btn btn-primary"
                        type="button" onClick={increment}>Next quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutEffect
