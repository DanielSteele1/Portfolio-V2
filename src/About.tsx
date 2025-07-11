import "./App.css";
import { GoPerson } from 'react-icons/go';
import { RiTimeLine } from "react-icons/ri";
import { IoGameController } from 'react-icons/io5';
import { motion } from "motion/react"
import { FaGraduationCap } from "react-icons/fa";
import { LuGraduationCap, LuHeadphones, LuLaptop } from "react-icons/lu";

function AboutMe() {

    return (

        <motion.div
            className="projects"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

            <div className="about" id="about">

                <span className="section-heading"> About{"\u00A0"}<div className="gradient"> Daniel Steele</div></span>


                <div className="About-image-container">
                    <img className="About-img" src="Website_Pic.JPG" />

                </div>

                <div className="About-status-container">
                    <div className="About-status">
                        <div className="status-icon">
                            <LuLaptop style={{ color: '#e66465', display: 'inline-flex', verticalAlign: 'middle', fontSize: '23px' }} />
                        </div>
                        <div>Currently Working on: </div> <span className="gradient"> FocusDev </span>
                    </div>

                    <div className="About-status">
                        <div className="status-icon">
                            <LuGraduationCap style={{ color: '#e66465', display: 'inline-flex', verticalAlign: 'middle', fontSize: '23px' }} />
                        </div>
                        <div> Currently learning : </div> <span className="gradient"> TailwindCSS </span>
                    </div>

                    <div className="About-status">
                        <div className="status-icon">
                            <LuHeadphones style={{ color: '#e66465', display: 'inline-flex', verticalAlign: 'middle', fontSize: '23px' }} />
                        </div>
                        <div> Current Music Obsession: </div> <span className="gradient"> Lo-Fi </span>
                    </div>

                </div>

                <div className="About-text">

                    <div className="About-paragraph">

                        <span className="About-para-title"> <GoPerson id="about-icon" /> <span className="gradient"> About Me </span> </span>

                        <span className="About-paragraph-text">
                            I'm a 23-year-old Full Stack Developer from the UK, with a passion for creating beautiful and functional websites and web apps alike.
                            I have a strong interest in working with TypeScript and React, (which I used to code this website) and I'm constantly learning.
                            <span className="highlight-1"> Although most of my projects are full-stack related I've been focusing on frontend development, as I love to experiment with CSS.</span>

                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <RiTimeLine id="about-icon" /> <span className="gradient"> My Journey </span> </span>

                        <span className="About-paragraph-text">
                            My journey began when I was 16, when I learnt about the existence of HTML, CSS & JavaScript. It fascinated me that I could use DevTools to
                            go into any website's code and see how it was written. After that, I made a choice to go into the web development industry - and never looked back.
                            <span className="highlight-1"> In 2021 I completed a BTEC in Computing, and in 2024 I graduated with a BSc in Computer Science from the University of Plymouth. </span>
                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <IoGameController id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> My Hobbies & Personal Life </span> </span>

                        <span className="About-paragraph-text">
                            I'm an avid techie - I spend most of my time tinkering with new technologies, even outside of web development. <br></br>I like to build computers as a hobby,
                            and keep up to date with the latest tech news. I also enjoy single-player games, such as <span className="highlight-1"> 'The Elder Scrolls' </span> series, and binge watch movies like <span className="highlight-1"> 'The Lord of the Rings'. </span>
                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <FaGraduationCap id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> What I'm doing now </span> </span>

                        <span className="About-paragraph-text">
                            Today, after graduating last year, I'm making my own projects and constantly evolving my frontend and backend skills.
                            Some of the new technologies I've been looking into include <span className="highlight-1">GraphQL and libraries like React-DnD and GSAP.</span>
                            <br></br>
                            <br></br>
                            <span className="gradient" id="para-finish">I'm also working on a few projects, including this website, my blog, FocusDev and more.  </span>
                        </span>
                    </div>
                </div>


            </div>
        </motion.div>

    )
}

export default AboutMe;