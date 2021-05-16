import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ComponenteDer from './ComponenteDer';
import ComponenteIzq from './ComponenteIzq';
import './LoginPage.scss';


export default function LoginPage() {
    return (
        <Container fluid className='login'>
            <Row>
                <ComponenteIzq />
                <ComponenteDer />
            </Row>
        </Container>
    )
}
