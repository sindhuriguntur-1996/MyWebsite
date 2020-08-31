import React from 'react';
import './About.css';
import Header from './Header';
import Progress from './Progress';
import Button from './Button';
import Trial from './Trial.js';


function About() {
    return (
        <div>
        <Header />
        <Trial/>
        <div className="About">
        <p class="skill">SKILL-SET</p>
        <Progress />
        
        </div>
          
        </div>
    )
}

export default About;
