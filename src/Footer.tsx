import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiCoffeeCup } from "react-icons/ci";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <div className="footer">

            <div className="footer-item">
                <span className="gradient">Daniel Steele ©{currentYear} </span>
            </div>

            <div className="footer-item">
                <span className="gradient"> Made with TypeScript , React & lots of coffee
                    <CiCoffeeCup style={{color: '#e66465', display: 'inline-flex', margin: '10px', verticalAlign: 'middle', fontSize: '25px' }} />
                </span>
            </div>

            <div className="footer-item">
                <div className="footer-socials">
                    <span className="footer-icon"> <a href="https://www.linkedin.com/in/daniel-steele-b06443198"><IoLogoLinkedin style={{ fontSize: '30px', paddingLeft: '10px' }} /></a> </span>
                    <span className="footer-icon">  <a href="https://github.com/DanielSteele1"> <LuGithub style={{ fontSize: '30px', paddingLeft: '10px' }} /> </a></span>
                </div>
            </div>

        </div>
    )
}

export default Footer;