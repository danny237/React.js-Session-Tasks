import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const AttendeeList = () => {
    const [name, setName] =useState("");
    const [number, setNumber] = useState("");
    const [msg, setMsg] =useState([]);
    // const [info, setInfo] =useState("");


    const btn = () => {
    
        if((name == '') || (number== '')){
        //   setInfo("Name and Number cannot be empty");
          alert(`Name and Number cannot be empty`);
        }
        else if(number.length !== 10){
            alert('Number must be 10 digit');
        }
        else {
            // setInfo('');
            setMsg([...msg, {
            Name: name,
            Number: number
        }])
      setName('');
      setNumber('');
    }
    };

    return (
        <>
            {/* <h1> {info} </h1> */}
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/> <br/> <br/>
                <input type="number" placeholder="Enter Number" onChange={(e)=>setNumber(e.target.value)} value={number}/> <br/> <br/>
               
                <button onClick={()=>btn()}> Submit </button>

                <ol>
                { msg.map((value,index)=>{
                  return  <li key={index}> Name: {value.Name} <br/> Number: {value.Number} </li>
                }) }
                </ol>
        </>
    );
}

export default AttendeeList;