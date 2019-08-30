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
            <div className="project-techlist-container">
                <div className="project-techlist flex-start faded">
                    {proj.tags.map(
                        (tag, i) => <span key={`tag_${i}`}>{tag}</span>
                    )}
                </div>
                <div className="project-techlist flex-start">
                    {proj.tech.map(
                        (tech, i) => <span key={`tech_${i}`}>{tech}</span>
                    )}
                </div>
            </div>
        </div>
    )
}