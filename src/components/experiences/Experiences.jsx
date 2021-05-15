import React, { useState } from 'react'
import "./experiences.scss"
export default function Experiences() {

    const list = ['featured', 'Web app', 'Mobile app', 'Design', 'Branding']
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="experiences" id="Experiences">
            <h1>Experiences</h1>
            <ul>
                {
                    list.map
                        (
                            (e, i) =>
                                <li key={i} onClick={() => setActiveIndex(i)} className={i === activeIndex && 'active'}>
                                    {e}
                                </li>
                        )
                }
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg " alt="" />
                    <h3>Banking app</h3>
                </div>
            </div>
        </div>
    )
}
