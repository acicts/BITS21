import React from "react";
import { useLocation } from "react-router-dom";
import FooterContact from "./FooterContact";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/tasks" && (
      <footer>
        <div className="content">
          <div className="about">
            <p className="answer">
            BITS is The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT
            </p>
          </div>
          <div className="footer-nav">
          <NavLink
          className="menuButton"
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="menuButton"
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Tasks
        </NavLink>
        <NavLink
          className="menuButton"
          to="/onlinetest"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Online Tests
        </NavLink>
        <NavLink
          className="menuButton"
          to="/leaderboard"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          LeaderBoard
        </NavLink>
        <NavLink
          className="menuButton"
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Contact
        </NavLink>
          </div>
          <FooterContact />
          <span id="copyrights">copyright reserved. ACICT BITS © 2021 </span>
        </div>
      </footer>
    )
  );
};

export default Footer;
