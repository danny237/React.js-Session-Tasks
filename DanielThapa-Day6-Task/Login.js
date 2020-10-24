// To use Bootstrap use following links in public/index.html :

//Bootstrap CDN
// <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


import React, { useState } from 'react'
import './LoginStyle.css'
import Error from './Error'

import {
    INITIAL_STATE,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    INITIAL_KEY,
    ADMIN_NAME,
} from './Constants'

export default function Login(props) {

    const [email, setEmail] = useState(INITIAL_STATE)
    const [password, setPassword] = useState(INITIAL_STATE)
    const [errorStatus, setErrorStatus] = useState(false)

    // set admin email and admin password in localstorage
    let admin = {
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        create_at: new Date()
    }

    localStorage.setItem(INITIAL_KEY, JSON.stringify(admin))

    const submitHandler = (e) => {
        e.preventDefault();

        const login = () => {
            props.setLoggedIn(true)
            props.history.push("/dashboard")
        }

        const loginError = () => {
            props.setLoggedIn(false)
            setErrorStatus(true)
        }

        //check for authenticated user
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            var user = JSON.parse(localStorage.getItem(key))

            const isAuthenticated = () => {
                return (user.email === email && user.password === password)
            }

            if (isAuthenticated()) {
                login();
            } else {
                loginError();
            }
        }
    }

    return (
        <div className="login-page">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="box text-center col col-md-7 col-lg-5">

                    {/* header section */}
                    <div className="header-section mt-5 mb-3">
                        <h2 className="font-weight-bold">Sign In</h2>
                        <img className="my-3" alt="Icon" src="https://www.flaticon.com/svg/static/icons/svg/847/847969.svg" />
                    </div>

                    {/* form */}
                    <form className="form-group  d-flex flex-column justify-content-center">
                        <div className="">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                value={email}
                                className="border-0 p-2 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Email"
                                required />
                        </div>

                        <div className="">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                value={password}
                                className="border-0 p-2 mx-auto my-3 col-9 form-control text-center"
                                placeholder="Password"
                                required
                            />
                            <button
                                onClick={(e) => submitHandler(e)}
                                className="btn col-5 my-3">Authenticate</button>
                        </div>
                    </form>
                    {
                        errorStatus && <Error />
                    }
                </div>
            </div>
        </div>
    )
}
