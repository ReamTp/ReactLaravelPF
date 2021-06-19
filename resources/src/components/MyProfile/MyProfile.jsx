import React, { useState } from 'react';
import profileLogo from '../../assets/img/Camposol.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faBuilding, faEnvelope, faIdCard, faMobileAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import './MyProfile.scss';

export default function MyProfile(props) {
    if(props.datos && props.tUser){
        const { datos, tUser } = props;
        console.log(datos);
        return (
            <div id='myprofile'>
                <div id='profilemedia'>
                    <div id='profileimage'>
                        <img src={profileLogo} />
                    </div>

                    <h2>{datos ? datos.nombre : ''}</h2>

                    <div id='profilemdata'>
                        <p>{tUser? tUser : ''}</p>
                        <p>-</p>
                        <p>{datos ? datos.departamento.nombre : ''}</p>
                    </div>
                </div>

                <Container>
                    <Row>
                        <h2>Datos Personales</h2>
                        <Col>
                            <div className='info-data'>
                                <p>Nombre</p>
                                <div>
                                    <FontAwesomeIcon icon={faUser}/> {datos ? datos.nombre + ' ' + datos.apellido : ''}
                                </div>
                            </div>

                            <div className='info-data'>
                                <p>Cumpleaños</p>
                                <div>
                                    <FontAwesomeIcon icon={faBirthdayCake} />{datos ? datos.fecha : ''}
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className='info-data'>
                                <p>Departamento</p>
                                <div>
                                    <FontAwesomeIcon icon={faBuilding}/>{datos ? datos.departamento.nombre : ''}
                                </div>
                            </div>

                            <div className='info-data'>
                                <p>DNI</p>
                                <div>
                                    <FontAwesomeIcon icon={faIdCard} />{datos ? datos.dni : ''}
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <h2>Contacto</h2>
                        <Col>
                            <div className='info-data'>
                                <p>Correo</p>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope}/>{datos ? datos.correo : ''}
                                </div>
                            </div>

                            <div className='info-data'>
                                <p>Telefono</p>
                                <div>
                                    <FontAwesomeIcon icon={faPhone} />{datos ? datos.telefono : ''}
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className='info-data'>
                                <p>Celular</p>
                                <div>
                                    <FontAwesomeIcon icon={faMobileAlt}/>{datos ? datos.celular : ''}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return ('');
    }
}
