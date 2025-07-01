import "./App.css";
import { GoPerson } from 'react-icons/go';
import { RiTimeLine } from "react-icons/ri";
import { IoGameController } from 'react-icons/io5';
import { motion } from "motion/react"
import { FaGraduationCap } from "react-icons/fa";

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
                    <img className="About-img" src="Daniel_Steele.jpg" />
                </div>

                <span className="section-sub-heading"> A little bit about me, my journey and my hobbies.</span>

                <div className="About-text">

                    <div className="About-paragraph">

                        <span className="About-para-title"> <GoPerson id="about-icon" /> <span className="gradient"> About Me </span> </span>

                        <span className="About-paragraph-text">
                            I'm a 23 year old Full Stack Developer from the UK, with a passion for creating beautiful and functional websites and web apps alike.
                            I have a strong interest in working with TypeScript and React, (which is what I used to code this website) and I'm constantly learning.
                            <span className="highlight-1">Although most of my projects are Full-Stack related I've been focusing on Frontend development, as I love to mess around with CSS.</span>

                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <RiTimeLine id="about-icon" /> <span className="gradient"> My Journey </span> </span>

                        <span className="About-paragraph-text">
                            My journey began when I was 16, when I learnt of the existance of HTML, CSS & JS. It fasinated me that I could use DevTools to
                            go into any website's code and see how it was written. After that, I made a choice to go into the web-dev industry - and never looked back.
                            <span className="highlight-1"> In 2021 I completed a BTEC in Computing, and in 2024 I graduated with a BSc in Computer Science from the University of Plymouth. </span>
                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <IoGameController id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> My Hobbies & Personal Life </span> </span>

                        <span className="About-paragraph-text">
                            Im a avid techie - I spend most of my time tinkering with new technologies, even outside of web development. <br></br>I like to build computers as a hobby,
                            & keep up to date with the latest tech news. I also enjoy single-player games, such as <span className="highlight-1"> 'The Elder Scrolls' </span> series, and binge watching movies like <span className="highlight-1"> 'The Lord of the Rings'. </span>
                        </span>
                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <FaGraduationCap id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> What i'm doing now </span> </span>

                        <span className="About-paragraph-text">
                          Today, After graduating last year, i'm making my own projects and constantly evolving my frontend and backend skills. 
                          Some of the new technologies i've been looking into include include <span className="highlight-1">GraphQL and libraries like React-DnD & GSAP.</span> 
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