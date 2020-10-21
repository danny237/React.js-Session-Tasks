import React, { useState } from 'react'

export default function AttendanceList() {

    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [studentList, setStudent] = useState([]);

    const addStudent = () => {
        console.log(name, contactNumber)

        setStudent([...studentList, {
            name: name,
            contact_no: contactNumber
        }])
    }

    return (
        <div>
            <h2>Student List</h2>
            <div>
                <label htmlFor="name">Name: </label><br/>
                <input
                id="name" 
                placeholder="Name" 
                onChange = {(e) => setName(e.target.value)}
                />
            </div>
            
            <div>
                <label htmlFor="contact">Contact Number</label><br/>
                <input
                id="contact"
                placeholder="Number"
                onChange = {(e) => setContactNumber(e.target.value)}
                />
            </div>
                <button className="btn" type="submit"  onClick ={addStudent}>Add</button>
                <button className="btn" type="submit"  onClick ={() => setStudent([])}>Clear List</button>
                <ol>
                {
                    studentList.map((item,index) => (
                    <li key={index}>Name: {item.name} <br/> Contact no: {item.contact_no}</li>
                    ))
                }
                </ol>
        </div>
    )
}