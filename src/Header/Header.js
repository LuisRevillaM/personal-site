import React, {Component} from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import copyToClipboard from "../Home/copy.js";

class Header extends Component {
  state={
    copyMail1: "Copy email",
    btn1Success: false
  }
  render(){
  return (<div className="header"><Link to="/">
    <div className="name">Luis Revilla</div></Link>{" "}
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
  </div>);}
}

export default Header;
