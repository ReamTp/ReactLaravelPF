import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import MyProfile from '../../components/MyProfile';
import MyResignation from '../../components/MyResignation';
import MySettings from '../../components/MySetting';
import './MyProfilePage.scss';

export default function MyProfilePage() {
    return (
        <Container id='profile'>
            <Tab.Container id='left-tabs-example'>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Mi Perfil</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="second">Mis Ajustes</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item className="nav-renuncia">
                                <Nav.Link eventKey="third">Renuncia</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <MyProfile/>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="second">
                                <MySettings/>
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">
                                <MyResignation/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
