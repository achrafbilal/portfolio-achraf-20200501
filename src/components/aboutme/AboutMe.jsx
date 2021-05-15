import React, { useEffect, useRef } from 'react'
import database from "../../bd/me.json";
import { init } from 'ityped';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./aboutme.scss"
export default function AboutMe() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                strings: ['Developper', 'Engineer(student)...'],
                backDelay: 1500,
                backSpeed: 60,
            }
        )
    }, [])

    return (
        <div className="aboutMe" id="AboutMe">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/achraf.png" alt="achraf.png" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi Visitor, I'm</h2>
                    <h1>BILAL Achraf</h1>
                    <h3>Softwares & Applications <span ref={textRef}></span></h3>
                </div>
                <a href="#Educations">
                    <img src="/assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )















    {/* <GridList cols={3}>
                    {database.adjectives.map
                        (
                            (e, i) =>
                            (
                                <Card className="aboutMe__card" key={i} onClick={() => setSelected(i)} >
                                    <Card.Body className="aboutMe__card__body">
                                        <Card.Title className={`aboutMe__card__body__title ${active(e)}`}>
                                            {e.word}
                                        </Card.Title>
                                        <Card.Text className={`aboutMe__card__body__text ${!active(e)}`} >
                                            {e.phrase}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        )
                    }
                </GridList> */}
}
