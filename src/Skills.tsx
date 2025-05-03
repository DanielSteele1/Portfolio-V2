import React, { useState } from "react";
import { SiReact } from "react-icons/si";
import { LuPalette } from "react-icons/lu";
import { FaServer } from "react-icons/fa";
import { TbBrandGraphql } from "react-icons/tb";
import LinearProgress from '@mui/material/LinearProgress';

function Skills() {

    const [active, setActive] = useState(0);
    //diff pages
    const SkillSection = ["Frontend", "Backend", "Other"];
    const icons = [<LuPalette style={{marginRight: '10px'}} />, <FaServer style={{marginRight: '10px'}} />, < TbBrandGraphql style={{marginRight: '10px',}}/>]

    return (

        <div className="skills">

            <span className="section-heading">My{"\u00A0"}<span className="gradient">Skills</span> </span>

            {/* map the tabs to create a button for each item in array. 
            once pressed, setActive(index) updates the tab to the corrosponding section.*/}
            <div className="skills-tabs">
                {SkillSection.map((section, index) => (

                    <button
                        key={section}
                        className={active === index ? "active" : ""}
                        onClick={() => setActive(index)}
                    >
                        {icons[index]}
                        {section}
                    </button>
                ))}
            </div>

            <div className="skills-container">

                {active === 0 &&
                    <div className="Frontend-skills">

                        <div className="skill-item">
                            <span className="skills-title"> HTML/CSS </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> JavaScript </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> React </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> MatUI </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> Figma </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                    </div>
                }

                {active === 1 &&
                    <div className="Backend-skills">

                        <div className="skill-item">
                            <span className="skills-title"> MongoDB </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> NodeJS </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>



                    </div>
                }

                {active === 2 &&
                    <div className="Other">

                        <div className="skill-item">
                            <span className="skills-title"> REST API & GraphQL </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> Git </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />

                        </div>

                        <div className="skill-item">
                            <span className="skills-title"> REST API & GraphQL </span>
                            <SiReact />
                            <LinearProgress variant="determinate" value={90} className="progress-bar" />
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Skills;