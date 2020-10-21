import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(false)

    return (
        <div>
            {
                message && <h1>Count must not be less than 0</h1>
            }
            Count: {count}<br/>
            <button onClick={() => {
                setCount(prev => prev + 2);
                setMessage(false)
            }}>
                Increment
            </button>
            <button onClick={() => {
                (count == 0)?setMessage(true): setCount(prev => prev - 1)
            }}>
                Decrement
            </button>
        </div>
    )
}
