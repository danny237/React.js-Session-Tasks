import React from 'react'

export const INITIAL_STATE = ""
export const EMAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const TEST_PASSWORD = "Test1234"
export const ERROR_MESSAGE = (<div className="alert alert-danger alert-dismissible">
                        <p className="close" data-dismiss="alert" aria-label="close">&times;</p>
                        Your Email or Password didn't matched !
                        </div>)