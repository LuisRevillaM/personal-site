import React, { Component } from "react";
import "./App.css";
import commits from "./commits.json";

class App extends Component {
  render() {
    return (
      <div>
        {commits.map(com => {
          return (
            <div className="Commit">
              <h1>Project: {com.project}</h1>
              <h2>On branch: {com.branch}</h2>
              <h2> Commit: {com.commit}</h2>
              <h2> Remote: {com.remote} </h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
