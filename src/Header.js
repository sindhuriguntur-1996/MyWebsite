import React,{useState} from 'react';
import {ButtonBase} from '@material-ui/core';
import {useHistory,Link,NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
    let history=useHistory();

    return (
        <div className="Header">
        <NavLink exact to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/portFolio">PORTFOLIO</NavLink>
        
        <NavLink to="/contact">CONTACT</NavLink>               
        </div>
        
    )
}

export default Header
