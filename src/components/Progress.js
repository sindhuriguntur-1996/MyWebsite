import React from 'react';
import './../assets/css/Progress.css';


function Progress() {
      return(
        <div className="progress__body">
        <div className="progress">
        
        <div className="bar front react" data-skill="React" level="80%"></div>
        <div className="bar front css" data-skill="CSS" level="80%"></div>
        <div className="bar front html" data-skill="HTML" level="90%"></div>
        <div className="bar front node" data-skill="Node JS" level="65%"></div>
       
        <div className="bar learning" data-skill="git-hub" level="70%"></div>
        <div className="bar learning db" data-skill="firebase" level="90%"></div>
        <div className="bar learning mongodb" data-skill="Mongo db" level="60%"></div>
        <div className="bar learning sqldb" data-skill="My SQL" level="60%"></div>
        <div className="bar back basic" data-skill="Python" level="60%"></div>    
       
      </div>
      </div>
      )
}

export default Progress;