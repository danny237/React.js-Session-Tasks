import React, { useState } from 'react'
import './style.css'

const INITIAL_COUNT_STATE = 0;
const INITIAL_MSG_STATE = ""
const MESSAGE = `Value can't be than ${INITIAL_COUNT_STATE}`


export default function Counter() {

    const [count, setCount] = useState(INITIAL_COUNT_STATE)
    const [msg, setMsg] = useState(INITIAL_MSG_STATE)

    const incrementHandler = () => {
        setMsg("")
        setCount((prevState) => prevState + 2)
    }

    const decrementHandler = () => {
        count <= 0 ?
        setMsg(MESSAGE):
        setCount(prevState => prevState - 2)
    }

    const resetHandler = () => {
        setMsg("")
        setCount(INITIAL_COUNT_STATE)
    }

    return (
        <div>
            <h2>Counter</h2>
            <button className="btn" onClick={() => {incrementHandler()}}>Increment</button>
            <button className="btn" onClick={() => {resetHandler()}}>Reset</button>
            <button className="btn" onClick={() => {decrementHandler()}}>Decrement</button>
            <p>The current value of count is: </p>
            <h3>{count}</h3>
            <small>{msg}</small>
        </div>
    )
}
