import React, {useState} from 'react';

function toggle(i, setLink, setOn){
    setLink(i);
    setOn(1);
}

export default function QuickContact(props){
    const [link, setLink] = useState(0);
    const [on, setOn] = useState(0);
    const LINKS = ['Email', 'Github', 'LinkedIn'];
    return <div className="quick-contact">
        <div className="quick-contact-line bg-primary">
            <div className="bg" onMouseLeave={()=>setOn(0)}>
                <img src="/mail.png" alt="Email Link" onMouseEnter={()=>toggle(0, setLink, setOn)}/>
                <img src="/github.png" alt="GitHub Link" onMouseEnter={()=>toggle(1, setLink, setOn)}/>
                <img src="/linkedin.png" alt="LinkedIn Link" onMouseEnter={()=>toggle(2, setLink, setOn)}/>
            </div>
            <div className={`quick-contact-hover size-16 ${on !== 0 ? '' : 'invis'}`}>
                {LINKS[link]}
            </div>
        </div>
    </div>
}