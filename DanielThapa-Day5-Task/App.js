import React, { useState } from 'react';
import './App.css';
// import Counter from './Daniel/Counter'
// import AttendanceList from './Daniel/AttendanceList'
import Login from './LoginForm/Login'
import { BrowserRouter as Router,
                          Route, 
                          Switch, 
                          Redirect} from 'react-router-dom';
import Dashboard from './LoginForm/Dashboard';

function App() {

  const [loggedInStatus, setLoggedIn] = useState(false)

  return (
    <div>
        {/* <Counter />
        <AttendanceList /> */}

        <Router>
          <Switch>
            <Route
              exact
              path= {"/"}
              render = {props => (
                <Login {...props} loggedInStatus={loggedInStatus} setLoggedIn = {setLoggedIn}  />
              )}
            />

            <Route
              exact
              path= {"/dashboard"}
              render = {props => (
                loggedInStatus ?
                <Dashboard {...props}/> :
                <Redirect to="/" />
              )}
            />
          </Switch>
        </Router>


    </div>
  );
}

export default App;
