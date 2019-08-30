import React, {useState} from 'react';

export default function ToggleView(props){
    const experienceList = [{
            employer: 'Texas A&M College of Architecture',
            role: 'Web Developer',
            from: 'Feb 2018',
            to: 'Present',
            details: [
                'Refactored client websites to work with Cascade CMS using Velocity, Javascript, and HTML/CSS, streamlining deployment of site changes',
                'Initiated documentation efforts for Cascade and Django framework utilized by existing code, reducing on-boarding training times',
                'Commenced work on unit testing coverage using Pytest-Django, assisting with regression testing on the existing web infrastructure applied by the college'
        ]},
        {
            employer: 'Sabre Corporation',
            role: 'Galactic Protector',
            from: 'Feb 2102',
            to: 'Dec 2102',
            details: [
                'Collaborate on segue utilizing lorem ipsum dolores with a side of french fries',
                'Designed algorithms that utilize that apex commander that exists on the fourth plane of existence in order to dilute the radiation of Earth',
                'Applied a dynamic scheduling algorithm to dictate when the Glorkun army was going to attack Earth, allowing for an accurate predication of when to execute Order Null'
        ]},
        {
            employer: 'Tokio Marine HCC',
            role: 'Application Development Intern',
            from: 'May 2018',
            to: 'Aug 2018',
            details: [
                'Implemented a notification system for group subscriptions supporting many-to-many relationships using the .NET Framework, reducing storage complexity from the preexisting architecture that was in place',
                'Developed a .NET web application that provides authorized users an intuitive interface to modify their subscriptions to notification groups, removing the need to contact a DBA for each revision'
        ]},
    ];
    const [view, setView] = useState(0);
    const curView = experienceList[view];
    return (
        <>
        <div className="flex-start exp-tab-list-container">
            {experienceList.map(
                (job,i) => 
                    <div key={`experience_${i}`} className={"exp-tab " + (i === view ? "bg-light" : "")}
                        onClick= {() => setView(i)}>
                        {job.employer}
                    </div>
            )}
        </div>
        <div className="exp-heading">
            <div>
                <span className="size-16">{curView.employer} </span>
                <span className="primary size-14">{curView.role}</span>
            </div>
            <span className="faded">{curView.from} - {curView.to}</span>
        </div>
        <div className="exp-detail-container">
            {curView.details.map(
                (detail, i) => <p key={`detail_${i}`} className="primary">> <span className="faded">{detail}</span></p>
            )}
        </div>
        </>
    );
}