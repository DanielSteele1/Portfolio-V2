import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { SiReaddotcv } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

const Greeting = () => {
    return (
        <div className="greeting">
            <div className="greetings-image"> <img className="Sunglasses" src="public/Sunglasses_head.png" /> </div>
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

            <div className="socials">

                <div className="social-item">
                    <span className="social-title">
                        <SiReaddotcv style={{
                            fontSize: '30px',
                            margin: '10px',
                            color: 'white',

                        }}
                        />
                    </span>
                </div>

                <div className="social-item">
                    <span className="social-title">
                        <a href="https://www.linkedin.com/in/daniel-steele-b06443198" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin style={{
                                fontSize: '30px',
                                margin: '10px',
                                color: ''
                            }}
                            />
                        </a>
                    </span>
                </div>
                <div className="social-item">
                    <span className="social-title">

                        <a href="https://github.com/DanielSteele1" target="_blank" rel="noopener noreferrer">
                            <LuGithub style={{
                                fontSize: '30px',
                                margin: '10px',

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

