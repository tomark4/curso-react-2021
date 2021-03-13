import React, {memo} from 'react';

const ShowIncrement = memo(({increment}) => {

    console.log(" again :( ")

    return (
        <button type="button" className="btn btn-warning"
        onClick={() => increment(5)}>+1</button>
    )
})

export default ShowIncrement
