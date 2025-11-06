import "./App.css";
import { motion } from "motion/react"

import "/node_modules/flag-icons/css/flag-icons.min.css";
import Breadcrumbs from "./Breadcrumbs";

function AboutMe() {

    return (
        <motion.div
            className="about"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

            <div className="page-nav">

                <div className="breadcrumbs">
                   <Breadcrumbs />
                </div>
                
            </div>
            <div className="section-heading"> About <div id="highlight-name"> Me </div> 💻 </div>
            <div className="banner">
                <img src="Picture of the Bay -website.jpg"></img>
                <span id="image-description"> Picture of Torbay, Devon, United Kingdom - Taken by myself in late 2023</span>
            </div>

            <div className="About-text">
                <div className="About-paragraph">
                    <span className="About-para-intro">
                        Hi! I'm Daniel Steele, a Front-end Developer from the UK
                        <span id="emoji" className="fi fi-gb"> </span>
                    </span>

                    <span className="About-paragraph-text">
                        I have a passion for creating beautiful and functional websites and web apps alike.
                        I have a strong interest in working with <a id="text-link" href="https://www.typescriptlang.org/"> TypeScript</a> and <a id="text-link" href="https://react.dev/">ReactJS</a>, and I'm constantly learning.
                        Although most of my projects are full-stack related I've been focusing on frontend development and creating clean UI, as I love to experiment with CSS.
                    </span>

                    <div className="About-paragraph-text">
                        <div className="highlight-1">
                            I'm currently looking for local & remote opportunities, so if your a hiring manager and like what you see - feel free to reach out!
                        </div>
                    </div>

                </div>

                <div className="About-paragraph">

                    <span className="About-paragraph-text">
                        My passion lies with front end development - ever since I was 16 I wanted to learn how to develop for the web.
                        Now, at 23 and after graduating from the <a id="text-link" href="https://www.plymouth.ac.uk"> University of Plymouth </a> in 2024,
                        I'm creating front end and full stack web apps, striving to improve with each one.
                    </span>
                </div>

                <div className="About-paragraph">
                    <span className="About-para-title"> My Hobbies & Personal Life </span>

                    <span className="About-paragraph-text">
                        Outside of web development - I spend most of my time keeping up to date with tech related news,
                        applying my knowledge of hardware to build computers as a hobby and playing PC games with friends.
                        Some of favourite games i've played in the past are <a id="text-link" href="https://www.nomanssky.com"> No Mans Sky </a> & both <a id="text-link" href="https://unknownworlds.com/en/news?game=subnautica"> Subnautica games. </a>
                    </span>
                </div>

                <div className="About-paragraph">
                    <span className="About-para-title"> What am i up to right now? </span>

                    <span className="About-paragraph-text">
                        Right now, i'm making my own projects in order to constantly iterate on my skills to become more skilled as a developer.
                        Some of the new technologies I've been using recently include GraphQL and libraries such as React-DnD and GSAP.
                    </span>

                    <span className="About-paragraph-text"> I'm also working on a few projects, including Orbit - a recently released notes app, a reddit based - and a lot more planned. </span>

                </div>
            </div>
            <div className="about-footer">
                <img src="Plymouth_Hoe.jpg"></img>
                <span id="image-description"> Picture of Plymouth Hoe, Devon, United Kingdom - Where I studied and graduated.</span>
            </div>
        </motion.div >
    )
}

export default AboutMe;