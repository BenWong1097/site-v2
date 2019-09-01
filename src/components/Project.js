import React from 'react';

export default function Project(props){
    const proj = props.project;
    const githubClass = proj.github.length !== 0 ? '' : 'inactive';
    const demoClass = proj.demo.length !== 0 ? '' : 'inactive'
    return (
        <div className="project-container">
            <div className="flex-start">
                <div style={{flexGrow: 1}}>
                    <img src="folder.png" alt="" width={70}/>
                </div>
                <div className="project-links">
                    { proj.github.length !== 0 ? 
                        <a href={proj.github}>
                            <img className={githubClass} src="/github.svg" alt="Github Repo"/>
                        </a>
                        :
                        <span>
                            <img className={githubClass} src="/github.svg" alt="Github Repo"/>
                        </span>
                    }
                    { proj.demo.length !== 0 ? 
                        <a href={proj.demo}>
                            <img className={demoClass} src="/link.svg" alt="More Info"/>
                        </a>
                        :
                        <span>
                            <img className={demoClass} src="/link.svg" alt="More Info"/>
                        </span>
                    }
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