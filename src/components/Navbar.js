import React from 'react';

import { Link } from 'react-scroll';

export default function Navbar(props){
    return (
        <nav className="bg">
            <ul>
                {props.items.map((item, i) => (
                    <li key={`nav_${i}`}>
                        <span className={'primary'}>[{i}]</span>
                        <Link activeClass="active" smooth={true} to={`section${i}`} offset={-50}
                            className="white"> {item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
