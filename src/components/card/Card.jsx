import React from 'react'
import "./card.scss";
import { Row, Col } from 'react-bootstrap';
export default function Card({ content }) {
    return (
        <div className="item">
            <h3 className="title">
                {content.title}
            </h3>
            <Row className="item__row">
                {
                    content.assets.map
                        (
                            (e, i) =>
                            (
                                <Col className="item__col">
                                    <img src={e.url} alt="" width={e.size.width} key={i} height={e.size.height} />
                                </Col>
                            )
                        )
                }
            </Row>
        </div>
    )
}
