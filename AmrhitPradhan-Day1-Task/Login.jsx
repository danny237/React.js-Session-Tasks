import React, { useState, useEffect } from "react";

const Login = ({login}) => {
  const [userid, setuserid] = useState("");
  const [passcode, setpasscode] = useState("");
  const [localstorage, getlocalstorage] = useState(false);
  // const [msg, setMsg] = useState("");

// const localStorecheck = localStorage.getItem("entrypassed");


 
  useEffect(() => {
    if (localStorage.getItem("entrypassed")) { 
      login();
    } 
  },[localstorage]);
  
  const checkpoint = () => {
    let defaultuser = "admin",
  defaultpass = "adminzz";
    if (userid !== "" && passcode !== "") {
      if (userid === defaultuser && passcode === defaultpass) {
        getlocalstorage(true);
        login();
      } else {
        alert("Wrong passcode");
      }
    } else {
      alert('cannt be empty')
    }
  }

  return (
    <>
      <div>
        <div  className="login-main">
          <div className="login-heading">
            <span>ENTRY-POINT</span>
          </div>

          <div className="login-user">
            <label htmlFor="userid" className="login-labelname">USER-ID</label> <br />
            <input type="text" id="userid" placeholder="eg: Jung-Bdr" onChange={(e) => setuserid(e.target.value)} value={userid} className="login-input" />
          </div>

          <div className="login-pass">
            <label htmlFor="passcode" className="login-labelname">PASS-CODE</label> <br />
            <input type="password" id="passcode" placeholder="secret code" onChange={(e) => setpasscode(e.target.value)} value={passcode} className="login-input"/>
          </div>
      

          <button onClick={() => checkpoint()} id="btn"> GET-IN </button>
     
        </div>

      </div>
    </>
  );
}

export default Login;