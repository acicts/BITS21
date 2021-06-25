import React from "react";
import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="about">
          <span className="question">What is ACICT BITS?</span>
          <p className="answer">
            ACICT BITS is for young anandians who wants to put thier skills to
            test, compete and show thier abilities. most importantly, bits is a
            community and a place to share what u know. learn what u didn’t know
            before.
          </p>
        </div>
        <div className="footer-nav">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/tasks">Tasks</Link>
          </span>
          <span>
            <Link to="/online-tests">Online Tests</Link>
          </span>
          <span>
            <Link to="/leaderboard">LeaderBoard</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
        <FooterContact />
        <span id="copyrights">copyright reserved. ACICT BITS © 2020 </span>
      </div>
    </div>
  );
};

export default Footer;
