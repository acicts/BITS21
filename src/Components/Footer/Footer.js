import React from "react";
import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer>
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
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/online-tests">Online Tests</Link>
          <Link to="/leaderboard">LeaderBoard</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <FooterContact />
        <span id="copyrights">copyright reserved. ACICT BITS © 2020 </span>
      </div>
    </footer>
  );
};

export default Footer;
