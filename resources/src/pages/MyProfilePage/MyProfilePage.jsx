import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import userServices from '../../services/User';
import MyProfile from '../../components/MyProfile';
import MyResignation from '../../components/MyResignation';
import MySettings from '../../components/MySetting';
import './MyProfilePage.scss';

export default function MyProfilePage() {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    let tUser = null;

    const consulta = async () => {
        const res = await userServices.datos();

        if (res){
            setDatos(res.data);
            setCargando(false);
        }
    }

    function iniciarDatos(){
        if (cargando){
            consulta();
        }
    }

    iniciarDatos();
    if(datos){
        let title = datos.titulo.split(' ')
        datos ? tUser = title[0] : '';
    }

    return (
        <Container id='profile'>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
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
                                <MyProfile datos={datos} tUser={tUser}/>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <MySettings datos={datos}/>
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
