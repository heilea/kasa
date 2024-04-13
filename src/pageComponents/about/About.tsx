import React from 'react';
import "./About.scss";
import aboutBanner from "../../assets/aboutBanner.png";

export const About: React.FC =() => {
    return(
        <div className="About">
            <div className="aboutBanner">
            <img src={aboutBanner} alt="Photo de montagne" />
            </div>
            <div className="content">
            
            </div>
        </div>
    )
}

