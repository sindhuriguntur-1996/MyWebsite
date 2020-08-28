import React from 'react';
import Header from './Header';
import { ButtonBase } from '@material-ui/core';
import './PortFolio.css';
import slack from './slack-clone.JPG';
import react from './react.png';
import Gallery from "./Gallery";



function PortFolio () {

    return (
        <div className="header">
            <Header />
           <h1 className="portheading">PROJECTS</h1>
            <div>
            <Gallery />
            </div>
            </div>
  
    )

}
export default PortFolio
