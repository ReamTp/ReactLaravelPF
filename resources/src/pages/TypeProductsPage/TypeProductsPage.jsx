import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Marcas from '../../components/Marcas';
import TTProductos from '../../components/TTProductos';
import './TypeProductsPage.scss';

export default function TypeProductsPage() {
    return (
        <>
            <Container id="tProductos">
                <div id="tPTitle">
                    <h1>Tipo de Productos de la Empresa</h1>
                </div>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tipos de Productos</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Marcas</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <TTProductos/>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Marcas/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}
