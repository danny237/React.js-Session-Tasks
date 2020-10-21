import React, { useState } from 'react'

var initialState = 0

export default function Counter() {

    const [count, setCount] = useState(initialState)

    return (
        <div>
            <h1>Counter</h1>
            <button class="btn" onClick={() => setCount(count + 1)}>Increment</button>
            <button class="btn" onClick={() => setCount(0)}>Reset</button>
            <button class="btn" onClick={
                count == 0 ? 0 : () => setCount(count - 1)}
                >Decrement</button>
                <p>Current Value of Count is :</p>
            <h2>{count}</h2>
        </div>
    )
}
