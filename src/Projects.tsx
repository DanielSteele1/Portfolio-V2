import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiEarthFill } from "react-icons/ri";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

//import { Carousel } from 'primereact/carousel';

interface ProjectCardProps {

    title: string;
    src: string;
    tag: string;
    description: string;
    link: string;
    github: string;
}

// for future referance, figure out a way to add multiple tags without just declaring tag1, tag2 etc. There's gotta be a way.
// Also needed - make the description editable (need to put the highlight span in there to highlight text) & I need to 

const Project_card: React.FC<ProjectCardProps> = ({ title, src, tag, description, link, github }) => {

    return (
        <>
            <div className="project-image"> <img src={src} loading="lazy" /> </div>

            <div className="project-information">

                <span className="project-title"> <div className="gradient"> {title} </div> </span>

                <div className="project-tags"> {tag} </div>

                <div className="project-text"> {description} </div>

                <div className="project-buttons">

                    <div className="project-button"> <a className="live-button" href={link}> <RiEarthFill style={{ display: 'flex', fontSize: "25px", margin: '1px', verticalAlign: 'middle', color: '#' }} /> </a> </div>
                    <div className="project-button"> <a className="github-button" href={github}> <LuGithub style={{ display: 'flex', fontSize: "25px", margin: '1px', verticalAlign: 'middle' }} /> </a>  </div>

                </div>
            </div>
        </>
    )
}

function Projects() {

    return (

        <div className="projects">

            <span className="section-heading"> <div className="gradient">Projects</div> </span>
            <span className="section-sub-heading"> My best and most impressive projects that i've been working on for the last year. You can check them out via the links provided below. </span>

            <div className="project-container">

                <div className="Project">

                    <Project_card
                        title="FocusDev"
                        description="FocusDev is primarily developed for developers to organise thier workload into one location. 
                        For example, if a developer has to handle a ticket, keep track of meetings or needs to copy paste code snippets over and over, they can add it here and keep on top of things.
                        Features include a Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats, local weather forecasts to name a few."
                        src="FocusDev.gif"
                        tag=<FaReact style={{ color: ' #61dbfb', fontSize: '25px', fontStyle: 'bold' }} />
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"
                    >

                    </Project_card>

                </div>

                <div className="Project">
                    <Project_card
                        title="Portfolio V1"
                        description="The first iteration of my portfolio website. (this website). 
                        It uses mainly Html/CSS & JS with some basic React work. 
                        In the first few months alone it got visited by over 1k people,
                        and I've hosted it on Vercel in case you'd like to take a look."
                        src="Portfolio.gif"
                        tag=<FaReact style={{ color: ' #61dbfb', fontSize: '25px', fontStyle: 'bold' }} />
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>

                </div>


                <div className="Project">

                    <Project_card
                        title="SkyCompass"
                        description=" Skycompass is a web-based application that allows users to monitor up-to-date weather patterns across the globe. 
                        It utilises multiple APIs to create a dashboard displaying weather maps, as well a forecast page that predicts weather for up to 7 days. 
                        Using MongoDB & Bcrypt hashing for security, users can favourite locations for a more personalised experience."
                        src="SkyCompass.gif"
                        tag=<FaReact style={{ color: ' #61dbfb', fontSize: '25px', fontStyle: 'bold' }} />
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>

                </div>

                <div className="Project">

                    <Project_card
                        title="EarthSim"
                        description="EarthSim is a project that I built in C++, using OpenGL and various libraries to create a 3D environment, with the goal of simulating our local system of planets, exposing me to core game development principles and GLSL."
                        src="EarthSim.gif"
                        tag=<FaReact style={{ color: ' #61dbfb', fontSize: '25px', fontStyle: 'bold' }} />
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>

                </div>

            </div>

        </div>
    )
}

export default Projects;