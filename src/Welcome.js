import React from 'react';
import {ButtonBase} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import About from './About';
import './Welcome.css';
import {useHistory} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group';


function Welcome() {
   let history=useHistory();
        const handleButtonClick=()=>{
            history.push('/about');
            
          }
        
          return (
            <div className="Welcome">
         
           <p>Hello, I'm <span>Sita Sindhuri Guntooru.</span></p>
              <p>I'm more into <i>web development.</i></p>
              <ButtonBase onClick={handleButtonClick} variant="outlined"> View my work   <ArrowRightIcon /></ButtonBase>
            
       
             </div>
            
          );
    
}

export default Welcome
