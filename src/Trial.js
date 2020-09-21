import React from 'react';
import './Hexagon.css';
import Hexagon from './Hexagon';
import './Trial.css';
import python from './python.png';
import './Button.css';
import react from './React1.webp';
import html from './html2.png';
import css from './css.png';
import JS from './Java-01.jpg';
import node from './nodejs.png';
import me from './me.JPG';



/*
 <svg>
            <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
        </svg>
        */
function Trial() {
    return (
        <>
        <div className="trial__body">
       <ul id="grid" class="clear">
           <li>
           <div class="hexagon">
          
           <div className="infinite road">
           
            <div className="shadow road">
            
           
            </div></div>
            <div class="middle">
            <div class="text">creativity is my forever travel partner</div>
            </div>
           </div>
           </li>
           <li>
           <div class="hexagon">
               <img src={python}  alt="python"/>
               <div className="overlay"></div>
           </div>

           </li>
           <li>
           <div class="hexagon">
           <img src={react}  alt="react"/>
           </div>
           </li>
           <li>
           <div class="hexagon">
           <img src={html}  alt="html"/>
           </div>
           </li>
           <li>
           <div class="hexagon image1">
           <img src={me} className="image"  alt="me"/>
           </div>
           </li>
           <li>
           <div class="hexagon">
           <img src={css}  alt="css"/>
           </div>
           </li>
           <li>
           <div class="hexagon">
           <div className="barprogress">
        
        <div className="barbar barfront barreact" data-skill="knowledge" ></div>
     
   </div>
   <div class="middle">
            <div class="text">There is always a room to accomodate more knowledge in my mind</div>
            </div>
           </div>
           </li>
           <li>
           <div class="hexagon">
               <img src={node}  alt="node"/>
           </div>
           </li>
           <li>
           <div class="hexagon">
           <img src={JS}  alt="JS" />
           </div>
           </li>
       </ul>
       </div>
        </>
    )
}

export default Trial;
