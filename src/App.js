import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js";
import Bio from "./Bio/Bio.js";


class App extends Component {
render(){
  return (  <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          path="/bio"
          exact
          component={Bio}
        />
      </Switch>
    </BrowserRouter>);
}
}

export default App;
