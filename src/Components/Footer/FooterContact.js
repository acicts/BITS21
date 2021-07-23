import { GitHub, Instagram, YouTube, Facebook } from "@material-ui/icons";
import React from "react";
import OCdata from "../../Data/OC.json";
import "../../App.css";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      
       
         
        
            <a href='#'>
              <YouTube />
            </a>
        

          
            
            <a href='#'>
              <Instagram />
            </a>
         

         
       
            <a href='#'>
              <Facebook />
            </a>
        

            <a href='#'>
              <GitHub />
            </a>
         
          
      
    </div>
  );
};

export default FooterContact;
