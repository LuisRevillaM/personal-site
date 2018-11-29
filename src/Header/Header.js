import React, {Component} from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {CopyButton, MailButton, copyToClipboard} from "../Reusable/Reusable.js";


class Header extends Component {
  render(){
    let mail;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mail = <MailButton/>;
    } else {
    mail = <CopyButton/>;
    }
  return (<div className="header"><Link to="/">
    <div className="name">Luis Revilla</div></Link>{" "}
    {mail}
  </div>);}
}

export default Header;
