
import React, { useState } from 'react'
import PropTypes from 'prop-types'




export const CounterApp = ({value}) => {

    const [ count, setCount ] = useState(0)


    const add = () =>{
        setCount(count + 1)
    }

    const sub = () =>{
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{ count }</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}>Reset</button>
        </>
    )

}

// CounterApp.defaultProps = {
//     value : 1
// }

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

