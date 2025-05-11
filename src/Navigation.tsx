import React from "react";

function Navigation() {

    return (

        <div className="navigation">

            <div className="nav-item">
                <span className="nav-title">  <div className="logo">D<span className="logo-backtick">/</span>Steele</div> </span>
            </div>

            <div className="nav-item">
                <div className="nav-menu">
                    
                    <span className="nav-title"> Projects </span>
                    <span className="nav-title"> Skills </span>
                    <span className="nav-title"> Dev Tools </span>
                    <span className="nav-title"> Contact </span>

                </div>
            </div>
        </div>
    )
}

export default Navigation;