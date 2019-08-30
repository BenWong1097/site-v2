import React from 'react';

import SectionTitle from './SectionTitle';
import ToggleView from './ToggleView';

export default function Experience(props){
    return (
        <div className="container">
            <SectionTitle index={props.section} title="My Experience"/>
            <ToggleView list={props.experience}/>
        </div>
    );
}