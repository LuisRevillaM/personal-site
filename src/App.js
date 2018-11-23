import React, { Component } from "react";
import "./App.css";
import commits from "./commits.json";

class App extends Component {
  render() {
    return (
      <div className="app-parent">

      <div className="black"></div>
      <div className="first"></div>
        <div className="second">
          <div className="name">Luis Revilla</div>
          <div className="intro-text">Fullstack developer based in Manhattan.</div>
          <div className="oranje"></div>

        </div>
        <div className="color-bg2"></div>

        <div className="color-bg3"></div>
        <div className="color-bg4"></div>
        <div className="color-bg5"></div>



        <div className="feature-block">

        <div className="feature">Author of code running on <span>thousands of devices</span>.</div>
          <div className="feature">
            <span>3+ years</span> writing <span>Javascript</span>, both for the <span>web and Node.js</span> programs.
          </div>
          <div className="feature">
            <span>2+ years</span> programming UIs with <span>React</span>. 1+ year building mobile
            applications with <span>React Native</span>.
          </div>
          <div className="feature">Strong intuition for <span>design</span>.</div>
          <div className="feature">Exceptional <span>ability to learn</span>.</div>

            <div className="feature">Focus on <span>testing and performance</span>.</div>
            <div className="feature">Extraordinary <span>communication skills</span>. Background in journalism, broadcasting and advertising.</div>

        </div>

        <div className="grid">
          <div className="element"></div>


        </div>

        <div>
        <div className="work">See what I'm up to</div><div>
          {commits.reverse().map(com => {
            return (
              <div className="Commit">
                <div className="project-title">{com.project}</div>
                <div className="commit-message">Commit message: {com.commit}</div>
                <div className="working-branch">On branch {com.branch}</div>
                <div className="git-remote">Remote repository: {com.remote} </div>
                <div className="commit-date">{com.date}</div>
              </div>
            );
          })}
        </div></div>
      </div>
    );
  }
}

export default App;
