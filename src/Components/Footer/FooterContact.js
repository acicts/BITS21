import { GitHub, Instagram, YouTube, Facebook } from "@material-ui/icons";
import React from "react";
import OCdata from "../../Data/OC.json";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      
       
          <div className="footer-contact">
            <span>ACICTS</span>
            <a href='#'>
              <YouTube />
            </a>
          </div>

          <div className="footer-contact">
            <span>ACICTS</span>
            <a href='#'>
              <Instagram />
            </a>
          </div>

          <div className="footer-contact">
            <span>ACICTS</span>
            <a href='#'>
              <Facebook />
            </a>
          </div>

          <div className="footer-contact">
            <span>ACICTS</span>
            <a href='#'>
              <GitHub />
            </a>
          </div>
          
      
    </div>
  );
};

export default FooterContact;
