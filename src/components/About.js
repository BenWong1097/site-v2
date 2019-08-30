import React from 'react';

import BadgeList from './BadgeList';
import PicCanvas from './PicCanvas';
import SectionTitle from './SectionTitle';

export default function About(props){
    return (
        <div className="container">
            <SectionTitle index={props.section} title="About"/>
            <div className="flex">
                <div className="about-text size-14" style={{width: "45%", minWidth: "350px"}}>
                    {props.about.map(
                        (p, i) => <p key={`p_${i}`}>{p}</p>
                    )}
                    <p className="size-14">My skills!</p>
                    {props.skills.map(
                        (group, i) => <BadgeList bg={group.color} list={group.list} key={`group_${i}`}/>
                    )}
                </div>
                <div style={{width: "35%", minWidth: "350px"}}>
                    <PicCanvas/>
                </div>
            </div>
        </div>
    )
};