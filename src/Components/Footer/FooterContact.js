import { GitHub, Instagram } from "@material-ui/icons";
import React from "react";
import OCdata from "../../Data/OC.json";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      {OCdata.map((member, _) => {
        return (
          <React.Fragment>
            <span>{member.name}</span>
            <a href={member.github}>
              <GitHub />
            </a>
            <a href={member.insta}>
              <Instagram />
            </a>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FooterContact;
