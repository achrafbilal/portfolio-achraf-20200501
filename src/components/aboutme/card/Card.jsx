
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.scss"
import { Col, Container, Row } from 'react-bootstrap';
export default function Card({ adjective, index, setSelected }) {
    const toggle = () => {
        console.log({ state: adjective.state, index: index });
        if (!adjective.state) setSelected(index)
    }
    return (
        <div className="card" onClick={() => toggle()}>
            <Container>
                <Row>
                    <Col>
                        test
                    </Col>
                </Row>
            </Container>

        </div>

    )
}
