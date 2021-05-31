import React from 'react';
import { faMoneyCheckAlt, faSortAmountUp, faUserClock, faChalkboardTeacher, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {checkbox} from '../../utils/funciones.js';

export default function GCHumanoLinks() {
    return (
        <>
            <NavLink exact to={'/functions/echuman/users'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faUser} />
                Usuarios
            </NavLink>

            <NavLink exact to={'/functions/gdchumano/pagos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                Ver Pagos
            </NavLink>

            <NavLink exact to={'/functions/gdchumano/aumentos'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faSortAmountUp} />
                Ver Aumentos
            </NavLink>

            <NavLink exact to={'/functions/gdchumano/horarios'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faUserClock} />
                Definir Horarios
            </NavLink>

            <NavLink exact to={'/functions/gdchumano/capacitaciones'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                Capacitaciones
            </NavLink>

            <NavLink exact to={'/functions/notificaciones'} activeClassName='active' onClick={checkbox}>
                <FontAwesomeIcon icon={faBell} />
                Notificaciones
            </NavLink>
        </>
    )
}
