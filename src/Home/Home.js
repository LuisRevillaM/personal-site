import React, { Component } from "react";
import commits from "../commits.json";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import remote from "../assets/remote.png";
import react from "../assets/react.png";
import design from "../assets/design.png";
import dialogue from "../assets/dialogue.png";
import backend from "../assets/backend.png";

import "./Home.css";

const Fo = () => {
  return <div>Shoot me an email if you need a passionate web engineer!</div>;
};

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
        <Header />
        <div className="main">
          {" "}
          <div className="title">Software Engineer based in Austin, Texas.</div>
          <div className="sub-title">
            Specialized in full stack web and mobile applications.
          </div>{" "}
        </div>
        <div className="features">
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={backend} />
            <div className="feature-text">
              <span>Full-stack developer</span> with over 6 years of experience
              with technologies like Node.js, Ruby On Rails, or Golang. Can and
              will learn anything.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={react} />
            <div className="feature-text">
              6+ years working with{" "}
              <span>React, React Native, and TypeScript</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={remote} />
            <div className="feature-text">
              Over 7 years of <span>remote work</span> experience.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={design} />
            <div className="feature-text">
              <span>Rethinking systems and UX with AI</span>. Strong intuition
              for design.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={dialogue} />
            <div className="feature-text">
              Exceptional&nbsp;<span>communication skills</span>. Background in
              journalism and advertising.
            </div>
          </div>
        </div>
        <div className="commits">
          <div className="commits-title">
            <div>What I'm Working On</div>
          </div>
          <div className="commits-intro">
            <div>
              Currently working full-time as a Software Engineer at
              PolicyGenius, an insurance marketplace. Here are some of my recent
              side projects:
            </div>
          </div>
          <div className="commit-box">
            {this.commitdata.map((com, i) => {
              if (i >= this.state.limit) {
                return null;
              }
              let date = new Date(com.date);
              return (
                <div key={i} className="commit">
                  <div className="project-title">
                    {com.project}{" "}
                    {Date.now() < date.getTime() + 5 * 3600 * 1000 ? (
                      <div className="fresh">
                        <div>new!</div>
                      </div>
                    ) : null}
                  </div>
                  <div className="commit-message">
                    <span>Message:</span> "{com.commit}"
                  </div>
                  <div className="working-branch">
                    <span>On branch:</span> "{com.branch}"
                  </div>
                  <div className="git-remote">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={com.remote}
                    >
                      Github
                    </a>{" "}
                    <div className="commit-date">
                      <div>{com.date}</div>
                    </div>
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
        <Footer title="Let's grab a virtual coffee!" fo={<Fo />} />
      </div>
    );
  }
}

export default Home;
