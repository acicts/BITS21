import { GitHub, Instagram } from "@material-ui/icons";
import React from "react";
import OCdata from "../../Data/OC.json";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      {OCdata.map((member, _) => {
        return (
          <div className="footer-contact">
            <span>{member.name}</span>
            <a href={member.github}>
              <GitHub />
            </a>
            <a href={member.insta}>
              <Instagram />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FooterContact;
