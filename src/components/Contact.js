import React from 'react';

import SectionTitle from './SectionTitle';

export default function Contact(){
    return (
        <div className="container">
            <SectionTitle index="3" title="Contact Me"/>
            <div className="size-20 contact-content faded">
                <p style={{marginTop: 0}}>
                    Whether you got a job opportunity or even want to say hi, feel free to drop into my inbox. I’ll try my best to get back to you as soon as possible!
                </p>
                <div className="contact-links flex-start">
                    <a href="mailto:ben.wong.jamin@gmail.com">Email</a>
                    <a href="https://github.com/BenWong1097">GitHub</a>
                    <a href="https://www.linkedin.com/in/bwong1097/">LinkedIn</a>
                </div>
            </div>
            
        </div>
    )
};