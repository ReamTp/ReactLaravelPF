import React, { useEffect, useState } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import './NotificacionesPage.scss';
import notService from '../../services/Notificaciones';
import { logo } from '../../utils/img.js';
import { toast } from 'react-toastify';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NotificationsPage() {
    const [lista, setLista ] = useState([]);
    const [show, setShow] = useState(false);

    const obtenerDatos = async () => {
        const res = await notService.listar();
        setLista(res);
    }

    const markOfRead = async (id) => {
        const res = await notService.leerUna(id);

        res.success ? obtenerDatos(): toast.warning("La Notificacion ya fue marcada como leida");
    }

    const marksOfRead = async () => {
        const res = await notService.leerTodas();

        res.success ? obtenerDatos(): toast.warning("Sin notificaciones sin leer");
    }

    useEffect(() => {
        obtenerDatos();
    }, [])

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
                            {
                                lista.length > 0 ? (
                                    lista.map(elemento => (
                                        <div className='notificacion' key={elemento.id}>
                                            <div className='notifImg'>
                                                <img src={logo} />
                                            </div>
                                            <div className='notiInfo'>
                                                <div>
                                                    <h3>{elemento.nombre.split(' ')[0]} {elemento.apellido.split(' ')[0]} {elemento.leido ? '' : <Badge variant='danger'>Nuevo</Badge>}</h3>
                                                    <span>{elemento.fecha.split(' ')[0]}</span>
                                                    <p>{elemento.mensaje}</p>
                                                </div>
                                                <div className='buttons'>
                                                    <Button to='/pagos'>Revisar Pagos</Button>
                                                    <Button variant='warning' onClick={() => markOfRead(elemento.id)}>Marcar como Leido</Button>
                                                </div>
                                            </div>
                                            <div className='notEstado'></div>
                                        </div>
                                    ))
                                ) : <h3><center><FontAwesomeIcon icon={faBellSlash}/>  Sin Notificaciones</center></h3>
                            }
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
                        <Button variant='warning' onClick={marksOfRead}>Marcar Todas como Leido</Button>
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
