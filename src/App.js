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
    copyMail1: "Copy email",
    copyMail2: "Copy email",
    btn1Success: false,
    btn2Success: false,
  };
  componentWillMount() {
    this.commitdata = commits.reverse();
  }

  commitdata;

  render() {
    return (
      <div className="main-grid">
        <div className="header">
          <div className="name">Luis Revilla</div>{" "}
          <div
            onClick={() => {
              copyToClipboard("luisrevillameza@gmail.com");
              this.setState({ copyMail1: "Got it!", btn1Success: true }, st => {
                setTimeout(() => {
                  this.setState({ btn1Success: false }, () => {
                    this.setState({ copyMail1: "Copy email" });
                  });
                }, 700);
              });
            }}
            className={
              this.state.btn1Success ? "copy-btn btn-success" : "copy-btn"
            }
          >
            <div>{this.state.copyMail1}</div>
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
        >
          <div className="commits-title">
            <div>Check out my latest commits!</div>
          </div>
          <div className="commits-intro">
            <div>
              I wrote a bash script that updates this list every time I commit changes to my local repositories. This way you can see what I'm up to
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
        <div className="footer" >
          <div className="footer-title">Let's get to work.</div>
          <div className="footer-text">
          <div>Read my <span>bio</span> or <span><a className="cv" href="https://luisrevillam.github.io/cv.pdf">download my CV</a></span> to learn more about me. We can also grab coffee anytime!</div>
          </div>
          <div onClick={() => {
            copyToClipboard("luisrevillameza@gmail.com");
            this.setState({ copyMail2: "Got it!", btn2Success: true }, st => {
              setTimeout(() => {
                this.setState({ btn2Success: false }, () => {
                  this.setState({ copyMail2: "Copy email" });
                });
              }, 700);
            });
          }} className={
            this.state.btn2Success ? "copy-btn btn-success" : "copy-btn"
          }><div>{this.state.copyMail2}</div></div>
          <div className="footer-footer">
          Contact me if you need someone who knows JS, loves to learn and has potential to lead and teach others.
          <div>Made with care by Luis Revilla (2018).</div></div>


        </div>
      </div>
    );
  }
}

export default App;
