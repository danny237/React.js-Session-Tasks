import React, { useState } from 'react'
import { INITIAL_STATE } from './Constants'
import './Dashboard.css'
import UserList from './UserList'

import {
    REGISTRATION_ERROR,
    EMAIL_FORMAT,
    EMAIL_EXIST_ERROR,
} from './Constants'

export default function Dashboard({ setLoggedIn }) {

    const [name, setName] = useState(INITIAL_STATE);
    const [email, setEmail] = useState(INITIAL_STATE);
    const [password, setPassword] = useState(INITIAL_STATE);
    const [confirmPassword, setConfirmPassword] = useState(INITIAL_STATE);
    const [registrationErrorStatus, setRegistrationErrorStatus] = useState(INITIAL_STATE)
    const [emailExist, setEmailExist] = useState(INITIAL_STATE)

    const submitHandle = (e) => {
        e.preventDefault();

        // reset inputfield after successfully register
        const resetInputField = () => {
            setName(INITIAL_STATE);
            setEmail(INITIAL_STATE);
            setPassword(INITIAL_STATE);
            setConfirmPassword(INITIAL_STATE)
        }

        const registerError = () => {
            setRegistrationErrorStatus(true)
        }

        const formValidation = () => {
            return (password === confirmPassword) &&
                (email.match(EMAIL_FORMAT)) &&
                (name !== "") &&
                (password !== "")
        }

        const isValidUser = () => {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)
                var user = JSON.parse(localStorage.getItem(key))
                if (user.email == email) {
                    setEmailExist(true)
                    return;
                }
            }
            // new User
            var newUser = {
                name,
                email,
                password,
                created_at: new Date()
            }

            let j = localStorage.length
            localStorage.setItem(j + 1, JSON.stringify(newUser))
            setRegistrationErrorStatus(false)
            setEmailExist(false)
            resetInputField();
        }

        formValidation() ?
            isValidUser() :
            registerError()
    }

    return (

        <div className="dashboard mt-10">
            <nav className="navbar navbar-dark bg-dark">
                <h3 className="text-white">CodewithSudeep</h3>
                <div>
                    <button
                        onClick={() => setLoggedIn(false)}
                        className="btn outline-primary">Logout</button>
                </div>
            </nav>
            <div className="container d-flex">
                <div className="box text-center col-md-7 mt-5">
                    <h2 className="my-4 font-weight-bold">User Registration Form</h2>

                    {/* form */}
                    <form>
                        <div className="form-group">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="border-0 p-3 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Name"
                                required />
                        </div>
                        <div className="form-group">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="border-0 p-3 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Email"
                                required />
                        </div>
                        <div className="form-group">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="border-0 p-3 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Password"
                                required />
                        </div>
                        <div className="form-group">
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                className="border-0 p-3 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Confirm Password"
                                required />
                        </div>
                        <div>
                            <button
                                className="btn col-5 my-3" onClick={(e) => submitHandle(e)}>Register</button>
                        </div>
                    </form>
                    {
                        registrationErrorStatus && <p className="alert-danger text-danger text-muted">{REGISTRATION_ERROR}</p>
                    }
                    {
                        emailExist && <p className="alert-danger text-muted">{EMAIL_EXIST_ERROR}</p>
                    }
                </div>
                <UserList />
            </div>
        </div>
    )
}
