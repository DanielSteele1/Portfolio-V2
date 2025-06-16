import React from 'react';
import "./App.css";

function AboutMe() {

    return (

        <div className="about" id="about">

            <span className="section-heading"> About </span>

            <div className="About-container">

                <div className="About-image-container">
                    <img className="About-img" src="Daniel_Steele.jpg" />
                </div>

                <div className="About-para-container">

                    <div className="About-paragraph">
                        <span> Hi! I'm Daniel Steele, a university graduate from the University of Plymouth (UK) and Full Stack developer.
                            Although I have experiemented alot recently with full-stack projects, such as FocusDev, I mainly have a prefence for modern frontend development work,
                            focussing on creating beautiful UI elements as best I can from scratch.
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutMe;