import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import "./Bio.css";

class Bio extends Component {
  render() {
    return (
      <div className="bio-grid">
        <Header />
        <div className="top-left">
          <div className="bio-title">Bio</div>
          <div className="bio-text1">
            Born in Venezuela (1989). Took a major in electronic engineering but,
            in the end, my passion for sports became a career in digital and
            traditional media. I was lucky to call "going to the stadium and
            writing about it" my job. My articles were acknowledged by actual
            legends in Venezuelan sports media; then I got to work with them. I
            also collaborated with professional soccer coaches and scouts around
            the world, who appreciated my eye for the tactical side of the game.
            By 2014 my country had started its rapid descent into total chaos,
            so I joined the millions who have left in recent years.
            I moved to Argentina, a strong hub for sports broadcasting in
            South America.</div>
            <div className="bio-text1">

            In late 2015, a friend of mine had a compelling idea for a consumer
            app. I started collaborating with him on the brand side of things
            but, at that stage, what the project lacked was more programmers. So
            I decided to give it a try. I had coded in college after all. C and
            low level stuff, but still. I sat down to learn the modern web
            stack.

          </div>
        </div>
        <div className="top-right" ></div>
        <div className="bottom-left" />
        <div className="bottom-right">
          <div className="bio-text2">
          I then built the frontend of our MVP, in time to apply for an
          important startup accelerator in South America. I wrote the
          application form and we were admitted (Startup Chile Generation
          16).
            I left the company for personal reasons by the end of 2017. You
            could say I was falling in love with programming as I was falling in
            love with my wife, an American woman then living in Argentina. Last
            March (2018) she found a new job in New York City, so we moved here and
            got married a couple months after.
            </div><div className="bio-text2">

            My most recent project is an audio newsletter app for the most important radio personality in Venezuela.
            The system is composed by a Node backend, a React web client to create newsletters and a React Native app for end users.

            The app is already running on thousands of devices.

            In early November (2018), I finally received authorization to work in the US.

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bio;
