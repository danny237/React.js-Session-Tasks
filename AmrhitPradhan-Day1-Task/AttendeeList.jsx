import React, { useState } from 'react';

const AttendeeList = () => {
    const [name, setName] =useState("");
    const [number, setNumber] = useState("");
    const [msg, setMsg] =useState([]);

    const nameEvent =(event)=>{
        setName(event);
    }

    const numberEvent=(event)=>{
        setNumber(event);
    }

    const btn = () => {
        console.log(Attendee);
        setMsg([...msg, {
            Name: name,
            Number: number
        }])
      setName('');
      setNumber('');
    };

    return (
        <>
                <input type="text" placeholder="Enter Name" onChange={(e)=>{nameEvent(e.target.value)}} value={name}/> <br/> <br/>
                <input type="number" placeholder="Enter Number" onChange={(e)=>{numberEvent(e.target.value)}} value={number}/> <br/> <br/>
                <button onClick={btn}> Submit </button>

                <ol>
                { msg.map((value,index)=>{
                  return  <li key={index}> Name: {value.Name} <br/> Number: {value.Number} </li>
                }) }
                </ol>
        </>
    );
}

export default AttendeeList;
