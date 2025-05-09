import React from "react";

interface ProjectCardProps {

    title: string;
    src: string;
    tag: string;
    description: string;
    link: string;
    github: string;
}



const Project_card: React.FC<ProjectCardProps> = ({ title, src, tag, description, link, github }) => {

    return (
        <>
            <div className="project-image"> <img src={src} loading="lazy" /> </div>

            <span className="project-title"> <div className="gradient"> {title} </div> </span>

            <div className="project-text"> {description} </div>

            <div className="project-tags"> {tag} </div>

            <div className="project-buttons">

                <button className="Project-button"> <a href={link}> Live page </a> </button>
                <button className="Project-button"> <a href={github}> Github repo </a>  </button>

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
                        tag="Hello world"
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>

                </div>

                <div className="Project">
                    <Project_card
                        title="FocusDev"
                        description="hello world"
                        src="Portfolio.gif"
                        tag="Hello world"
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>


                </div>


                <div className="Project">


                    <Project_card
                        title="FocusDev"
                        description="hello world"
                        src="SkyCompass.gif"
                        tag="Hello world"
                        link="https://github.com/DanielSteele1/UtilitiesApp"
                        github="https://github.com/DanielSteele1/UtilitiesApp"

                    >

                    </Project_card>

                </div>

                <div className="Project">


                    <Project_card
                        title="FocusDev"
                        description="hello world"
                        src="EarthSim.gif"
                        tag="Hello world"
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