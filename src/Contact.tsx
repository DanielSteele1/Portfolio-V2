import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { RiEmpathizeLine } from "react-icons/ri";
import { TbLetterR } from "react-icons/tb";


function Contact() {

    return (

        <div className="contact">

            <span className="section-heading"> Contact </span>

            <div className="social-bar">

                <span className="heading"> Want to get in touch? contact me via email below, or via my socials: </span>

                <div className="icons">

                    <a className="icon" type="text" href="https://www.linkedin.com/in/daniel-steele-b06443198">
                        <FaLinkedin />
                    </a>

                    <a className="icon" type="email" href="https://github.com/DanielSteele1">
                        <FaGithub />
                    </a>

                    <a className="icon" type="text" href="mailto:dsteele1906@gmail.com">
                        <IoMail />
                    </a>

                </div>
            </div>

            <form 
            target="_blank" 
            action="https://formsubmit.co/dsteele1906@gmail.com" 
            method="POST" 
            className="contact-form"
            onSubmit={() => window.location.reload()}
            >

                <input name="Title" className="contact-input" id="title" placeholder="Title: ">

                </input>

                <input name="Email "className="contact-input" id="email" placeholder="Your Email: ">

                </input>

                <textarea name="Message" className="contact-input" id="message" placeholder="Your Message: ">

                </textarea>

                <button type="submit" className="send-form">
                    <span> Send Message </span>
                    <IoSend style={{ margin: '10px' }} />
                </button>

            </form>

        </div>
    )
}

export default Contact;