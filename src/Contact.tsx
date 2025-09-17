import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { motion } from "motion/react"


import SplitText from "./React-Bits/SplitText";

function Contact() {

    return (

        <motion.div
            className="contact"
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="contact" id="contact">

                <span className="section-heading">

                    <SplitText
                        text="Want to get in touch?"
                        className="gradient"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        textAlign="center"
                    />

                </span>

                <div className="social-bar">
                    <span className="contact-sub-heading"> You can contact me via email below, or via any of my socials. I look forward to hearing from you.</span>
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

                    <input name="Title" className="contact-input" id="title" placeholder="Title: " required>
                    </input>

                    <input name="Email" className="contact-input" id="email" placeholder="Your Email: " type="email" required>
                    </input>

                    <textarea name="Message" className="contact-input" id="message" placeholder="Your Message: " required>
                    </textarea>

                    <button type="submit" className="send-form">
                        <span> Send Message </span>
                        <IoSend style={{ margin: '10px' }} />
                    </button>

                </form>

            </div>
        </motion.div>
    )
}

export default Contact;