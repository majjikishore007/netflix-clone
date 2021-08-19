import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage>
            <Navbar></Navbar>
          </LandingPage>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
