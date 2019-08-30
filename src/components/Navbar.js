import React from 'react';

export default function Navbar(props){
    return (
        <nav>
            <ul>
                {props.items.map((item, i) => (
                    <li key={`nav_${i}`}>
                        <span className={'primary'}>[{i}]</span> {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
