import React,{memo} from 'react'

export const Small = memo(({value}) => {
    console.log("llamando small")
    return (
        <small>Counter: { value }</small>
    )
})
