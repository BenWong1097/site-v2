import React, {useState} from 'react';

export default function ToggleView(props){
    const [view, setView] = useState(0);
    const curView = props.list[view];
    return (
        <>
        <div className="flex-start exp-tab-list-container">
            {props.list.map(
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
            <span className="faded" style={{paddingLeft: ".5em"}}>{curView.from} - {curView.to}</span>
        </div>
        <div className="exp-detail-container">
            {curView.details.map(
                (detail, i) => <p key={`detail_${i}`} className="primary">> <span className="faded">{detail}</span></p>
            )}
        </div>
        </>
    );
}