import React from 'react';
import { faUser, faMoneyCheckAlt, faUserClock, faChalkboardTeacher, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {controles} from '../../utils/funciones.js';

export default function ECHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/functions/echuman/users'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faUser} />
                Usuarios
            </NavLink>

            <NavLink exact to={'/functions/echuman/pagos'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink exact to={'/functions/echuman/horarios'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>

            <NavLink exact to={'/functions/echuman/capacitaciones'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                Capacitaciones
            </NavLink>

            <NavLink exact to={'/functions/notificaciones'} activeClassName='active' onClick={controles}>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
