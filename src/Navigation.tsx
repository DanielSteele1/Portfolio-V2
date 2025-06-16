import React, { useEffect, useState } from 'react';

import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

import { GrProjects } from "react-icons/gr";
import { GoPerson } from 'react-icons/go';
import { FaTools } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Navigation() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);

        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (

        <div className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-item">
                <span className="nav-title">  <div className="logo">D<span className="logo-backtick">/</span>Steele</div> </span>
            </div>

            <div className="nav-item">
                <div className="nav-menu">

                    <div className="nav-resume-container">
                        <span className="nav-resume"> Download CV </span>
                    </div>

                    <span className="nav-title" id="nav-projects"> <a href="#projects"> <GrProjects style={{ marginRight: '5px', fontSize: '15px', alignContent: 'center'}}/> Projects </a> </span>
                    <span className="nav-title"> <a href="#about"> <GoPerson style={{ marginRight: '5px', fontSize: '15px', alignContent: 'center'}} /> About Me </a> </span>
                    <span data-tooltip-id="tooltip-1" className="nav-title"> <a href="#devtools"> <FaTools style={{ marginRight: '5px', fontSize: '15px', alignContent: 'center'}} /> Dev Tools </a> </span>

                    <span className="nav-title"> <a href="#contact"> <MdEmail style={{ marginRight: '5px', fontSize: '15px', alignContent: 'center'}} /> Contact </a> </span>

                </div>
                <ReactTooltip
                    id="tooltip-1"
                    place="bottom"
                    content="Coming Soon!"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        color: '#e66465',
                        fontFamily: 'figtree, sans-serif'
                    }}
                    

                />
            </div>
        </div>
    )
}

export default Navigation;