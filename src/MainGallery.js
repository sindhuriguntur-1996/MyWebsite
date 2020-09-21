import React from 'react';
import slack from './slack-clone.JPG';
import expensify from './expensify.JPG';
import './Gallery.css';
import Indecision from './Indecision1.JPG';
import react from './react.png';
import python from './python.png';
import React1 from './React1.webp';


function MainGallery() {
    return (
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
            <p>git-link</p>
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
            <h2>Expensify</h2> 
            <p>git-link</p>
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
            <h2>SLACK-CLONE</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={slack}  alt="altslack" />
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        </section>
        
        <section>
        <img src={python} alt="pythonlogo"/>
        <div className="card">
        
         <div className="box">
         <div className="imgBx">
         <img src={slack}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={expensify}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>Expensify</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={Indecision}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        <div className="card">
         <div className="box">
         <div className="imgBx">
         <img src={slack}  alt="altIndecision"/>
         </div>
         <div className="contentBx">
            <div>
            <h2>SLACK-CLONE</h2> 
            <p>git-link</p>
         </div>

         </div>

         </div>
            
        </div>
        
        </section>
        </div>
    )
}

export default MainGallery;
