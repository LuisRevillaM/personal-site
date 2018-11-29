import React, { Component } from "react";
import { Link } from "react-router-dom";
import check from "../assets/check.png";
import commits from "../commits.json";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import plat from "../assets/plat.png";
import react from "../assets/react.png";
import design from "../assets/design.png";
import dialogue from "../assets/dialogue.png";
import learn from "../assets/learn.png";
import backend from "../assets/backend.png";

import "./Home.css";

const Fo = ()=>{
  return (    <div>
        Read my{" "}
        <span>
          <Link to="/bio" className="cv">
            bio
          </Link>
        </span>{" "}
        or{" "}
        <span>
          <a
            className="cv"
            rel="noopener noreferrer"
            target="_blank"
            href="https://luisrevillam.github.io/cv.pdf"
          >
            download my CV
          </a>
        </span>{" "}
        to learn more about me. We can also grab coffee anytime!
      </div>);
}

class Home extends Component {
  state = {
    limit: 3,
    btn: "Show more",
    copyMail2: "Copy email",
    btn2Success: false,
  };
  componentWillMount() {

    this.commitdata = commits.slice();
    this.commitdata.reverse();
  }

  commitdata;

  render() {
    return (
      <div className="main-grid">
        <Header/>
        <div className="main">
          {" "}
          <div className="title">Software developer based in NYC.</div>
          <div className="sub-title">I specialize in UI engineering.</div>{" "}
        </div>
        <div className="features">
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={plat} />
            <div className="feature-text">
              Author of code running on&nbsp;<span>thousands of devices</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={react} />
            <div className="feature-text">
              2+ years building UIs with&nbsp;<span>React & React Native</span>.
            </div>
          </div>{" "}
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={backend} />
            <div className="feature-text">
              <span>Full-stack</span>. Proficient at building & deploying web
              services.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={learn} />
            <div className="feature-text">
              Extraordinary&nbsp;<span>ability to learn</span>.

            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={design} />
            <div className="feature-text">
              Strong&nbsp;<span>intuition for design</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={dialogue} />
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
              let date = new Date(com.date);
              return (
                <div className="commit">
                  <div className="project-title">{com.project} { Date.now() < (date.getTime() + 4*3600*1000 ) ? <div className="fresh"><div>new!</div></div> : null }</div>
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
                this.setState({ limit: 10, btn: "Show less" });
              } else if (this.state.limit === 10) {
                this.setState({ limit: 3, btn: "Show more" });
              }
            }}
          >
            <div>{this.state.btn}</div>
          </button>
        </div>
    <Footer title="Let's get to work." fo={<Fo/>}/>
      </div>
    );
  }
}

export default Home;
