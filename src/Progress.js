import React from 'react';
import './Progress.css'



function Progress() {
      return(
        <div className="container">
        
        <div className="bar front react" data-skill="React" level="80%"></div>
        <div className="bar front css" data-skill="CSS" level="80%"></div>
        <div className="bar front html" data-skill="HTML" level="90%"></div>
        <div className="bar learning" data-skill="git-hub" level="70%"></div>
        <div className="bar learning db" data-skill="firebase" level="90%"></div>
        <div className="bar back basic" data-skill="Python" level="60%"></div>    
       
      </div>
      )
}

export default Progress;