import React from 'react';
import slack from './slack-clone.JPG';
import expensify from './expensify.JPG';
import './Gallery.css';
import Indecision from './Indecision1.JPG';
import react from './react.png';


function Gallery() {
    return (
        <div className="maincard">
        <section>
        <div className="card">
        
         <div className="box">
         <div className="imgBx">
         <img src={slack} />
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>bhdjjkasd</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={expensify} />
         </div>
         <div className="contentBx">
            <div>
            <h2>Expensify</h2> 
            <p>bhdjjkasd</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={Indecision} />
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>bhdjjkasd</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={slack} />
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>bhdjjkasd</p>
         </div>

         </div>

         </div>
            
        </div>
        </section>
        </div>
    )
}

export default Gallery;
