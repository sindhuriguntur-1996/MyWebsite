import React from 'react';
import './ContactInfo.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Header from './Header';

function ContactInfo() {
    return (
        <div>
        <Header />
            <div className="circle" >
                <div className="share">
                <ContactSupportIcon className="support"/>
                </div>
                <ul>
                    <li><FacebookIcon className="icon"/></li>
                    <li><LinkedInIcon className="icon" /></li>
                    <li><EmailIcon className="icon"/></li>
                    <li><RoomIcon className="icon"/></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo
