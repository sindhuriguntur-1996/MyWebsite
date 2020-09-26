import React from 'react';
import './../assets/css/PortFolio.css';
import Gallery from "./Gallery";


function PortFolio () {

    return (
        <div className="portfolio__body" id="portfolio">  
           <h1 className="portfolio__heading">PROJECTS</h1>
            <div className="portfolio__gallery">
            <Gallery />
            </div>
            </div>
            
  
    )

}
export default PortFolio
