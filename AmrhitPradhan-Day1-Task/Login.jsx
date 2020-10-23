import React, { useState, useEffect } from "react";

const Login = ({ login }) => {
  const [userid, setuserid] = useState("");
  const [passcode, setpasscode] = useState("");
  const [localstorage, getlocalstorage] = useState(false);
  // const [msg, setMsg] = useState("");

  // const localStorecheck = localStorage.getItem("entrypassed");



  useEffect(() => {
    if (localStorage.getItem("entrypassed")) {
      login();
    }
  }, [localstorage]);

  const checkpoint = () => {
    let defaultuser = "admin",
      defaultpass = "adminzz";
    if (userid !== "" && passcode !== "") {
      if (userid === defaultuser && passcode === defaultpass) {
        getlocalstorage(true);
        login();
      } else {
        alert("WRONG PASSCODE");
      }
    } else {
      alert('USER-ID and PASS-CODE cannot be empty!!!!!');
    }
  }

  return (
    <>
      <div className="login-main">

        <div className="login-heading">
          <span>ENTRY-POINT</span>
        </div>

       
        <label htmlFor="userid" className="login-labelname">USER-ID</label> <br />
        <div className="inputclass">
          <input type="text" id="userid" placeholder="eg: Jung-Bdr" onChange={(e) => setuserid(e.target.value)} value={userid} className="login-input" />
        </div>
    
        <label htmlFor="passcode" className="login-labelname">PASS-CODE</label> <br />
        <div className="inputclass">
          <input type="password" id="passcode" placeholder="secret code" onChange={(e) => setpasscode(e.target.value)} value={passcode} className="login-input" />
        </div>
     
      <div className="btnclass">

        <button onClick={() => checkpoint()} id="btn"> GET-IN </button>
      </div>

    </div>

        
    </>
  );
}

export default Login;