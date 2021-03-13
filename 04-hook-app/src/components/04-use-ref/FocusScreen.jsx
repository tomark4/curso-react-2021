import {useRef} from 'react'

const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current)
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">
                        <p>Focus Screen</p>
                        <div className="form-group">
                            <input type="text" placeholder="su nombre"
                            className="form-control"
                            ref={inputRef}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary"
                            onClick={handleClick}>Focus</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FocusScreen
