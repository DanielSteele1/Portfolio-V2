import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';
import { HiDownload } from "react-icons/hi";
import { FaCity, FaCode, FaLinkedin } from "react-icons/fa6";
import GitHubCalendar from 'react-github-calendar';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoMdPin } from 'react-icons/io';

type Props = {

    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Dashboard = ({ handleDownloadAndView }: Props) => {

    const theme = {
        dark: ["#171718ff", "#9443ff"],
        light: ["#ebf0ff", "#9443ff"],
    };

    return (

        <div className="main-container">

            <div className="socials">

                <div className="socials-top">
                    <img src="/Website_Pic.JPG" alt="Daniel Steele" />
                </div>

                <div className="socials-bottom">
                    <span className="dashboard-title"> Socials </span>

                    <div id="social-link">
                        <IoMdPin />
                        <span id="location"> 🇬🇧 Devon, United Kingdom  </span>
                    </div>

                    <a id="social-link" href="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                        <FaLinkedin />
                        <span> Linkedin </span>
                    </a>

                    <a id="social-link" href="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                        <LuGithub />
                        <span> Github </span>
                    </a>

                    <a id="social-link" href="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                        <MdEmail />
                        <span> Email </span>
                    </a>
                </div>
            </div>

            <div className="greeting">
                <div className="landing-area">

                    <span className="landing-header">

                        Hey! I'm <div id="highlight-name"> Daniel Steele </div>

                        <TypeAnimation
                            className='type-animation'
                            sequence={[
                                'Junior TypeScript Developer',
                                2000,
                                'Junior React Developer',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />

                    </span>

                    <div className="resume-reduced-container">

                        <div className="socials-reduced">

                            <a id="social-link" href="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                                <FaLinkedin />
                                <span> Linkedin </span>
                            </a>

                            <a id="social-link" href="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                                <LuGithub />
                                <span> Github </span>
                            </a>

                            <a id="social-link" href="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                                <MdEmail />
                                <span> Email </span>
                            </a>

                            <a id="social-link" href="/Daniel_Steele_Frontend_Developer_CV.pdf" onClick={handleDownloadAndView}>
                                <HiDownload />
                                <span> Resume </span>
                            </a>
                        </div>
                    </div>

                    <div className="landing-status">
                        <span id="status-text"> <FaCity /> Open to opportunities </span>
                        <span id="status-text"> <FaCode /> Current Project: Reddit Stats Dashboard </span>
                    </div>

                    <span className="dashboard-title"> Introduction </span>

                    <div className="landing-paragraph">
                        I'm a junior frontend developer based in the UK, and specializing in TypeScript and React.
                        I'm currently looking for new opportunities to grow my skills and contribute to exciting projects.
                    </div>

                    <div className="landing-grid">
                        <div id="commit-graph">
                            <GitHubCalendar username="danielsteele1" theme={theme} />
                        </div>
                    </div>

                    <span className="dashboard-title"> Sections </span>
                </div>

                <div className="dashboard-container">

                    <div className="dashboard">

                        <div className="dashboard-component component-about" onClick={() => window.location.href = '/About'}>
                            <div className="component-about">
                                <div className="component-info" id="component-info-about">
                                    <span className="component-title"> About me 💻 </span>
                                    <span className="component-description"> Find out more about me. </span>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard-component component-projects" onClick={() => window.location.href = '/Projects'}>
                            <div className="component-info">
                                <span className="component-title">
                                    Projects 🍵</span>
                                <span className="component-description"> My collection of personal web projects. </span>
                            </div>
                        </div>

                        <div className="dashboard-component component-skills" id="skills-bg" onClick={() => window.location.href = '/Skills'}>

                            <div className="component-info">
                                <span className="component-title"> Skills 🏗️ </span>
                                <span className="component-description"> A list of technologies I'm skilled with. </span>
                            </div>

                        </div>

                        <div className="dashboard-component component-blog" onClick={() => window.location.href = '/Blog'}>
                            <div className="component-info">
                                <span className="component-title"> Blog 📰 </span>
                                <span className="component-description"> Write-ups of my projects & more. </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard;

