// To use Bootstrap use following links in public/index.html :

//Bootstrap CDN
// <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


// import constants

import React, { useState } from 'react'
import './LoginStyle.css'

import { INITIAL_STATE,
        EMAIL_FORMAT,
        TEST_PASSWORD,
        ERROR_MESSAGE,
        SUCCESS_MESSAGE } from './Constants'

export default function Login() {

    const [email, setEmail] = useState(INITIAL_STATE)
    const [password, setPassword] = useState(INITIAL_STATE)
    const [errorStatus, setErrorStatus] = useState(false)
    const [isAuthenticated, setAuthenticated] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        
        //Check valid email and Password
        (email.match(EMAIL_FORMAT) == null || (password != TEST_PASSWORD)) ?
        setErrorStatus(true) :
        setErrorStatus(false)

        // if email and password matched return true
        // Please enter valid email and password = "Test1234"
        const isAuthenticatedUser = () => {
            return (email.match(EMAIL_FORMAT) != null) && (password == TEST_PASSWORD)
        }
        
        //Authenticated user
        isAuthenticatedUser() ?
        setAuthenticated(true) :
        setAuthenticated(false)
    }

    return (
        <div className="login-page">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="box text-center col col-md-7 col-lg-5">
                    
                    {/* header section */}
                    <div className="header-section mt-5 mb-3">
                        <h2 className="font-weight-bold">Sign In</h2>
                        <img className="my-3" src="https://www.flaticon.com/svg/static/icons/svg/847/847969.svg"/>
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
                                required/>
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
                                onClick = {(e) => submitHandler(e)}
                                className="btn col-5 my-3">Authenticate</button>
                            </div>
                    </form>

                    {
                        isAuthenticated && SUCCESS_MESSAGE
                    }

                    {
                        errorStatus && ERROR_MESSAGE
                    }

                </div>
            </div>
        </div>
    )
}
