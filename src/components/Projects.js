import React from 'react';

import SectionTitle from './SectionTitle';
import Project from './Project';

export default function Projects(props){
    return (
        <div className="container">
            <SectionTitle index={props.section} title="My Projects"/>
            <div className="flex-start">
                {props.projects.map(
                    (proj, i) => <Project project={proj} key={`proj_${i}`}/>
                )}
            </div>
        </div>
    );
};