import React from 'react';

export default function Project(props){
    const proj = props.project;
    return (
        <div className="project-container">
            <div>
                {/* Icon and Links */}
            </div>
            <h3>{proj.name}</h3>
            <p className="faded">{proj.description}</p>
            <div className="project-techlist flex-start">
                {proj.tech.map(
                    tech => <span>{tech}</span>
                )}
            </div>
        </div>
    )
}