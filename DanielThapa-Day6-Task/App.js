import React, { useState} from 'react';
import './App.css';
import Login from './Login'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {

  const [loggedInStatus, setLoggedIn] = useState(false)

  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Login {...props} setLoggedIn={setLoggedIn} />
            )}
          />

          <Route
            exact
            path={"/dashboard"}
            render={props => (
              loggedInStatus ?
                <Dashboard {...props} setLoggedIn={setLoggedIn} /> :
                <Redirect to="/" />
            )}
          />
        </Switch>
      </Router>


    </div>
  );
}

export default App;