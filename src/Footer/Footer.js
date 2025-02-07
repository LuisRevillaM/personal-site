import React, { Component } from "react";
import "./Footer.css";
import { CopyButton, MailButton } from "../Reusable/Reusable.js";

class Footer extends Component {
  state = {
    copyMail2: "Copy email",
    btn2Success: false,
    device: "desktop",
  };

  render() {
    return (
      <div className="footer">
        <div className="footer-title">{this.props.title}</div>
        <div className="footer-text">
          {this.props.fo}
          <div />
        </div>
        <CopyButton />
        <div className="footer-footer">
          <div className="footer-footer-bye">
            {" "}
            Made with care by Luis Revilla (2025)
          </div>
          <div className="back-home">{this.props.home}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
