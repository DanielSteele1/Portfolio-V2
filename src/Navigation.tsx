import React, { useEffect, useState } from 'react';

import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

import { GrProjects } from "react-icons/gr";
import { GoPerson } from 'react-icons/go';
import { MdEmail } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { SlSpeech } from "react-icons/sl";

import Hamburger from 'hamburger-react';


function Navigation() {


    const [isOpen, setOpen] = useState(false);


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

        <div id="fade-in3" className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-item">
                <span className="nav-title">  <div className="logo">D<span className="logo-backtick">/</span>Steele</div> </span>
            </div>

            <div className="nav-item">
                <div className="nav-menu">

                    <span className="nav-title">
                        <a href="#about">
                            <GoPerson className="nav-icon" /> About Me
                        </a>
                    </span>

                    <span data-tooltip-id="tooltip-1" className="nav-title">
                        <a href="#blog">
                            <SlSpeech className="nav-icon" /> Blog
                        </a>
                    </span>

                    <span className="nav-title" id="nav-projects">
                        <a href="#projects">
                            <GrProjects className="nav-icon" /> Projects
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact">
                            <MdEmail className="nav-icon" /> Contact
                        </a>
                    </span>

                    <span className="resume">
                        <HiDownload style={{
                            fontSize: '20px',
                            marginRight: '10px',
                            verticalAlign: 'center',
                            color: 'white',
                        }} /> View my CV  </span>

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

            <div className="nav-hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen && (

                <div className="nav-menu-mobile">

                    <span className="nav-title">
                        <a href="#about" onClick={() => { setOpen(false) }}>
                            <GoPerson className="nav-icon" /> About Me
                        </a>
                    </span>

                    <span className="nav-title" id="nav-projects">
                        <a href="#projects" onClick={() => { setOpen(false) }}>
                            <GrProjects className="nav-icon" /> Projects
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact" onClick={() => { setOpen(false) }}>
                            <MdEmail className="nav-icon" /> Contact
                        </a>
                    </span>

                </div>
            )}

        </div>
    )
}

export default Navigation;