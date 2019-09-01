import React, {useState} from 'react';

function toggle(i, setLink, setOn){
    setLink(i);
    setOn(1);
}

export default function QuickContact(props){
    const [link, setLink] = useState(0);
    const [on, setOn] = useState(0);
    const LINKS = ['Email', 'Github', 'LinkedIn'];

    const contact = props.contact;
    return <div className="quick-contact">
        <div className="quick-contact-line bg-primary">
            <div className="bg" onMouseLeave={()=>setOn(0)}>
                <a href={`mailto:${contact.email}`}>
                    <img src="/mail.svg" alt="Email Link" onMouseEnter={()=>toggle(0, setLink, setOn)}/>
                </a>
                <a href={contact.github}>
                    <img src="/github.svg" alt="GitHub Link" onMouseEnter={()=>toggle(1, setLink, setOn)}/>
                </a>
                <a href={contact.linkedin}>
                    <img src="/linkedin.svg" alt="LinkedIn Link" onMouseEnter={()=>toggle(2, setLink, setOn)}/>
                </a>
            </div>
            <div className={`quick-contact-hover size-16 ${on !== 0 ? '' : 'invis'}`}>
                {LINKS[link]}
            </div>
        </div>
    </div>
}