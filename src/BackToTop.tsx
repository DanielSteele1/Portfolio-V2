
import "./App.css";

import { IoArrowDown } from 'react-icons/io5';


function BackToTop() {

    return (

        <div className="BackToTop">

            <div className="back-to-top-text">
                <span> I'm always developing something in my free time, so be sure to check back here later in case I launch another project. </span>
            </div>

            <div className="back-to-top-button">
                <span className="gradient">
                    <a href="#top">
                        Back to the top
                        <IoArrowDown id="arrow-icon"/>
                    </a>
                </span>
            </div>

        </div>

    )
}

export default BackToTop;