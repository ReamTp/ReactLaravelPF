import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ComponenteDer from './ComponenteDer';
import ComponenteIzq from './ComponenteIzq';
import './LoginPage.scss';


export default function LoginPage() {
    return (
        <Container fluid className='login'>
            <Row>
                <Col className='login-izq'>
                    <ComponenteIzq />
                </Col>

                <Col className="login-der">
                    <ComponenteDer />
                </Col>
            </Row>
        </Container>
    )
}
