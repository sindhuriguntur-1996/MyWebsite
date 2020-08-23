import React from 'react';
import {ButtonBase} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import './Header.css';

function Header() {
    let history=useHistory();
    const homePage=()=>{
        history.push('/');
    }

    const aboutPage=()=>{
        history.push('/about');
        
    }

    const portFolioPage=()=>{
        history.push('/portFolio');
        
    }

    const blogPage=()=>{
        history.push('/blog');
        
    }

    const contactPage=()=>{
        history.push('/contact');
        
    }


    return (
        <div className="Header">
        <ButtonBase onClick={homePage}>HOME</ButtonBase>
        <ButtonBase onClick={aboutPage}>ABOUT</ButtonBase>
        <ButtonBase onClick={portFolioPage}>PORTFOLIO</ButtonBase>
        <ButtonBase onClick={blogPage}>BLOG</ButtonBase>
        <ButtonBase onClick={contactPage}>CONTACT</ButtonBase>           
        </div>
    )
}

export default Header
