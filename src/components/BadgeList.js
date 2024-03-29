import React from 'react';

export default function BadgeList(props){
    return (
        <div className="badge-list">
            {props.list.map(
                (item, i) => <span key={`badge_${i}`} style={{background: props.bg}}>{item}</span>
            )}
        </div>
    );
}