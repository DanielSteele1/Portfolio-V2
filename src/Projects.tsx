import React, { JSX } from 'react';
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SiCplusplus, SiMongodb, SiOpengl, SiTypescript } from 'react-icons/si';
import { GoLinkExternal } from "react-icons/go";


type Tags = JSX.Element;
import { motion } from "motion/react"

interface ProjectCardProps {

    title: string;
    mediaType?: 'image' | 'youtube'; // either image, or youtube link.
    youtubeId?: string; // only required if mediaType is 'youtube'
    src: string;
    tags: Tags[];
    description: string;
    link: string;
    github: string;
}

const Project_card: React.FC<ProjectCardProps> = ({ mediaType = 'image', youtubeId, title, src, tags, description, link, github }) => {

    const renderMedia = () => {
        switch (mediaType) {
            case 'youtube':
                return (
                    <iframe
                        className="project-video"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={title}
                        frameBorder="0"
                        allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                );
            case 'image':
            default:
                return typeof src === 'string' ? (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={title} loading="lazy" />
                    </a>
                ) : (
                    src
                );
        }
    };
    return (
        <motion.div
            className="projects"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="project-card">
                <div className={`project-image ${mediaType}`}>
                    {renderMedia()}
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
        </motion.div>
    )
}

function Projects() {
    return (
        <>
            <div className="projects" id="projects">

                <span className="section-heading"> Featured{"\u00A0"}<div className="gradient"> Projects</div>  </span>
                <span className="section-sub-heading">
                    My best and most impressive projects that i've been working on for the last year.
                    <br></br>
                    You can check them out via the links provided below.
                </span>

                <div className="project-container">

                    <Project_card
                        title="FocusDev"
                        description="FocusDev is a a utility app designed for developers.
                            It featuresa Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats, just to name a few.
                            Coded in JavaScript, React, Node.js & MongoDB. It also uses Bcrypt to securely store user data."
                        tags={[
                            <FaReact />,
                            <FaJs />,
                            <FaNodeJs />,
                            <SiMongodb />
                        ]}
                        src="FocusDev.png"
                        link="https://www.youtube.com/watch?v=tpSIyG0BEt0&t=2s"
                        github="https://github.com/DanielSteele1/FocusDev"
                    >

                    </Project_card>

                    <Project_card
                        title="Portfolio V1"
                        description="The first iteration of my portfolio website. (this website). 
                        It uses mainly Html/CSS & JS with some basic React work. 
                        In the first month alone it was visited by over 1k people,
                        and I've hosted it on Vercel in case you'd like to take a look."
                        src="PortfolioV1.png"
                        tags={[
                            <FaReact />,
                            <FaJs />,
                        ]}
                        link="https://danielsteeleportfoliov1.vercel.app"
                        github="https://github.com/DanielSteele1/DanielSteele1.github.io"

                    >

                    </Project_card>

                    <Project_card title="SkyCompass"
                        description=" Skycompass is a web-based application that allows users to monitor up-to-date weather patterns across the globe. 
                        It utilises multiple APIs to create a dashboard displaying weather maps, as well a forecast page that predicts weather for up to 7 days. 
                        Using MongoDB & Bcrypt hashing for security, users can favourite locations for a more personalised experience."
                        src="SkyCompass.png"
                        tags={[
                            <FaReact />,
                            <FaJs />,
                            <FaNodeJs />,
                            <SiMongodb />
                        ]}
                        link=""
                        github="https://github.com/DanielSteele1/SkyCompass"

                    >

                    </Project_card>

                    <Project_card title="EarthSim"
                        description="EarthSim is a project that I built in C++, using OpenGL and various libraries to create a 3D environment, with the goal of simulating our local system of planets, exposing me to core game development principles and GLSL."
                        src="EarthSim.png"
                        tags={[
                            <SiCplusplus />,
                            <SiOpengl />,
                        ]}
                        link=""
                        github="https://github.com/DanielSteele1/EarthSim"

                    >

                    </Project_card>

                    <Project_card
                        title="Coming Soon"
                        description="A new small frontend project im working on in order to show that I can quickly build and deploy real-world polished web applications. 
                        More details soon.."
                        src=""
                        tags={[
                            <FaReact />,
                            <SiTypescript />,
                        ]}
                        link=""
                        github=""

                    ></Project_card>

                </div>



            </div >
        </>
    )
}

export default Projects;