import React from 'react';

export default function SectionTitle(props){
    return (
        <span className="section-title size-25 bg" id={`section${props.index}`}>
            <span className="primary">[{props.index}]</span> {props.title}
        </span>
    )
}