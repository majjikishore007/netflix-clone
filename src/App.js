import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage>
            <Navbar></Navbar>
          </LandingPage>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
