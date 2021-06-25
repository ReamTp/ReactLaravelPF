import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/Camposol.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faSignInAlt, faTimesCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import './BarraLateral.scss';
import GGeneralLinks from './GGeneralLinks';
import GDAdminFinanLinks from './GDAdminFinanLinks';
import EAdminFinanLinks from './EAdminFinanLinks';
import GCHumanoLinks from './GCHumanoLinks';
import ECHumanoLinks from './ECHumanoLinks';
import {checkbox} from '../../utils/funciones.js';

export default function BarraLateral(props) {
    const {nivel} = props;
    const [closeSession, setCloseSession] = useState(false);
    const [level, setLevel] = useState(nivel);

    useEffect(() => {
        const fondo = document.getElementsByClassName('container-menu')[0];
        const checkbox = document.getElementById('btn-menu');

        fondo.addEventListener('click', () => {
            checkbox.checked = false;
        });
    }, [])

    useEffect(() => {
        if(isNaN(nivel)){
            setLevel(nivel);
        }
    }, [level])

    const clearSession = () => {
        localStorage.clear();
        setCloseSession(true);
    }

    return (
        <>
            <div className='btn-menu'>
                <label htmlFor='btn-menu' className='icon-menu'>
                    <img src={logo}/>
                </label>
            </div>

            <input type='checkbox' id='btn-menu'/>
            <div className='container-menu'></div>
            <div className='cont-menu'>
                <div className='logo-blateral'>
                    <img src={logo} />
                    <h2>Camposol</h2>
                </div>
                <nav>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                        Inicio
                    </Link>

                    <NavLink exact to='/functions' activeClassName='active' onClick={checkbox}>
                        <FontAwesomeIcon icon={faBriefcase} />
                        Mis Funciones
                    </NavLink>

                    {nivel === 1 ? <GGeneralLinks/> : ''}
                    {nivel === 2 ? <GDAdminFinanLinks/> : ''}
                    {nivel === 3 ? <GCHumanoLinks/> : ''}
                    {nivel === 4 ? <EAdminFinanLinks/> : ''}
                    {nivel === 5 ? <ECHumanoLinks/> : ''}


                    <NavLink exact to={"/functions/notificaciones"} activeClassName="active" onClick={checkbox}>
                        <FontAwesomeIcon icon={faBell} />
                        Notificaciones
                    </NavLink>

                    <Link to='/' onClick={clearSession} className='nav-link-logout'>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Cerrar session
                    </Link>
                </nav>
                <label htmlFor='btn-menu' className='equis'>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </label>
            </div>

            <div className='clearfix'></div>
            {closeSession ? <Redirect to='/login'/> : ''}
        </>
    )
}
