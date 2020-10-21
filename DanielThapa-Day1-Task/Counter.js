import React, { useState } from 'react'

const INITIAL_COUNT_STATE = 0;
const INITIAL_MSG_STATE = ""
const MESSAGE = `Value can't be than ${INITIAL_COUNT_STATE}`


export default function Counter() {

    const [count, setCoount] = useState(0)
    const [msg, setMsg] = useState(INITIAL_MSG_STATE)

    const incrementHandler = () => {
        setMsg("")
        setCoount((prevState) => prevState + 2)
    }

    const decrementHandler = () => {
        count <= 0 ?
        setMsg(MESSAGE):
        setCoount(prevState => prevState - 2)
    }

    const resetHandler = () => {
        setMsg("")
        setCoount(0)
    }

    return (
        <div>
            <h2>Counter</h2>
            <button className="btn" onClick={incrementHandler}>Increment</button>
            <button className="btn" onClick={resetHandler}>Reset</button>
            <button className="btn" onClick={decrementHandler}>Decrement</button>
            <p>The current value of count is: </p>
            <h3>{count}</h3>
            <small>{msg}</small>
        </div>
    )
}
