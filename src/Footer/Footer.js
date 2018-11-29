import React, { Component } from "react";
import "./Footer.css";
import copyToClipboard from "../Home/copy.js";


class CopyButton extends Component {
  state={
    copy: "Copy my email",
    success: false
  }


  render(){


    return (    <div
          onClick={() => {
            copyToClipboard("luisrevillameza@gmail.com");
            this.setState({ copy: "Got it!", success: true }, st => {
              setTimeout(() => {
                this.setState({ success: false }, () => {
                  this.setState({ copy: "Copy my email" });
                });
              }, 700);
            });
          }}
          className={
            this.state.success ? "copy-btn btn-success" : "copy-btn"
          }
        >
          <div>{this.state.copy}</div>
        </div>)


  }
}

const MailButton = (props)=>{
  return (
    <a

      href="mailto:luisrevillameza@gmail.com"
      className="copy-btn"

    >
      <div>Email me!</div>
    </a>

  );

}

class Footer extends Component {
  state = {
    copyMail2: "Copy email",
    btn2Success: false,
    device: "desktop"
  };

  componentDidMount(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

}
  }
  render() {
    let mail;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
mail = <MailButton/>;
} else {
  mail = <CopyButton/>;
}
    return (
      <div className="footer">
        <div className="footer-title">{this.props.title}</div>
        <div className="footer-text">
          {this.props.fo}<div></div>
        </div>
  {mail}
        <div className="footer-footer">

          <div className="footer-footer-bye"> <div>{this.props.home}</div>Made with care by Luis Revilla (2018)</div>
        </div>
      </div>
    );
  }
}

export default Footer;
