import React,{useState,useEffect} from 'react';
import {ButtonBase} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import About from './About';
import './Welcome.css';
import {useHistory} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import FirstPage from './FirstPage';
import './FirstPage';


const Fade = ({ children, ...props }) => (
   <CSSTransition
     {...props}
     timeout={1000}
     classNames="fade"
   >
     {children}
   </CSSTransition>
 );


function Welcome() {
   let history=useHistory();
   const[show,setShow]=useState(false)
      const handleButtonClick=()=>{
            history.push('/about');
            
          }

         /* useEffect(()=>{
            setInterval(() => {
               setShow(!show)
             }, 5000)
          })*/
         
        
        
          return (
            <div className="Welcome "> 
              <p>
              Hello, I'm 
              </p>
              <br />
              <FirstPage />
              <br/>
           <br />
          
              <p >I'm more into <i>web development.</i></p>
              <Fade in={show}>
              
              <ButtonBase onClick={handleButtonClick} variant="outlined"> <span></span><span></span><span></span><span></span> View my work   <ArrowRightIcon /></ButtonBase>
              </Fade>
       
             </div>
            
          );
    
}

export default Welcome
