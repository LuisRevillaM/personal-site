import React, { Component } from "react";
import "./Footer.css";
import {
  CopyButton,
  MailButton,
  copyToClipboard
} from "../Reusable/Reusable.js";

class Footer extends Component {
  state = {
    copyMail2: "Copy email",
    btn2Success: false,
    device: "desktop"
  };

  render() {
    let mail;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      mail = <MailButton />;
    } else {
      mail = <CopyButton />;
    }
    return (
      <div className="footer">
        <div className="footer-title">{this.props.title}</div>
        <div className="footer-text">
          {this.props.fo}
          <div />
        </div>
        {mail}
        <div className="footer-footer">
          <div className="footer-footer-bye">
            {" "}
            Made with care by Luis Revilla (2018)
          </div>
          <div className="back-home">{this.props.home}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
