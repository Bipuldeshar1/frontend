
import React from "react"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../App.css";
export default function Footer(){
    return(
      
   <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> 
  
      </div>
      <p> &copy; 2021 Kothavada.com</p>
    </div>
    )
}