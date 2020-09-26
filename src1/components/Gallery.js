import React from 'react';
import slack from './../assets/images/slack-clone.JPG';
import expensify from './../assets/images/expensify.JPG';
import './../assets/css/Gallery.css';
import Indecision from './../assets/images/Indecision1.JPG';
import python from './../assets/images/python.png';
import React1 from './../assets/images/React1.webp';
import Covidtracker from './../assets/images/covid-tracker.jpg';
import Spotifyclone from './../assets/images/spotify-clone.JPG';
import whatsapp from './../assets/images/whatspp-mern-clone.JPG';
import balloon from './../assets/images/balloon-shooting.jpg';
import amazontracker from './../assets/images/amazon-price-tracker.JPG';
import node from './../assets/images/nodejs.png';
import zoom from './../assets/images/zoom.JPG';



function Gallery() {
    return (
       <>
       <div className="gallery__body">

        <div className="maincard">
       
        <section>
        <img src={React1}  alt="reactlogo"/>
        <div className="card">
       
         <div className="box">
         <div className="imgBx">
         <img src={slack} alt="altslack" />
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <a href="https://github.com/sindhuriguntur-1996/slack-clone"><p className="project__details">Git-link+DEMO</p></a>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={expensify} alt="altexpensify" />
         </div>
         <div className="contentBx">
            <div>
            <h2>Expensify-app</h2> 
            <a href="https://github.com/sindhuriguntur-1996/React-Expensifyapp"><p className="project__details">Git-link+DEMO</p></a>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={Indecision} alt="altIndecision" />
         </div>
         <div className="contentBx">
            <div>
            <h2>Indecision-app</h2> 
            <a href="https://github.com/sindhuriguntur-1996/Reactproject-IndecisionApp"><p className="project__details">Git-link+DEMO</p></a>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={Covidtracker}  alt="covidtracker" />
         </div>
         <div className="contentBx">
            <div>
            <h2>Covid-19-Tracker</h2> 
          <a href="https://github.com/sindhuriguntur-1996/covid-19-tracker"> <p className="project__details">Git-link+DEMO</p></a> 
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={Spotifyclone}  alt="spotify-clone" />
         </div>
         <div className="contentBx">
            <div>
            <h2>SPOTIFY-CLONE</h2> 
            <a href="https://github.com/sindhuriguntur-1996/spotify-clone"><p className="project__details">Git-link+DEMO</p></a>
         </div>

         </div>

         </div>
            
        </div>
        </section>
        <section>
        <img src={python} alt="pythonlogo"/>
        <img className="nodelogo" src={node} alt="node logo"/>
        <div className="card">
        
         <div className="box">
         <div className="imgBx">
         <img src={whatsapp}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>WHATSAPP-MERN-CLONE</h2> 
            <a href="https://github.com/sindhuriguntur-1996/whatsapp-mern-clone"><p className="project__details">Git-link</p></a>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={balloon}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>balloon-shooting-game</h2> 
            <a href="https://github.com/sindhuriguntur-1996/balloon-shooting-game"><p className="project__details">Git-link</p></a>
         </div>

         </div>

         </div>
            
        </div>
       <div className="card">
         <div className="box">
         <div className="imgBx">
         <img className ="price" src={amazontracker}  alt="amazon"/>
         </div>
         <div className="contentBx">
            <div>
            <h2 >PRICE_TRACKER</h2> 
            <a href="https://github.com/sindhuriguntur-1996/amazon-price-tracker"><p className="project__details">Git-link</p></a>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={zoom}  alt="zoom"/>
         </div>
         <div className="contentBx">
            <div>
            <h2 >ZOOM-CLONE</h2> 
            <a href="https://github.com/sindhuriguntur-1996/zoom-clone"><p className="project__details">Git-link</p></a>
         </div>
         </div>
         </div>
            
        </div>
        
        
        </section>
        </div>
        </div>
</>
    )
}

export default Gallery;
