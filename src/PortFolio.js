import React from 'react';
import Header from './Header';
import { ButtonBase } from '@material-ui/core';
import './PortFolio.css';
import slack from './slack-clone.JPG';
import react from './react.png';
import Gallery from "./Gallery";
import MainGallery from './MainGallery';



function PortFolio () {

    return (
        <div className="portfolio__body" id="portfolio">  
           <h1 className="portfolio__heading">PROJECTS</h1>
            <div>
            <Gallery />
            </div>
            </div>
            
  
    )

}
export default PortFolio
