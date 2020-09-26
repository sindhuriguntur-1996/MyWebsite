import React from 'react';
import './../assets/css/ContactInfo.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import GitHubIcon from '@material-ui/icons/GitHub';


function ContactInfo() {
    return (
        <div>
        
        <div className="contactInfo__body">
            <div className="circle" id="contactInfo">
                <div className="share">
                <ContactSupportIcon className="support"/>
                </div>
                <ul>
                <li><a href="https:github.com/sindhuriguntur-1996"><GitHubIcon className="icon"/></a></li>
                    
                    <li><a href="https://www.linkedin.com/in/sita-sindhuri-guntooru-580341152"><LinkedInIcon className="icon" /></a></li>
                    
                    <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sindhu.guntur10@gmail.com&tf=1"><EmailIcon className="icon"/></a></li>
                   
                    <li><a href="https://www.google.com/maps/place/Austin,+TX/@30.2862407,-97.7786031,12.99z/data=!4m13!1m7!3m6!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!2sAustin,+TX!3b1!8m2!3d30.267153!4d-97.7430608!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608"><RoomIcon className="icon"/></a></li>
                   
                </ul>
            </div>
        </div>
        </div>
    )
}

export default ContactInfo
