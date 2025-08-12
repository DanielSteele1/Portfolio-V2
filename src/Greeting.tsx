import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiArrowDown, HiDownload } from "react-icons/hi";

import GradientText from './GradientText.tsx'

type Props = {

    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Greeting = ({ handleDownloadAndView }: Props) => {
    return (
        <div className="greeting">

            <canvas className="greeting-canvas" id="top" />

            <div className="greeting-container">

                <span className="greeting-title" id="fade-in">
                    Hey, I'm&nbsp;
                    <GradientText
                        colors={["#e66465", "#9198e5", "#e66465", "#9198e5"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="greeting-title"
                    >
                        Daniel Steele
                    </GradientText>
                </span>

                <div id="fade-in2">
                    <TypeAnimation
                        className="greeting-subtitle"
                        sequence={[
                            ' Front End Developer',
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

                <span className="greeting-text-container" id="fade-in2">
                    <span className="greeting-text">
                        I'm currently looking for remote full-time employment in the UK.
                        If interested, feel free to reach out via <span className="highlight">LinkedIn</span> or <span className="highlight">Email</span>.
                    </span>
                </span>

                <div className="socials" id="fade-in3">
                    <span className="resume" onClick={handleDownloadAndView}>
                        <div className="social-item">
                            <HiDownload style={{
                                fontSize: '20px',
                                marginRight: '10px',
                                verticalAlign: 'center',
                                color: 'white',
                            }}
                            />
                            <span>View my CV</span>
                        </div>

                    </span>

                    <div className="social-item">
                        <span className="social-icon">
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
                        <span className="social-icon">
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

                <div className="scroll-down-container">
                    <a className="scroll-down" href="#about">
                        <span>Scroll or click to enter</span>
                        <HiArrowDown style={{ display: 'flex', fontSize: "30px", margin: '10px', justifyContent: 'center', verticalAlign: 'center' }} />
                    </a>
                </div>

            </div>
        </div>

    )

}

export default Greeting;

