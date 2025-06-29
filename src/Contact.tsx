import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { motion } from "motion/react"

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

                <span className="section-heading"> Contact </span>

                <div className="social-bar">

                    <span className="social-heading"> Want to get in touch? contact me via email below, or via my socials: </span>

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