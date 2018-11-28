import React, { Component } from "react";
import check from "../assets/check.png";
import commits from "../commits.json";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js"
import "./Home.css";

class Home extends Component {
  state = {
    limit: 3,
    btn: "Show more",
    copyMail2: "Copy email",
    btn2Success: false,
  };
  componentWillMount() {
    this.commitdata = commits.reverse();
  }

  commitdata;

  render() {
    return (
      <div className="main-grid">
        <Header/>
        <div className="main">
          {" "}
          <div className="title">Software developer based in NYC.</div>
          <div className="sub-title">Specialized in UI engineering.</div>{" "}
        </div>
        <div className="features">
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
            <div className="feature-text">
              Author of code running on&nbsp;<span>thousands of devices</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
            <div className="feature-text">
              2+ years building UIs with&nbsp;<span>React & React Native</span>.
            </div>
          </div>{" "}
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
            <div className="feature-text">
              <span>Fullstack</span>. Proficient at bulding & deploying web
              services.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
            <div className="feature-text">
              Extraordinary&nbsp;<span>ability to learn</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
            <div className="feature-text">
              Strong&nbsp;<span>intuition for design</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={check} />
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
                    <a target="_blank" rel="noopener noreferrer" href={com.remote}>
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
    <Footer/>
      </div>
    );
  }
}

export default Home;
