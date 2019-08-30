import React from 'react';

import SectionTitle from './SectionTitle';

export default function Contact(props){
    const contact = props.contact;
    return (
        <div className="container">
            <SectionTitle index="3" title="Contact Me"/>
            <div className="size-20 contact-content faded">
                <p style={{marginTop: 0}}>
                    Whether you got a job opportunity or even want to say hi, feel free to drop into my inbox. I’ll try my best to get back to you as soon as possible!
                </p>
                <div className="contact-links flex-start">
                    <a href={`mailto:${contact.email}`}>Email</a>
                    <a href={contact.github}>GitHub</a>
                    <a href={contact.linkedin}>LinkedIn</a>
                </div>
            </div>
            
        </div>
    )
};