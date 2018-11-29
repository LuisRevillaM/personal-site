import React, { Component } from "react";
import "./Footer.css";
import copyToClipboard from "../Home/copy.js";

class Footer extends Component {
  state = {
    copyMail2: "Copy email",
    btn2Success: false
  };
  render() {
    return (
      <div className="footer">
        <div className="footer-title">{this.props.title}</div>
        <div className="footer-text">
          {this.props.fo}<div></div>
        </div>
        <div
          onClick={() => {
            copyToClipboard("luisrevillameza@gmail.com");
            this.setState({ copyMail2: "Got it!", btn2Success: true }, st => {
              setTimeout(() => {
                this.setState({ btn2Success: false }, () => {
                  this.setState({ copyMail2: "Copy email" });
                });
              }, 700);
            });
          }}
          className={
            this.state.btn2Success ? "copy-btn btn-success" : "copy-btn"
          }
        >
          <div>{this.state.copyMail2}</div>
        </div>
        <div className="footer-footer">

          <div className="footer-footer-bye"> <div>{this.props.home}</div>Made with care by Luis Revilla (2018)</div>
        </div>
      </div>
    );
  }
}

export default Footer;
