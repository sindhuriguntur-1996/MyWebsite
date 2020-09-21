import React from 'react';
import './About.css';
import Header from './Header';
import Progress from './Progress';
import Button from './Button';
import Trial from './Trial.js';
import PortFolio from './PortFolio.js';
import Contact from './Contact';
import ContactInfo from './ContactInfo';


function About() {
    return (
        <>
        <div className="about__body" id="about">
        {/*<Header />*/}
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
