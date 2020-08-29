import React,{ useState }  from 'react';
import {CSSTransition,TransitionGroup,Transition} from 'react-transition-group';
import './Contact.css';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Header from './Header';



function Contact()  {

  
 return(
   <>
   <Header />
   <div className="maincontactbody">
   <div className="contact">
    <div className="contactbox">
      <div className="contacticon">
        <RoomIcon color="primary" className="svg_icons" />
      </div>
      
        <div className="contactdetails">
          <h3>AUSTIN</h3>
        </div></div>
        <div className="contactbox">
      <div className="contacticon">
        <LinkedInIcon  color="primary" className="svg_icons" />
      </div> 
        <div className="contactdetails">
          <h3>sindhuriguntur</h3>
        </div></div>
        <div className="contactbox">
      <div className="contacticon">
        <ContactMailIcon  color="primary" className="svg_icons" />
      </div>
      
        <div className="contactdetails">
          <h3>sindhuriguntur@gmail.com</h3>
        </div></div>
        </div>
      
      </div>
   
  </>
 )
 };

export default Contact
