import React, { Component } from "react";
import "./App.css";
import check from "./assets/check.png";
import commits from "./commits.json";

const copyToClipboard = str => {
  const el = document.createElement("textarea"); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

class App extends Component {
  state = {
    limit: 3,
    btn: "Show more",
    copy: "Copy my email",
    btnSuccess: false
  };
  componentWillMount() {
    this.commitdata = commits.reverse();
  }
  componentDidMount() {
    this.scrollToCommits();
  }

  commits;

  commitdata;

  scrollToCommits = () => {
    this.commits.scrollIntoView();
  };
  render() {
    return (
      <div className="main-grid">
        <div className="header">
          <div className="name">Luis Revilla</div>{" "}
          <div
            onClick={() => {
              copyToClipboard("luisrevillameza@gmail.com");
              this.setState({ copy: "Got it!", btnSuccess: true }, st => {
                setTimeout(() => {
                  this.setState({ btnSuccess: false }, () => {
                    this.setState({ copy: "Copy my mail" });
                  });
                }, 400);
              });
            }}
            className={
              this.state.btnSuccess ? "copy-btn btn-success" : "copy-btn"
            }
          >
            <div>{this.state.copy}</div>
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
            <div>
              Every time I commit changes to my local repositories, a bash
              script updates this list. This way you can see what I'm up to
              daily.
            </div>
          </div>
          <div className="commit-box">
            {this.commitdata.map((com, i) => {
              if (i >= this.state.limit) {
                return null;
              }
              return (
                <div className="commit">
                  <div className="project-title">{com.project}</div>
                  <div className="commit-message">
                    <span>Message:</span> "{com.commit}"
                  </div>
                  <div className="working-branch">
                    <span>On branch:</span> "{com.branch}"
                  </div>
                  <div className="git-remote">
                    <a target="_blank" href={com.remote}>
                      {com.remote}
                    </a>{" "}
                    <div className="commit-date">{com.date}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="commits-btn"
            onClick={() => {
              if (this.state.limit === 3) {
                this.setState({ limit: 20, btn: "Show less" });
              } else if (this.state.limit === 20) {
                this.setState({ limit: 3, btn: "Show more" });
              }
            }}
          >
            {this.state.btn}
          </button>
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
