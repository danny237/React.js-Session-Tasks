import React, { useState } from 'react'
import './style.css'

const errorNameMsg = "Please enter the name !"
const contactError = "Please enter the valid Phone no !"
const successAddMsg = "Successfully Added."

export default function AttendanceList() {

    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [isNameEmpty, setNameStatus] = useState(false)
    const [isContactNoEmpty, setContactNoStatus] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const addStudent = () => {

        // return true if the length of num is 10 and length is not 0
        const isValidLength = (num) => {
            return (num.length != 0 &&  num.length == 10)
        }

        //return true if contact number is valid
        const isContactValid = (num) => {
            return (isValidLength(num) &&
            Number.isInteger(parseInt(num)))
        }

        //return true if name is not empty
        const isNameValid = (name) => {
            return name !== ''  
        }

        //set isNameEmpty to true if the input name is empty
        isNameValid(name) ?
        setNameStatus(false) :
        setNameStatus(true)

        //set isContactNoEmpty to true if contactNumber is not valid
        isContactValid(contactNumber) ?
        setContactNoStatus(false) :
        setContactNoStatus(true)

        // if the both inputs are valid then added to list
        const addfunction = () => {
            setSuccessMsg(true)
            setStudentList([...studentList, {
                name: name,
                contact_no: contactNumber
            }])
        }

        //if both inputs are valid then call addfunction and set successMsg to false if not valid
        isNameValid(name) && isContactValid(contactNumber) ?
        addfunction():
        setSuccessMsg(false)
    }

    //Clear the array of objects
    const clearList = () => {
        setName("")
        setContactNumber("")
        setStudentList([])
        setNameStatus(false)
        setContactNoStatus(false)
        setSuccessMsg(false)
    }

    return (
        <div>
            <h2>Student List</h2>
            <div>
                <label htmlFor="name">Name: </label><br/>
                <input
                type="text"
                id="name" 
                value={name}
                placeholder="Name" 
                onChange = {(e) => setName(e.target.value)}
                /><br/>
                { isNameEmpty && <small> { errorNameMsg } </small>}
            </div>
            
            <div>
                <label htmlFor="contact">Contact Number</label><br/>
                <input
                type="text"
                id="contact"
                value={contactNumber}
                placeholder="Number"
                onChange = {(e) => setContactNumber(e.target.value)}
                /><br/>
                { isContactNoEmpty && <small> { contactError } </small> }
                { successMsg && <small className="success"> { successAddMsg }</small> }
            </div>

            <button 
            className="btn"
            type="submit"  
            onClick ={() => addStudent()}>Add</button>

            <button 
            className="btn" 
            onClick = {() => {clearList()}}>Clear List</button><br/>
               
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
