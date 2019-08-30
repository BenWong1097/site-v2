import React from 'react';

import SectionTitle from './SectionTitle';
import ToggleView from './ToggleView';

export default function Experience(){
    return (
        <div className="container">
            <SectionTitle index="1" title="My Experience"/>
            <ToggleView/>
        </div>
    );
}