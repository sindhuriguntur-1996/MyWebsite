import React from 'react';
import './../assets/css/About.css';
import Progress from './../components/Progress';
import Button from '../Button';
import Trial from '../Trial.js';
import PortFolio from './../components/PortFolio';
import ContactInfo from './../components/ContactInfo';


function About() {
    return (
        <>
        <div className="about__body" id="about">
        
        <Trial/>
        
        <p className="skill">SKILL-SET</p>
        <Progress />
       
        
        </div>
       
        <div className="about__portfolio" id="portfolio">
        <PortFolio />
           
        </div>
        <div className="about__contact" id="contactInfo">
        <ContactInfo />
        </div>
        
        </>
    )
}

export default About;
