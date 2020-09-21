import React,{useState} from 'react';
import {ButtonBase} from '@material-ui/core';
import {useHistory,Link,NavLink} from 'react-router-dom';
import './../assets/css/Header.css';

function Header() {
    let history=useHistory();

    return (
        <div className="header__body">
        <div className="Header">
        {/*<NavLink exact to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/portFolio">PORTFOLIO</NavLink>
        
        <NavLink to="/contact">CONTACT</NavLink>   */}
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#portfolio">PORTFOLIO</a> 
        <a href="#contactInfo">CONTACT</a>            
        </div>
        </div>
        
    )
}

export default Header
