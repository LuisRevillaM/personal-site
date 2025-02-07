import React, { Component } from "react";
import commits from "../commits.json";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import remote from "../assets/remote.png";
import react from "../assets/react.png";
import design from "../assets/design.png";
import dialogue from "../assets/dialogue.png";
import backend from "../assets/backend.png";
import { CopyButton } from "../Reusable/Reusable.js";

import "./Home.css";

const Fo = () => {
  return (
    <div>
      Looking for a technically strong, product-and-outcome-oriented engineer?
      Shoot me an email.
    </div>
  );
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
            Specialized in full-stack web and mobile applications.
          </div>{" "}
        </div>
        <div className="features">
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={backend} />
            <div className="feature-text">
              <span>Full-stack</span>. Over 9 years of experience. Node.js, Ruby
              On Rails, Golang. Can and will learn anything.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={react} />
            <div className="feature-text">
              6 years working with <span>React and TypeScript</span>.
            </div>
          </div>
          <div className="feature">
            <img alt="feature icon" className="check-icon" src={remote} />
            <div className="feature-text">
              <span>Experienced remote worker</span>. Happy to come to the
              office if you're based in Austin!
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
            <div>What I'm working on</div>
          </div>
          <div className="commits-intro">
            <div>
              I'm a full-time Software Engineer at Policygenius, an insurance
              marketplace. In my free time, I am exploring the capabilities of
              state-of-the-art AI-assisted coding and AI-enabled applications.
            </div>
          </div>
          <div className="project-showcase">
            <div className="project-title">Project "Ramble"</div>
            <div className="project-description">
              My latest project is a voice-first chat application that
              transcribes voice notes, extracts discrete messages, and
              automatically categorizes them by topic for easy filtering. The
              app uses AI to identify tasks and organize conversations in a
              meaningful way.
            </div>
            <div className="video-placeholder">[Demo video coming soon]</div>
            <div className="project-nav">
              <div className="project-nav-button">←</div>
              <div className="project-nav-button">→</div>
            </div>
          </div>
        </div>
        <Footer title="Let's grab a virtual coffee!" fo={<Fo />} />
      </div>
    );
  }
}

export default Home;
