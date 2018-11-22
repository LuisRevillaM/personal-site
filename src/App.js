import React, { Component } from "react";
import "./App.css";
import commits from "./commits.json";

class App extends Component {
  render() {
    return (
      <div className="app-parent">

        <div className="welcome"><div>Luis Revilla.</div>
        <div>Fullstack developer based in Manhattan.</div></div>

        <div className="feature-block">

        <div className="feature">3+ years writing Javascript, both for the web and Node.js programs.
</div><div className="feature">2+ years programming UIs with React. 1+ year building mobile applications with React Native.</div>
<div className="feature">Strong intuition for design.</div><div className="feature">
Exceptional ability to learn.</div>


        </div>

            <div>


            {commits.reverse().map(com => {
              return (
                <div className="Commit">
                  <div>Project: {com.project}</div>
                  <div>On branch: {com.branch}</div>
                  <div> Commit: {com.commit}</div>
                  <div> Remote: {com.remote} </div>
                </div>
              );
            })}
          </div>

      </div>

    );
  }
}

export default App;
