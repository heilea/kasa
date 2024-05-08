import React from 'react';
import "./About.scss";
import aboutBanner from "../../assets/aboutBanner.png";
import { Collapse } from '../../components/collapse/Collapse';
import aboutContent from '../../string.json';


export const About: React.FC = () => {
    return (
        <div className="About">
            <div className="aboutBanner">
                <img src={aboutBanner} alt="Photo de montagne" />
            </div>
            <div className='content'>
        {Object.entries(aboutContent).map(([title, content]) => (
          <Collapse
            key={title}
            title={title}
            content={content}
          />
        ))}
      </div>
        </div>
    )
}

