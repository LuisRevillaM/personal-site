import React, { Component } from "react";
import { withRouter } from "react-router";

class ScrolToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(ScrolToTop);

export const copyToClipboard = str => {
  const el = document.createElement("textarea"); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

export class CopyButton extends Component {
  state = {
    copy: "Copy email",
    success: false
  };

  render() {
    return (
      <div
        onClick={() => {
          copyToClipboard("luisrevillameza@gmail.com");
          this.setState({ copy: "Got it!", success: true }, st => {
            setTimeout(() => {
              this.setState({ success: false }, () => {
                this.setState({ copy: "Copy email" });
              });
            }, 700);
          });
        }}
        className={this.state.success ? "copy-btn btn-success" : "copy-btn"}
      >
        <div>{this.state.copy}</div>
      </div>
    );
  }
}

export const MailButton = props => {
  return (
    <a href="mailto:luisrevillameza@gmail.com" className="copy-btn">
      <div>Email me!</div>
    </a>
  );
};
