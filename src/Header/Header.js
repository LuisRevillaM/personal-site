import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { CopyButton } from "../Reusable/Reusable.js";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="name">Luis Revilla</div>
        </Link>{" "}
        <CopyButton />
      </div>
    );
  }
}

export default Header;
