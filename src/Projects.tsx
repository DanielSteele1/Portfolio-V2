import React, { JSX } from 'react';
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiEarthFill } from "react-icons/ri";
import { SiCplusplus, SiMongodb, SiOpengl } from 'react-icons/si';
import { GoLinkExternal } from "react-icons/go";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Tags = JSX.Element;
import Slider from "react-slick";


interface ProjectCardProps {

    title: string;
    src: string;
    tags: Tags[];
    description: string;
    link: string;
    github: string;
}

const Project_card: React.FC<ProjectCardProps> = ({ title, src, tags, description, link, github }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={src} loading="lazy" alt={title} />
            </div>

            <div className="project-information">
                <span className="project-title">
                    <div className="gradient">{title}</div>
                </span>

                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="project-text">{description}</div>

                <div className="project-buttons">
                    <div className="project-button">
                        <a className="live-button" href={link} target="_blank" rel="noopener noreferrer">
                            <GoLinkExternal style={{ fontSize: "20px" }} />
                            <span className="button-text">Live Project</span>
                        </a>
                    </div>

                    <div className="project-button">
                        <a className="github-button" href={github} target="_blank" rel="noopener noreferrer">
                            <LuGithub style={{ fontSize: "23px" }} />
                            <span className="button-text">Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Projects() {    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="projects">

                <span className="section-heading"> Featured{"\u00A0"}<div className="gradient"> Projects</div>  </span>
                <span className="section-sub-heading"> My best and most impressive projects that i've been working on for the last year. You can check them out via the links provided below. </span>

                <Slider className="project-container" {...settings}>

                    <div className="Project">
                        <Project_card
                            title="FocusDev"
                            description="FocusDev is primarily developed for developers to organise thier workload into one location. 
                        For example, if a developer has to handle a ticket, keep track of meetings or needs to copy paste code snippets over and over, they can add it here and keep on top of things.
                        Features include a Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats, local weather forecasts to name a few."
                            src="FocusDev.gif"
                            tags={[
                                <FaReact />,
                                <FaJs />,
                                <FaNodeJs />,
                                <SiMongodb />
                            ]}
                            link="https://github.com/DanielSteele1/UtilitiesApp"
                            github="https://github.com/DanielSteele1/UtilitiesApp"
                        >

                        </Project_card>
                    </div>

                    <div className="Project">
                        <Project_card title="Portfolio V1"
                            description="The first iteration of my portfolio website. (this website). 
                        It uses mainly Html/CSS & JS with some basic React work. 
                        In the first few months alone it got visited by over 1k people,
                        and I've hosted it on Vercel in case you'd like to take a look."
                            src="Portfolio.gif"
                            tags={[
                                <FaReact />,
                                <FaJs />,
                                <FaNodeJs />,
                                <SiMongodb />
                            ]}
                            link="https://github.com/DanielSteele1/UtilitiesApp"
                            github="https://github.com/DanielSteele1/UtilitiesApp"

                        >

                        </Project_card>

                    </div>


                    <div className="Project">

                        <Project_card title="SkyCompass"
                            description=" Skycompass is a web-based application that allows users to monitor up-to-date weather patterns across the globe. 
                        It utilises multiple APIs to create a dashboard displaying weather maps, as well a forecast page that predicts weather for up to 7 days. 
                        Using MongoDB & Bcrypt hashing for security, users can favourite locations for a more personalised experience."
                            src="SkyCompass.gif"
                            tags={[
                                <FaReact />,
                                <FaJs />,
                                <FaNodeJs />,
                                <SiMongodb />
                            ]}
                            link="https://github.com/DanielSteele1/UtilitiesApp"
                            github="https://github.com/DanielSteele1/UtilitiesApp"

                        >

                        </Project_card>
                    </div>

                    <div className="Project">

                        <Project_card title="EarthSim"
                            description="EarthSim is a project that I built in C++, using OpenGL and various libraries to create a 3D environment, with the goal of simulating our local system of planets, exposing me to core game development principles and GLSL."
                            src="EarthSim.gif"
                            tags={[
                                <SiCplusplus />,
                                <SiOpengl />,
                            ]}
                            link="https://github.com/DanielSteele1/UtilitiesApp"
                            github="https://github.com/DanielSteele1/UtilitiesApp"

                        >

                        </Project_card>

                    </div>
                </Slider >


            </div >
        </>
    )
}

export default Projects;