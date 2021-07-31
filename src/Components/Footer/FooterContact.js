import { GitHub, Instagram, YouTube, Facebook, Web } from "@material-ui/icons";
import React from "react";
import "../../App.css";

const FooterContact = () => {
  return (
    <div className="footer-contact">
      
       
         
        
            <a href='https://www.youtube.com/user/ACICTS'>
              <YouTube />
            </a>
        

          
            
            <a href='https://www.instagram.com/ac.icts/?hl=en'>
              <Instagram />
            </a>
         

         
       
            <a href='https://www.facebook.com/acicts/'>
              <Facebook />
            </a>
        

            <a href='https://github.com/acicts'>
              <GitHub />
            </a>


            <a href='https://acicts.lk/'>
              <Web />
            </a>
      
    </div>
  );
};

export default FooterContact;
