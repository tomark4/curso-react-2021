import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import {useState} from 'react';

const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="m-5">
            <p>real example react</p>
            <hr/>
            { show && <MultipleCustomHooks /> }

            <button type="button" className="btn btn-secondary"
            onClick={ () =>  setShow(!show)}>Hide/Show</button>
        </div>
    )
}

export default RealExampleRef
