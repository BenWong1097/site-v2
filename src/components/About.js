import React from 'react';

import BadgeList from './BadgeList';
import PicCanvas from './PicCanvas';
import SectionTitle from './SectionTitle';

export default function About(){
    return (
        <div className="container">
            <SectionTitle index="0" title="About"/>
            <div className="flex">
                <div className="size-14" style={{width: "45%", minWidth: "350px"}}>
                    <p>I’m currently a Computer Engineering senior at Texas A&M University set to graduate May 2020.</p>
                    <p>I’m based in Houston, Texas so you already know I’m a big foodie as well. I'd say I'm a pretty impulsive and open-minded person. I'm always open to explore the unknown and learn from it.</p>
                    <p>I love programming in order to solve problems that are pervasive.</p>
                    <p className="size-14">My skills!</p>
                    <BadgeList bg="rgb(112, 139, 38)" list={['Python', 'Java', 'Javascript', 'Ruby', 'Lua', 'HTML/CSS']}/>
                    <BadgeList bg="rgb(60, 58, 207)" list={['Rails', 'Angular', 'React', 'AWS', 'Docker', 'Git', 'Node.js', 'MongoDB', 'PostgreSQL']}/>
                </div>
                <div style={{width: "35%", minWidth: "350px"}}>
                    <PicCanvas/>
                </div>
            </div>
        </div>
    )
};