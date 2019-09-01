import React from 'react';

import SectionTitle from './SectionTitle';

export default function Contact(props){
    const contact = props.contact;
    return (
        <div className="container">
            <SectionTitle index="3" title="Contact Me"/>
            <div className="size-20 contact-content faded">
                <p style={{marginTop: 0}}>
                    Whether you got a job opportunity or even want to say hi, feel free to drop into my inbox. I'll be sure to get back to you when I can!
                </p>
                {/* <div className="contact-links flex-start">
                    <a href={`mailto:${contact.email}`}>Email</a>
                    <a href={contact.github}>GitHub</a>
                    <a href={contact.linkedin}>LinkedIn</a>
                </div> */}
                <div className="contact-links flex-start">
                    <a href={`mailto:${contact.email}`}>
                        <img src="/mail.svg" alt="Email Link"/>
                    </a>
                    <a href={contact.github}>
                        <img src="/github.svg" alt="GitHub Link"/>
                    </a>
                    <a href={contact.linkedin}>
                        <img src="/linkedin.svg" alt="LinkedIn Link"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
};