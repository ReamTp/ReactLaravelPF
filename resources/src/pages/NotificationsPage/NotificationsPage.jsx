import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './NotificacionesPage.scss';
import { logo } from '../../utils/img.js';

export default function NotificationsPage() {
    return (
        <>
            <div id='notTitle'>
                <h1>Mis Notificaciones</h1>
            </div>

            <Container id="notificaciones">
                <div id='NotDatos'>
                    <div className='NotContenedor'>
                        <div id='ntcHead'>
                            <h2>Todas las Notificaciones</h2>
                        </div>

                        <div id='ntcBody'>
                            <div className='notificacion'>
                                <div className='notifImg'>
                                    <img src={logo} />
                                </div>
                                <div className='notiInfo'>
                                    <div>
                                        <h3>Elias Arriaga</h3>
                                        <span>10/11/20</span>
                                        <p>Ha realizado un pago a Juan Diego</p>
                                    </div>
                                    <Button>Revisar Pagos</Button>
                                </div>
                                <div className='notEstado'></div>
                            </div>

                            <div className='notificacion'>
                                <div className='notifImg'>
                                    <img src={logo} />
                                </div>
                                <div className='notiInfo'>
                                    <div>
                                        <h3>Elias Arriaga</h3>
                                        <span>10/11/20</span>
                                        <p>Ha realizado un pago a Juan Diego</p>
                                    </div>
                                    <Button>Revisar Pagos</Button>
                                </div>
                                <div className='notEstado'></div>
                            </div>

                            <div className='notificacion'>
                                <div className='notifImg'>
                                    <img src={logo} />
                                </div>
                                <div className='notiInfo'>
                                    <div>
                                        <h3>Elias Arriaga</h3>
                                        <span>10/11/20</span>
                                        <p>Ha realizado un pago a Juan Diego</p>
                                    </div>
                                    <Button>Revisar Pagos</Button>
                                </div>
                                <div className='notEstado'></div>
                            </div>

                            <div className='notificacion'>
                                <div className='notifImg'>
                                    <img src={logo} />
                                </div>
                                <div className='notiInfo'>
                                    <div>
                                        <h3>Elias Arriaga</h3>
                                        <span>10/11/20</span>
                                        <p>Ha realizado un pago a Juan Diego</p>
                                    </div>
                                    <Button>Revisar Pagos</Button>
                                </div>
                                <div className='notEstado'></div>
                            </div>
                        </div>

                        <div id='ntcFooter'>
                            <p>Camposol&reg;</p>
                        </div>
                    </div>
                </div>

                <div id='notMenu'>
                    <div className='notMenuHead'>
                        <h2>Menu</h2>
                    </div>

                    <div className='notMenuBody'>
                        <Button variant='warning'>Marcar Todas como Leido</Button>
                        <Button variant='danger'>Borrar Todas las Notificaciones</Button>
                    </div>

                    <div className='notMenuFooter'>
                        <p>Camposol&reg;</p>
                    </div>
                </div>
            </Container>
        </>
    )
}
