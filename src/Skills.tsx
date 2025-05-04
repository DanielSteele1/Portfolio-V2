import React, { useState, useEffect } from "react";
import { SiReact } from "react-icons/si";
import { LuPalette } from "react-icons/lu";
import { FaServer } from "react-icons/fa";
import { TbBrandGraphql } from "react-icons/tb";
import { LinearProgress } from '@mui/material';
import { FaGitAlt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMui } from "react-icons/si";

function Skills() {

    const [active, setActive] = useState(0);
    //diff pages
    const SkillSection = ["Frontend", "Backend", "Other"];
    const icons = [<LuPalette style={{ marginRight: '10px' }} />, <FaServer style={{ marginRight: '10px' }} />, < TbBrandGraphql style={{ marginRight: '10px', verticalAlign: 'center' }} />]

    // function to animate the progressbars 
    // - basically just stalls the fill up animation to make it slower, giving the illusion of animation.
    function AnimateProgressbar({ value, ...props }: {value: number}) {
        const [animate, setAnimate] = useState(0);

        useEffect(() => {

            if (animate < value) {

                const timer = setTimeout(() => setAnimate(animate + 2), 10);
                return () => clearTimeout(timer);
            }

        }, [animate, value]);
        return <LinearProgress variant="determinate" value={animate} {...props} />
    }

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
                            <div className="skill-sub-item">
                                <FaHtml5 className="skill-icon"/>
                                <SiCsswizardry className="skill-icon"/>
                                <span className="skills-title"> HTML/CSS </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <SiTypescript className="skill-icon"/>
                                <span className="skills-title"> TypeScript </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <SiReact className="skill-icon"/>
                                <span className="skills-title"> React </span>
                            </div>
                            <AnimateProgressbar  value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <SiMui className="skill-icon"/>
                                <span className="skills-title"> MatUI </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <FaFigma className="skill-icon"/>
                                <span className="skills-title"> Figma </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                    </div>
                }

                {active === 1 &&
                    <div className="Backend-skills">

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <SiMongodb className="skill-icon"/>
                                <span className="skills-title"> MongoDB </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <FaNodeJs className="skill-icon"/>
                                <span className="skills-title"> NodeJS </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                    </div>
                }

                {active === 2 &&
                    <div className="Other">

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <SiReact className="skill-icon"/>
                                <span className="skills-title"> REST API </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                                <FaGitAlt className="skill-icon"/>
                                <span className="skills-title"> Git </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />

                        </div>

                        <div className="skill-item">
                            <div className="skill-sub-item">
                               <TbBrandGraphql className="skill-icon"/>
                                <span className="skills-title"> GraphQL </span>
                            </div>
                            <AnimateProgressbar value={90} className="progress-bar" />
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Skills;