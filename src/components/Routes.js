import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Registration/Signup";
import Login from "./Registration/Login";

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/Signup" component={Signup}></Route>
          <Route path="/Login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
