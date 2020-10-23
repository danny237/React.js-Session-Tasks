import React, { useState } from "react";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Login from "./Login"; 
import Home from "./Home";
import "./index.css";

const App=()=> {
  const [loginStatus, setloginStatus] = useState(false);

  const login = () => {
    setloginStatus(true);
    localStorage.setItem("entrypassed", JSON.stringify(loginStatus));
  };

  const logout = () => {
    setloginStatus(false);
    localStorage.removeItem("entrypassed");
  };


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => loginStatus ? <Redirect to="/app" /> : <Login login={login} />}/>
        <Route render={(props)=> loginStatus ? <Route exact path="/app" render = {()=><Home logout = {logout} />} /> : <Redirect to = "/" />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
