import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { SiReaddotcv } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

const Greeting = () => {
    return (
        <div className="greeting">
            {/*<div className="greetings-image"> <img className="Sunglasses" src="public/Sunglasses_head.png" /> </div> */}
            <span className="greeting-title"> Hey, i'm{"\u00A0"}<span className="gradient"> Daniel Steele </span> </span>

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

            <span className="greeting-text-container">
                <span className="greeting-text">
                    I'm currently looking for remote full-time employment in the UK.
                    If interested, feel free to reach out via <span className="highlight">LinkedIn</span> or <span className="highlight">Email</span>.
                </span>
            </span>

            <div className="socials">
                <div className="social-resume">
                    <div className="social-item">
                        <span className="social-title">
                            <FaLocationArrow style={{
                                fontSize: '20px',
                                marginRight: '10px',
                                marginTop: '5px',
                                verticalAlign: 'center',
                                color: '#e66465',
                            }}
                            />
                        </span>
                        <span> View Resume </span>
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

        </div >
    )

}

export default Greeting;

