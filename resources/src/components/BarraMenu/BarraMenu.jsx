import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {logo} from '../../utils/img';
import './BarraMenu.scss';

export default function BarraMenu() {
    const [closeSession, setCloseSession] = useState(false);

    const clearSession = () => {
        localStorage.clear();
        setCloseSession(true);
    }

    useEffect(() => {
        closeSession ? toast.info('Sesion Cerrada') : '';
    }, [closeSession])

    return (
        <Navbar expand='md'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logo} /> Camposol&reg;
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Link to='/' className='nav-link'>
                            <FontAwesomeIcon icon={faHome} />
                            Inicio
                        </Link>
                        <Link to='/functions' className='nav-link'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            Mis Funciones
                        </Link>
                        <NavDropdown title='Mi cuenta'>
                            <Link to='/myprofile' className='nav-link'>
                                <FontAwesomeIcon icon={faUser} />
                                Mi Cuenta
                            </Link>
                            <Link to='/' onClick={clearSession} className='nav-link'>
                                <FontAwesomeIcon icon={faSignInAlt} />
                                Cerrar session
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {closeSession ? <Redirect to='/login'/> : ''}
            </Container>
        </Navbar>
    )
}
