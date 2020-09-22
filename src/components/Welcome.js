import React from 'react';
import {ButtonBase} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import About from './About';
import PortFolio from './PortFolio';
import ContactInfo from './ContactInfo'
import './../assets/css/Welcome.css';
import FirstPage from './../components/FirstPage';
import Header from './../components/Header';


 function goto(url)
 {
 window.location=url;

 }

function Welcome() {
   const handleButtonClick=()=>{       
           goto('#about')    
          }
          return (
            <>
            <Header />
            <div className="Welcome" id="home"> 
              <p>
              Hello, I'm 
              </p>
              <br />
              <FirstPage />
              <br/>
           <br />
          
              <p >I'm more into <i>web development.</i></p>
              <ButtonBase onClick={handleButtonClick} variant="outlined"> <span></span><span></span><span></span><span></span> View my work   <ArrowRightIcon /></ButtonBase>
             </div>
             <div className="welcome__about" id="about">
            <About />
            </div>
            <div className="welcome__portfolio" id="portfolio">
        <PortFolio />    
        </div>
        <div className="welcome__contact" id="contactInfo">
        <ContactInfo />
        </div>
             </>
            
          );
    
}

export default Welcome;
