import { TypeAnimation } from 'react-type-animation';
import { LuGithub, LuMouse } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";

const Greeting = () => {
    return (
        <div className="greeting" id="top">

            <div className="greeting-container">
                <span className="greeting-title" id="fade-in"> Hey, I'm{"\u00A0"}<span className="gradient"> Daniel Steele </span> </span>

                <div id="fade-in2">
                    <TypeAnimation
                        className="greeting-subtitle"
                        sequence={[
                            ' Full Stack Developer',
                            3000,
                            ' React Developer',
                            3000,
                            ' Tech Enthusiast',
                            3000,
                        ]}
                        speed={50}
                        wrapper="span"
                        repeat={Infinity}
                    />
                </div>

                <span className="greeting-cta">
                    <span className="gradient" id="fade-in1">
                        <a href="https://github.com/DanielSteele1/FocusDev"> Currently working on FocusDev! Check it out here.</a>
                    </span>
                </span>

                <span className="greeting-text-container" id="fade-in2">
                    <span className="greeting-text">
                        I'm currently looking for remote full-time employment in the UK.
                        If interested, feel free to reach out via <span className="highlight">LinkedIn</span> or <span className="highlight">Email</span>.
                    </span>
                </span>

                <div className="socials" id="fade-in3">
                    <div className="resume">
                        <div className="social-item">
                            <HiDownload style={{
                                fontSize: '20px',
                                marginRight: '10px',
                                verticalAlign: 'center',
                                color: '#e66465',
                            }}
                            />
                            <span>View Resume</span>
                        </div>

                    </div>

                    <div className="social-item">
                        <span className="social-title">
                            <a href="https://www.linkedin.com/in/daniel-steele-b06443198" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin id="socialHover" style={{
                                    fontSize: '30px',
                                    margin: '10px',
                                    verticalAlign: 'center',
                                }}
                                />
                            </a>
                        </span>
                    </div>
                    <div className="social-item">
                        <span className="social-title">

                            <a href="https://github.com/DanielSteele1" target="_blank" rel="noopener noreferrer">
                                <LuGithub id="socialHover" style={{
                                    fontSize: '30px',
                                    margin: '10px',
                                    verticalAlign: 'center',

                                }}
                                />
                            </a>
                        </span>

                    </div>
                </div>

            </div>
        </div>

    )

}

export default Greeting;

