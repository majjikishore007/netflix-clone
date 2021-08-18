import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
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
        <Route exact path='/home'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
