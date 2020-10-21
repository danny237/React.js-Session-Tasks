import React, { useState } from 'react';

const IncreDecre = () => {

    let initial = 0, temp = 2;

    const [value, setValue] = useState(initial);
    const [msg, setMsg] = useState("Increase or Decrease");

    const increBtn = () => {
        setMsg("");
        setValue(prevValue=> prevValue + temp);
    }

    const decreBtn = () => {
        (value!==0) ? setValue(prevValue=> prevValue - temp) : setMsg(`Value can't be less than ${initial}`);
    }
    const reset =() =>{
        setValue(initial);
    }

    return (
        <>
        <div className="firstTask">
            <h4> Increment and Decrement </h4>
            <span> {value} </span> <br />
            <button onClick={() => {increBtn()}}>Increment</button>
            <button onClick={() => {decreBtn()}}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p> {msg} </p>
        </div>
        </>
    );
}

export default IncreDecre;
