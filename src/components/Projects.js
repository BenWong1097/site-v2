import React from 'react';

import SectionTitle from './SectionTitle';
import Project from './Project';

export default function Projects(props){
    const projects = [
        {
            name: "Course Scheduler",
            description: "An intuitive web application designed assist students in planning their classes.",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAuth'],
            github: '',
            demo: ''
        },
        {
            name: "Course Scheduler",
            description: "An intuitive web application designed assist students in planning their classes.",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAuth'],
            github: '',
            demo: ''
        },
        {
            name: "Course Scheduler",
            description: "An intuitive web application designed assist students in planning their classes.",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAuth'],
            github: '',
            demo: ''
        },
        {
            name: "Course Scheduler",
            description: "An intuitive web application designed assist students in planning their classes.",
            tech: ['Angular', 'NodeJS', 'Firebase', 'Google OAssssuth'],
            github: '',
            demo: ''
        }
    ]
    return (
        <div className="container">
            <SectionTitle index="2" title="My Projects"/>
            <div className="flex-start">
                {projects.map(
                    proj => <Project project={proj}/>
                )}
            </div>
        </div>
    );
};