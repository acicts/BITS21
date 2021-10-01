import React from "react";
import { useLocation } from "react-router-dom";
import FooterContact from "./FooterContact";
import { NavLink, useParams } from "react-router-dom";
import "../../App.css";

const Footer = ({}) => {
  const location = useLocation();
  let { id } = useParams();
  return (
    location.pathname !== "/tasks" && location.pathname !== "/task/:id" && (
      <footer>
        <div className="content">
          <div className="about">
            <p className="answer">
            BITS is the First-Ever Task-Based Intraschool ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT
            </p>
            < FooterContact />
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
           <div className="footer-nav">
           <div className="footer-nav">
            <a href="https://acicts.github.io/bits-official/">BITS '18</a>
            <a href="https://acicts.github.io/BITS19/">BITS '19</a>
            <a href="https://acicts.github.io/BITS20/index.html">BITS '20</a>
          </div>
     </div>
          <span id="copyrights">Copyright Reserved. ACICTS© 2021 </span>
        </div>
      </footer>
    )
  );
};

export default Footer;
