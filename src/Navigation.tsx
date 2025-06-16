import React, { useEffect, useState } from 'react';

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

                    <span className="nav-title" id="nav-projects"> Projects </span>
                    <span className="nav-title"> About </span>
                    <span className="nav-title"> Dev Tools </span>
                    <span className="nav-title"> Contact </span>

                </div>
            </div>
        </div>
    )
}

export default Navigation;