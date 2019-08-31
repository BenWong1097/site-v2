import React from 'react';

export default function Project(props){
    const proj = props.project;
    return (
        <div className="project-container">
            <div className="flex-start">
                <div style={{flexGrow: 1}}>
                    <img src="folder.png" alt="" width={70}/>
                </div>
                <div className="project-links">
                    <a href={proj.github}>
                        <img className={proj.github.length !== 0 ? '' : 'inactive'} src="/github.png" alt="Github Link"/>
                    </a>
                    <a href={proj.demo}>
                        <img className={proj.demo.length !== 0 ? '' : 'inactive'} src="/link.png" alt="More Info"/>
                    </a>
                </div>
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