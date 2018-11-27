import React, { Component } from "react";
import "./App.css";
import check from "./assets/check.png";
import commits from "./commits.json";

class App extends Component {
  componentDidMount() {
    this.scrollToCommits();
  }

  commits;

  scrollToCommits = () => {
    this.commits.scrollIntoView();
  };
  render() {
    return (
      <div className="main-grid">
        <div className="header">
          <div className="name">Luis Revilla</div>{" "}
          <div className="copy-btn">
            <div>Copy my email</div>
          </div>
        </div>
        <div className="main">
          {" "}
          <div className="title">Software developer based in NYC.</div>
          <div className="sub-title">Specialized in UI engineering.</div>{" "}
        </div>
        <div className="features">
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              Author of code running on&nbsp;<span>thousands of devices</span>.
            </div>
          </div>
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              2+ years building UIs with&nbsp;<span>React & React Native</span>.
            </div>
          </div>{" "}
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              <span>Fullstack</span>. Proficient at bulding & deploying web
              services.
            </div>
          </div>
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              Extraordinary&nbsp;<span>ability to learn</span>.
            </div>
          </div>
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              Strong&nbsp;<span>intuition for design</span>.
            </div>
          </div>
          <div className="feature">
            <img className="check-icon" src={check} />
            <div className="feature-text">
              Exceptional&nbsp;<span>communication skills</span>. Background in
              journalism, broadcasting and advertising.
            </div>
          </div>
        </div>
        <div
          className="commits"
          ref={el => {
            this.commits = el;
          }}
        >
          <div className="commits-title">
            <div>Check out my latest commits!</div>
          </div>
          <div className="commits-intro">
            <div>Every time I commit changes to my local repositories, a bash script updates this list. This way you can see what I'm up to daily.</div>

          </div>

          {commits.reverse().map((com,i) => {
           if(i>9){
             return null;
           }
           return (
             <div className="commit">
               <div className="project-title">{com.project}</div>
               <div className="commit-message">Commit: {com.commit}</div>
               <div className="working-branch">On branch {com.branch}</div>
               <div className="git-remote">Remote repository: {com.remote} </div>
               <div className="commit-date">{com.date}</div>
             </div>
           );
         })}

        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
