import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home.js";
import Bio from "./Bio/Bio.js";
import { ScrollToTop } from "./Reusable/Reusable.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bio" exact component={Bio} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
