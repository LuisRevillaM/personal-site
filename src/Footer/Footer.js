import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import copyToClipboard from "../Home/copy.js";

class Footer extends Component {
  state={
    copyMail2: "Copy email",
    btn2Success: false,
  }
  render(){

    return (    <div className="footer" >
          <div className="footer-title">Let's get to work.</div>
          <div className="footer-text">
          <div>Read my <span><Link to="/bio" className="cv">bio</Link></span> or <span><a className="cv" rel="noopener noreferrer" target="_blank" href="https://luisrevillam.github.io/cv.pdf">download my CV</a></span> to learn more about me. We can also grab coffee anytime!</div>
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


        </div>);

  }
}

export default Footer;
