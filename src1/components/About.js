import React from 'react';
import './../assets/css/About.css';
import Progress from './../components/Progress';
import Trial from './../components/Trial';


function About() {
    return (
        <>
        <div className="about__body" id="about">       
        <Trial/>    
        <p className="skill">SKILL-SET</p>
        <Progress />
        </div>
       
        
        
        </>
    )
}

export default About;
