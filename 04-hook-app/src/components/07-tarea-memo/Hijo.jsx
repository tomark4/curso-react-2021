import {memo} from 'react'

const Hijo = memo(({increment}) => {
    console.log('soy el hijo')
    return (
        <>
            <h3>Buttons to increment by X num</h3>
            <div className="row">
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={() => increment(2)}>2</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={() => increment(4)}>4</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={() => increment(6)}>6</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={() => increment(8)}>8</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary"
                    onClick={() => increment(10)}>10</button>
                </div>
            </div>
        </>
    )
})

export default Hijo
