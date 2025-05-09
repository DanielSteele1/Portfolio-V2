import React from "react";
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() { 

    return (

        <div className="footer">
            
            <div className="footer-item">
                <span> Daniel Steele </span>
            </div>



             <div className="footer-item">
                <div className="footer-socials"> 
                    <span className="footer-title">  </span>
                    <span className="footer-title"> <IoLogoLinkedin style={{ fontSize: '30px', paddingLeft: '10px'}} /> </span>
                    <span className="footer-title"> <LuGithub style={{ fontSize: '30px', paddingLeft: '10px'}} /> </span>
                </div>
            </div>


        </div>
    )
 }

 export default Footer;