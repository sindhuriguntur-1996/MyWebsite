import React from 'react';
import './../assets/css/Header.css';
import txt from './../assets/images/resume.txt';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';



function Header() {

    return (
        <div className="header__body">
       
       
      
        <div className="Header">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#portfolio">PORTFOLIO</a> 
        <a href="#contactInfo">CONTACT</a> 
        <a href={txt} className="resume" download>DOWNLOAD_RESUME</a>           
        </div>
        </div>
        
    )
}

export default Header
