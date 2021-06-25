import { GitHub, Instagram } from "@material-ui/icons";
import React from "react";

const FooterContact = ({ name, gh, ig }) => {
  return (
    <div className="footer-contact">
      <span>{name}</span>
      <a href={`https://github.com/${gh}`}>
        <GitHub />
      </a>
      <a href={`https://instagram.com/${ig}`}>
        <Instagram />
      </a>
    </div>
  );
};

export default FooterContact;
